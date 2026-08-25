import { useMemo, useState } from 'react';
import { T14_SCHOOLS } from '../data/schools';

// Score positioning: shows where the applicant's LSAT and GPA fall relative to
// a selected school's 25th / 50th / 75th percentile. This is the visualization
// the LSAC official calculator is known for, rebuilt as a clearer, faster tool.

function clamp(v: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, v));
}

function positionPct(value: number, start: number, end: number): number {
  return clamp(((value - start) / (end - start)) * 100, 0, 100);
}

type Tone = 'below' | 'low' | 'high' | 'above';

function positionLabel(value: number, p25: number, p50: number, p75: number): { text: string; tone: Tone } {
  if (value < p25) return { text: 'below the 25th percentile', tone: 'below' };
  if (value < p50) return { text: 'between the 25th and 50th percentile', tone: 'low' };
  if (value < p75) return { text: 'between the 50th and 75th percentile', tone: 'high' };
  return { text: 'above the 75th percentile', tone: 'above' };
}

const TONE_TEXT: Record<Tone, string> = {
  below: 'text-amber-700',
  low: 'text-navy-700',
  high: 'text-navy-700',
  above: 'text-emerald-700',
};

function PercentileBar({
  start,
  end,
  p25,
  p50,
  p75,
  value,
  fmt,
}: {
  start: number;
  end: number;
  p25: number;
  p50: number;
  p75: number;
  value: number;
  fmt: (n: number) => string;
}) {
  const p25Pct = positionPct(p25, start, end);
  const p50Pct = positionPct(p50, start, end);
  const p75Pct = positionPct(p75, start, end);
  const valuePct = positionPct(value, start, end);

  return (
    <div>
      <div className="relative h-3">
        <div className="absolute inset-0 flex overflow-hidden rounded-full ring-1 ring-[var(--line)]">
          <div className="bg-amber-200" style={{ width: `${p25Pct}%` }} />
          <div className="bg-navy-200" style={{ width: `${p75Pct - p25Pct}%` }} />
          <div className="bg-emerald-200" style={{ width: `${100 - p75Pct}%` }} />
        </div>
        <div
          className="absolute top-0 h-full w-0.5 bg-navy-400"
          style={{ left: `${p50Pct}%` }}
          title={`Median: ${fmt(p50)}`}
        />
        <div
          className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-navy-900 shadow"
          style={{ left: `${valuePct}%` }}
          title={`You: ${fmt(value)}`}
        />
      </div>
      <div className="mt-1.5 flex justify-between text-xs tabular-nums text-[var(--muted)]">
        <span>25th: {fmt(p25)}</span>
        <span>50th: {fmt(p50)}</span>
        <span>75th: {fmt(p75)}</span>
      </div>
    </div>
  );
}

export default function ScorePositioning() {
  const [schoolSlug, setSchoolSlug] = useState(T14_SCHOOLS[3].slug); // Harvard default
  const [lsat, setLsat] = useState(170);
  const [gpa, setGpa] = useState(3.85);

  const school = useMemo(
    () => T14_SCHOOLS.find((s) => s.slug === schoolSlug) ?? T14_SCHOOLS[0],
    [schoolSlug],
  );

  const lsatStart = school.lsat.p25 - 6;
  const lsatEnd = school.lsat.p75 + 4;
  const gpaStart = school.gpa.p25 - 0.2;
  const gpaEnd = school.gpa.p75 + 0.1;

  const lsatInfo = positionLabel(lsat, school.lsat.p25, school.lsat.p50, school.lsat.p75);
  const gpaInfo = positionLabel(gpa, school.gpa.p25, school.gpa.p50, school.gpa.p75);

  return (
    <div className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-6 lg:grid-cols-3">
        <div>
          <label htmlFor="pos-school" className="block text-sm font-semibold text-navy-900">
            Target school
          </label>
          <select
            id="pos-school"
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
          <p className="mt-2 text-xs text-[var(--muted)]">
            Acceptance rate: {Math.round(school.acceptanceRate * 100)}%
          </p>
        </div>

        <div>
          <label htmlFor="pos-lsat" className="block text-sm font-semibold text-navy-900">
            Your LSAT
          </label>
          <div className="mt-2 flex items-center gap-3">
            <input
              id="pos-lsat"
              type="range"
              min={120}
              max={180}
              step={1}
              value={lsat}
              onChange={(e) => setLsat(Number(e.target.value))}
              className="flex-1"
            />
            <span className="w-12 text-center text-lg font-semibold tabular-nums text-navy-900">
              {lsat}
            </span>
          </div>
        </div>

        <div>
          <label htmlFor="pos-gpa" className="block text-sm font-semibold text-navy-900">
            Your GPA
          </label>
          <div className="mt-2 flex items-center gap-3">
            <input
              id="pos-gpa"
              type="range"
              min={2.0}
              max={4.0}
              step={0.01}
              value={gpa}
              onChange={(e) => setGpa(Number(e.target.value))}
              className="flex-1"
            />
            <span className="w-12 text-center text-lg font-semibold tabular-nums text-navy-900">
              {gpa.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-navy-900">LSAT position at {school.short}</p>
            <span className={`text-sm font-semibold ${TONE_TEXT[lsatInfo.tone]}`}>{lsatInfo.text}</span>
          </div>
          <div className="mt-3">
            <PercentileBar
              start={lsatStart}
              end={lsatEnd}
              p25={school.lsat.p25}
              p50={school.lsat.p50}
              p75={school.lsat.p75}
              value={lsat}
              fmt={(n) => String(Math.round(n))}
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-navy-900">GPA position at {school.short}</p>
            <span className={`text-sm font-semibold ${TONE_TEXT[gpaInfo.tone]}`}>{gpaInfo.text}</span>
          </div>
          <div className="mt-3">
            <PercentileBar
              start={gpaStart}
              end={gpaEnd}
              p25={school.gpa.p25}
              p50={school.gpa.p50}
              p75={school.gpa.p75}
              value={gpa}
              fmt={(n) => n.toFixed(2)}
            />
          </div>
        </div>
      </div>

      <p className="mt-6 text-xs leading-relaxed text-[var(--muted)]">
        The dark dot is your score; the shaded band is the middle 50% of enrolled students
        (25th-75th percentile), with the line marking the median. Amber means below the 25th
        percentile, navy is the middle band, and green means above the 75th.
      </p>
    </div>
  );
}
