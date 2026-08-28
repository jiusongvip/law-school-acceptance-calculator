import { useMemo, useState } from 'react';
import { ALL_SCHOOLS, DATA_YEAR } from '../data/schools';

// Interactive table over all 196 ABA-approved law schools: search, rank-range
// filter, and column sorting. Shows 50 rows by default so the page stays
// light; "Show all 196" expands the full list. The static T14 / Top 50 tables
// above remain crawlable for SEO — this one is for exploration.

type Range = 'all' | 'top14' | 'top50';
type SortKey = 'rank' | 'lsat' | 'gpa' | 'rate' | 'tuition';

const RANGE_OPTIONS: { value: Range; label: string }[] = [
  { value: 'all', label: 'All 196 schools' },
  { value: 'top14', label: 'Top 14 only' },
  { value: 'top50', label: 'Top 50 only' },
];

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: 'rank', label: 'Sort: US News rank' },
  { value: 'lsat', label: 'Sort: LSAT median (high → low)' },
  { value: 'gpa', label: 'Sort: GPA median (high → low)' },
  { value: 'rate', label: 'Sort: Acceptance rate (low → high)' },
  { value: 'tuition', label: 'Sort: Tuition (high → low)' },
];

const fmtTuition = (v: number) => (v ? `$${v.toLocaleString('en-US')}` : '—');

export default function AllSchoolsTable() {
  const [query, setQuery] = useState('');
  const [range, setRange] = useState<Range>('all');
  const [sortKey, setSortKey] = useState<SortKey>('rank');
  const [showAll, setShowAll] = useState(false);

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = ALL_SCHOOLS;
    if (range === 'top14') list = list.filter((s) => s.rank >= 1 && s.rank <= 14);
    else if (range === 'top50') list = list.filter((s) => s.rank >= 1 && s.rank <= 50);
    if (q) {
      list = list.filter((s) =>
        `${s.name} ${s.short} ${s.location}`.toLowerCase().includes(q),
      );
    }
    return [...list].sort((a, b) => {
      switch (sortKey) {
        case 'lsat':
          return b.lsat.p50 - a.lsat.p50 || (a.rank || 999) - (b.rank || 999);
        case 'gpa':
          return b.gpa.p50 - a.gpa.p50 || (a.rank || 999) - (b.rank || 999);
        case 'rate':
          return a.acceptanceRate - b.acceptanceRate || (a.rank || 999) - (b.rank || 999);
        case 'tuition':
          return b.tuition - a.tuition || (a.rank || 999) - (b.rank || 999);
        default:
          return (a.rank || 999) - (b.rank || 999) || b.lsat.p50 - a.lsat.p50;
      }
    });
  }, [query, range, sortKey]);

  // Searching implies intent to browse, so show every match then.
  const visible = showAll || query.trim() ? rows : rows.slice(0, 50);

  return (
    <div>
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-3">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search school name or city…"
          aria-label="Search all law schools"
          className="w-full max-w-xs rounded-lg border border-[var(--line)] bg-white px-3 py-2 text-sm text-navy-900 focus:border-navy-400 focus:outline-none"
        />
        <select
          value={range}
          onChange={(e) => setRange(e.target.value as Range)}
          aria-label="Filter by rank range"
          className="rounded-lg border border-[var(--line)] bg-white px-3 py-2 text-sm text-navy-900 focus:border-navy-400 focus:outline-none"
        >
          {RANGE_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <select
          value={sortKey}
          onChange={(e) => setSortKey(e.target.value as SortKey)}
          aria-label="Sort schools"
          className="rounded-lg border border-[var(--line)] bg-white px-3 py-2 text-sm text-navy-900 focus:border-navy-400 focus:outline-none"
        >
          {SORT_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <span className="text-xs tabular-nums text-[var(--muted)]">
          Showing {visible.length} of {rows.length} schools
        </span>
      </div>

      {/* Table */}
      <div className="mt-4 overflow-x-auto rounded-2xl border border-[var(--line)] bg-white shadow-card">
        <table className="w-full min-w-[860px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-[var(--line)] bg-[var(--soft)] text-left">
              <th className="px-4 py-3 font-semibold text-navy-900">Rank</th>
              <th className="px-4 py-3 font-semibold text-navy-900">School</th>
              <th className="px-4 py-3 font-semibold text-navy-900">Location</th>
              <th className="px-4 py-3 font-semibold text-navy-900">Acceptance Rate</th>
              <th className="px-4 py-3 font-semibold text-navy-900">LSAT Median</th>
              <th className="px-4 py-3 font-semibold text-navy-900">LSAT 25th-75th</th>
              <th className="px-4 py-3 font-semibold text-navy-900">GPA Median</th>
              <th className="px-4 py-3 font-semibold text-navy-900">Tuition</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((s) => (
              <tr
                key={s.slug}
                className="border-b border-[var(--line)] last:border-0"
              >
                <td className="px-4 py-3 tabular-nums text-[var(--muted)]">
                  {s.rank ? `#${s.rank}` : '—'}
                </td>
                <td className="px-4 py-3 font-medium text-navy-900">{s.name}</td>
                <td className="px-4 py-3 text-[var(--muted)]">{s.location || '—'}</td>
                <td className="px-4 py-3 tabular-nums text-navy-900">
                  {Math.round(s.acceptanceRate * 100)}%
                </td>
                <td className="px-4 py-3 font-semibold tabular-nums text-navy-900">
                  {s.lsat.p50}
                </td>
                <td className="px-4 py-3 tabular-nums text-[var(--muted)]">
                  {s.lsat.p25}-{s.lsat.p75}
                </td>
                <td className="px-4 py-3 tabular-nums text-navy-900">
                  {s.gpa.p50.toFixed(2)}
                </td>
                <td className="px-4 py-3 tabular-nums text-[var(--muted)]">
                  {fmtTuition(s.tuition)}
                </td>
              </tr>
            ))}
            {visible.length === 0 && (
              <tr>
                <td colSpan={8} className="px-4 py-8 text-center text-sm text-[var(--muted)]">
                  No schools match "{query}". Try a different search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Expand toggle */}
      {rows.length > 50 && !query.trim() && (
        <div className="mt-4 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="text-sm font-medium text-navy-800 underline-offset-2 hover:underline"
          >
            {showAll ? 'Show first 50 schools' : `Show all ${rows.length} schools`}
          </button>
          <p className="text-xs text-[var(--muted)]">
            Full ABA 509 dataset — {DATA_YEAR} entering class.
          </p>
        </div>
      )}
    </div>
  );
}
