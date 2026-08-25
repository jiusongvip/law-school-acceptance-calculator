import { useMemo, useState } from 'react';
import { T14_SCHOOLS } from '../data/schools';
import { predict } from '../lib/calculator';

// LSAT score sensitivity: how much does raising (or dropping) your LSAT change
// your chances at a given school? Answers the "should I retake?" decision.

export default function LsatImpact() {
  const [schoolSlug, setSchoolSlug] = useState(T14_SCHOOLS[3].slug); // Harvard default
  const [gpa, setGpa] = useState(3.7);
  const [currentLsat, setCurrentLsat] = useState(168);

  const school = useMemo(
    () => T14_SCHOOLS.find((s) => s.slug === schoolSlug) ?? T14_SCHOOLS[0],
    [schoolSlug],
  );

  // Show the probability curve across a range of LSAT scores.
  const points = useMemo(() => {
    const start = Math.max(120, currentLsat - 4);
    const end = Math.min(180, currentLsat + 6);
    const arr: { lsat: number; prob: number }[] = [];
    for (let l = start; l <= end; l++) {
      arr.push({ lsat: l, prob: predict(school, l, gpa) });
    }
    return arr;
  }, [school, gpa, currentLsat]);

  const currentProb = predict(school, currentLsat, gpa);
  const plus3Prob = predict(school, currentLsat + 3, gpa);
  const gain = plus3Prob - currentProb;

  const maxProb = Math.max(...points.map((p) => p.prob));
  const minProb = Math.min(...points.map((p) => p.prob));
  const range = Math.max(maxProb - minProb, 0.01);

  return (
    <div className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-6 lg:grid-cols-3">
        <div>
          <label htmlFor="impact-school" className="block text-sm font-semibold text-navy-900">
            School
          </label>
          <select
            id="impact-school"
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
          <label htmlFor="impact-lsat" className="block text-sm font-semibold text-navy-900">
            Current LSAT
          </label>
          <input
            id="impact-lsat"
            type="range"
            min={150}
            max={178}
            step={1}
            value={currentLsat}
            onChange={(e) => setCurrentLsat(Number(e.target.value))}
            className="mt-4 w-full"
          />
          <span className="mt-1 inline-block text-lg font-semibold tabular-nums text-navy-900">
            {currentLsat}
          </span>
        </div>

        <div>
          <label htmlFor="impact-gpa" className="block text-sm font-semibold text-navy-900">
            GPA
          </label>
          <input
            id="impact-gpa"
            type="range"
            min={3.0}
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
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-[var(--line)] bg-[var(--background)] p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
            Your chance now
          </p>
          <p className="mt-1 text-3xl font-semibold tabular-nums text-navy-900">
            {Math.round(currentProb * 100)}%
          </p>
        </div>
        <div className="rounded-xl border border-[var(--line)] bg-[var(--background)] p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
            With +3 LSAT
          </p>
          <p className="mt-1 text-3xl font-semibold tabular-nums text-emerald-700">
            {Math.round(plus3Prob * 100)}%
          </p>
        </div>
        <div className="rounded-xl bg-navy-900 p-4 text-white">
          <p className="text-xs font-medium uppercase tracking-wide text-navy-200">Gain from +3</p>
          <p className="mt-1 text-3xl font-semibold tabular-nums">
            +{Math.round(gain * 100)} pts
          </p>
        </div>
      </div>

      {/* Probability curve */}
      <div className="mt-6">
        <div className="flex h-32 items-stretch gap-1">
          {points.map((p) => (
            <div key={p.lsat} className="flex flex-1 flex-col items-center justify-end">
              <div
                className={`w-full rounded-t ${p.lsat === currentLsat ? 'bg-navy-700' : 'bg-navy-200'}`}
                style={{ height: `${Math.max(((p.prob - minProb) / range) * 100, 4)}%` }}
                title={`LSAT ${p.lsat}: ${Math.round(p.prob * 100)}%`}
              />
            </div>
          ))}
        </div>
        <div className="mt-2 flex gap-1">
          {points.map((p) => (
            <div key={p.lsat} className="flex-1 text-center text-[10px] tabular-nums text-[var(--muted)]">
              {p.lsat === currentLsat ? <span className="font-semibold text-navy-800">{p.lsat}</span> : p.lsat}
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-[var(--muted)]">
          Your chance at {school.short} across LSAT scores from {points[0].lsat} to{' '}
          {points[points.length - 1].lsat}, holding GPA at {gpa.toFixed(2)}.
        </p>
      </div>
    </div>
  );
}
