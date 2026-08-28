import { useEffect, useMemo, useRef, useState } from 'react';
import { ALL_SCHOOLS, type LawSchool } from '../data/schools';

// Searchable school picker shared by the calculators. A plain <select> with
// 196 options is unusable, so this filters as you type and shows ranked
// schools first, unranked schools sorted by LSAT median.

interface SchoolSelectProps {
  id: string;
  value: string;
  onChange: (slug: string) => void;
  schools?: LawSchool[];
}

export default function SchoolSelect({
  id,
  value,
  onChange,
  schools = ALL_SCHOOLS,
}: SchoolSelectProps) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const selected = schools.find((s) => s.slug === value) ?? schools[0];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const base = q
      ? schools.filter((s) =>
          `${s.name} ${s.short} ${s.location}`.toLowerCase().includes(q),
        )
      : schools;
    return [...base]
      .sort((a, b) => {
        if (a.rank && b.rank) return a.rank - b.rank;
        if (a.rank) return -1;
        if (b.rank) return 1;
        return b.lsat.p50 - a.lsat.p50;
      })
      .slice(0, 12);
  }, [schools, query]);

  // Close the dropdown when clicking anywhere outside.
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  return (
    <div ref={rootRef} className="relative mt-2">
      <input
        id={id}
        type="text"
        role="combobox"
        aria-expanded={open}
        value={open ? query : selected.name}
        placeholder="Search all 196 ABA-approved schools…"
        onFocus={() => {
          setQuery('');
          setOpen(true);
        }}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        className="w-full rounded-lg border border-[var(--line)] bg-white px-3 py-2 text-sm text-navy-900 focus:border-navy-400 focus:outline-none"
      />
      {open && (
        <ul className="absolute z-20 mt-1 max-h-72 w-full overflow-auto rounded-lg border border-[var(--line)] bg-white py-1 shadow-lg">
          {filtered.length === 0 && (
            <li className="px-3 py-2 text-sm text-[var(--muted)]">
              No schools match "{query}"
            </li>
          )}
          {filtered.map((s) => (
            <li key={s.slug}>
              <button
                type="button"
                onClick={() => {
                  onChange(s.slug);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-sm hover:bg-[var(--soft)] ${
                  s.slug === value ? 'font-semibold text-navy-900' : 'text-navy-800'
                }`}
              >
                <span className="truncate">{s.name}</span>
                <span className="shrink-0 text-xs tabular-nums text-[var(--muted)]">
                  {s.rank ? `#${s.rank} · LSAT ${s.lsat.p50}` : `LSAT ${s.lsat.p50}`}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
