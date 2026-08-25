import { useMemo, useState } from 'react';
import { T14_SCHOOLS } from '../data/schools';
import { predict } from '../lib/calculator';

// Reverse calculator: pick a target school and current GPA, and it finds the
// LSAT score needed to reach a given admission probability at that school.

function neededLsat(targetProb: number, school: (typeof T14_SCHOOLS)[number], gpa: number): number {
  // Binary search over LSAT range using the forward predict() function.
  let lo = 120;
  let hi = 180;
  for (let i = 0; i < 40; i++) {
    const mid = (lo + hi) / 2;
    if (predict(school, mid, gpa) < targetProb) lo = mid;
    else hi = mid;
  }
  return Math.round((lo + hi) / 2);
}

export default function ReverseCalculator() {
  const [schoolSlug, setSchoolSlug] = useState('georgetown-university-law-center');
  const [gpa, setGpa] = useState(3.85);
  const [targetProb, setTargetProb] = useState(0.25);

  const school = useMemo(
    () => T14_SCHOOLS.find((s) => s.slug === schoolSlug) ?? T14_SCHOOLS[0],
    [schoolSlug],
  );

  const result = useMemo(() => neededLsat(targetProb, school, gpa), [school, gpa, targetProb]);
  const probabilityNow = useMemo(() => predict(school, result, gpa), [school, result, gpa]);
  const maxProb = useMemo(() => predict(school, 180, gpa), [school, gpa]);
  const unreachable = targetProb > maxProb;

  return (
    <div className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-6 lg:grid-cols-3">
        <div>
          <label htmlFor="rev-school" className="block text-sm font-semibold text-navy-900">
            Target school
          </label>
          <select
            id="rev-school"
            value={schoolSlug}
            onChange={(e) => setSchoolSlug(e.target.value)}
            className="mt-2 w-full rounded-lg border border-[var(--line)] bg-white px-3 py-2 text-sm text-navy-900 focus:border-navy-400 focus:outline-none"
          >
            {T14_SCHOOLS.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="rev-gpa" className="block text-sm font-semibold text-navy-900">
            Your GPA
          </label>
          <input
            id="rev-gpa"
            type="range"
            min={2.0}
            max={4.0}
            step={0.01}
            value={gpa}
            onChange={(e) => setGpa(Number(e.target.value))}
            className="mt-4 w-full"
          />
          <span className="mt-1 inline-block text-lg font-semibold tabular-nums text-navy-900">
            {gpa.toFixed(2)}
          </span>
        </div>

        <div>
          <label htmlFor="rev-target" className="block text-sm font-semibold text-navy-900">
            Target probability
          </label>
          <input
            id="rev-target"
            type="range"
            min={0.05}
            max={0.9}
            step={0.05}
            value={targetProb}
            onChange={(e) => setTargetProb(Number(e.target.value))}
            className="mt-4 w-full"
          />
          <span className="mt-1 inline-block text-lg font-semibold tabular-nums text-navy-900">
            {Math.round(targetProb * 100)}%
          </span>
        </div>
      </div>

      <div className="mt-6 rounded-xl bg-navy-900 p-6 text-white">
        <p className="text-sm text-navy-200">You need an LSAT of about</p>
        <p className="mt-1 text-4xl font-semibold tracking-tight">{unreachable ? '180+' : result}</p>
        <p className="mt-2 text-sm text-navy-200">
          to have roughly a {Math.round(targetProb * 100)}% chance at {school.short}. At that
          score, our model estimates {Math.round(probabilityNow * 100)}%.
        </p>
        {unreachable && (
          <p className="mt-3 rounded-lg bg-navy-800 p-3 text-xs leading-relaxed text-navy-200">
            Even a perfect 180 LSAT only gives you about {Math.round(maxProb * 100)}% at{' '}
            {school.short}, because its acceptance rate is just{' '}
            {Math.round(school.acceptanceRate * 100)}%. Try a lower target probability or a less
            selective school.
          </p>
        )}
        <p className="mt-3 text-xs text-navy-300">
          {school.short} median LSAT is {school.lsat.p50}; median GPA is {school.gpa.p50.toFixed(2)}.
        </p>
      </div>
    </div>
  );
}
