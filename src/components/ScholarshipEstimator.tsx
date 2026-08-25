import { useMemo, useState } from 'react';
import { ALL_SCHOOLS, T14_SCHOOLS } from '../data/schools';
import type { LawSchool } from '../data/schools';

// Scholarship estimator: scholarships track the same medians as admission, so
// how far you sit above a school's LSAT/GPA medians predicts the size of the
// offer. This gives a tiered estimate across the T14 and Top 50.

type Tier = 'full' | 'large' | 'partial' | 'none';

const TIER_META: Record<Tier, { label: string; amount: string; badge: string }> = {
  full: {
    label: 'Full tuition likely',
    amount: '~$60k-$80k+ / year',
    badge: 'bg-emerald-100 text-emerald-800 ring-emerald-200',
  },
  large: {
    label: 'Large scholarship',
    amount: '~$25k-$60k / year',
    badge: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  },
  partial: {
    label: 'Partial scholarship',
    amount: '~$10k-$25k / year',
    badge: 'bg-navy-50 text-navy-700 ring-navy-200',
  },
  none: {
    label: 'Little to none',
    amount: 'At or below medians',
    badge: 'bg-[var(--soft)] text-[var(--muted)] ring-[var(--line)]',
  },
};

function tierFor(school: LawSchool, lsat: number, gpa: number): Tier {
  const lsat75 = lsat >= school.lsat.p75;
  const lsat50 = lsat >= school.lsat.p50;
  const gpa75 = gpa >= school.gpa.p75;
  const gpa50 = gpa >= school.gpa.p50;
  if (lsat75 && gpa75) return 'full';
  if (lsat50 && gpa50) return 'large';
  if (lsat50 || gpa50) return 'partial';
  return 'none';
}

export default function ScholarshipEstimator() {
  const [lsat, setLsat] = useState(170);
  const [gpa, setGpa] = useState(3.85);
  const [showAll, setShowAll] = useState(false);

  const schools = showAll ? ALL_SCHOOLS : T14_SCHOOLS;

  const rows = useMemo(
    () =>
      schools.map((s) => ({
        school: s,
        tier: tierFor(s, lsat, gpa),
      })),
    [schools, lsat, gpa],
  );

  const counts = useMemo(() => {
    const c: Record<Tier, number> = { full: 0, large: 0, partial: 0, none: 0 };
    for (const r of rows) c[r.tier]++;
    return c;
  }, [rows]);

  return (
    <div className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-6 lg:grid-cols-3">
        <div>
          <label htmlFor="sch-lsat" className="block text-sm font-semibold text-navy-900">
            Your LSAT
          </label>
          <div className="mt-2 flex items-center gap-3">
            <input
              id="sch-lsat"
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
          <label htmlFor="sch-gpa" className="block text-sm font-semibold text-navy-900">
            Your GPA
          </label>
          <div className="mt-2 flex items-center gap-3">
            <input
              id="sch-gpa"
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

        <div className="rounded-xl bg-navy-900 p-5 text-white">
          <p className="text-sm text-navy-200">Scholarship outlook</p>
          <p className="mt-1 text-sm leading-relaxed text-navy-100">
            {counts.full} full-tuition · {counts.large} large · {counts.partial} partial ·{' '}
            {counts.none} little-to-none
          </p>
        </div>
      </div>

      <div className="mt-6 overflow-x-auto rounded-xl border border-[var(--line)]">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-[var(--line)] bg-[var(--soft)] text-left">
              <th className="px-4 py-3 font-semibold text-navy-900">School</th>
              <th className="px-4 py-3 font-semibold text-navy-900">Your LSAT vs. median</th>
              <th className="px-4 py-3 font-semibold text-navy-900">Your GPA vs. median</th>
              <th className="px-4 py-3 font-semibold text-navy-900">Scholarship outlook</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ school, tier }) => {
              const meta = TIER_META[tier];
              const lsatDelta = lsat - school.lsat.p50;
              const gpaDelta = gpa - school.gpa.p50;
              return (
                <tr key={school.slug} className="border-b border-[var(--line)] last:border-0">
                  <td className="px-4 py-3 font-medium text-navy-900">{school.short}</td>
                  <td className="px-4 py-3 tabular-nums text-[var(--muted)]">
                    {lsatDelta >= 0 ? `+${lsatDelta}` : lsatDelta}
                  </td>
                  <td className="px-4 py-3 tabular-nums text-[var(--muted)]">
                    {gpaDelta >= 0 ? `+${gpaDelta.toFixed(2)}` : gpaDelta.toFixed(2)}
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${meta.badge}`}>
                      {meta.label}
                    </span>
                    <span className="ml-2 text-xs text-[var(--muted)]">{meta.amount}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setShowAll(!showAll)}
          className="text-sm font-medium text-navy-800 underline-offset-2 hover:underline"
        >
          {showAll ? 'Show T14 only' : 'Show all Top 50 schools'}
        </button>
        <p className="text-xs text-[var(--muted)]">
          Estimates assume you are at or above a school's medians. Actual awards vary by school and cycle.
        </p>
      </div>
    </div>
  );
}
