import { useEffect, useMemo, useState } from 'react';
import { ALL_SCHOOLS, T14_SCHOOLS } from '../data/schools';
import { buildPredictions, TIER_META, type Prediction, type Tier } from '../lib/calculator';

const TIER_STYLES: Record<Tier, { badge: string; bar: string; dot: string }> = {
  reach: {
    badge: 'bg-amber-50 text-amber-800 ring-amber-200',
    bar: 'bg-amber-500',
    dot: 'bg-amber-500',
  },
  target: {
    badge: 'bg-navy-50 text-navy-800 ring-navy-200',
    bar: 'bg-navy-600',
    dot: 'bg-navy-600',
  },
  safety: {
    badge: 'bg-emerald-50 text-emerald-800 ring-emerald-200',
    bar: 'bg-emerald-500',
    dot: 'bg-emerald-500',
  },
};

const TIER_ORDER: Tier[] = ['safety', 'target', 'reach'];

function fmtPercent(p: number): string {
  return `${Math.round(p * 100)}%`;
}

function StatBox({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="rounded-xl border border-[var(--line)] bg-white p-4">
      <p className="text-xs font-medium uppercase tracking-wide text-[var(--muted)]">{label}</p>
      <p className="mt-1 text-2xl font-semibold tracking-tight text-navy-900">{value}</p>
      <p className="mt-1 text-xs text-[var(--muted)]">{hint}</p>
    </div>
  );
}

function readInitial(param: string, fallback: number, min: number, max: number): number {
  if (typeof window === 'undefined') return fallback;
  const raw = new URLSearchParams(window.location.search).get(param);
  const v = raw ? Number(raw) : NaN;
  return Number.isFinite(v) && v >= min && v <= max ? v : fallback;
}

export default function ChancesCalculator() {
  const [lsat, setLsat] = useState(() => readInitial('lsat', 170, 120, 180));
  const [gpa, setGpa] = useState(() => readInitial('gpa', 3.85, 2.0, 4.0));
  const [urm, setUrm] = useState(() => {
    if (typeof window === 'undefined') return false;
    return new URLSearchParams(window.location.search).get('urm') === '1';
  });

  // Reflect the current inputs in the URL so users can share a link to their results.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    params.set('lsat', String(lsat));
    params.set('gpa', gpa.toFixed(2));
    if (urm) params.set('urm', '1');
    else params.delete('urm');
    const url = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, '', url);
  }, [lsat, gpa, urm]);

  const predictions = useMemo(
    () => buildPredictions(ALL_SCHOOLS, lsat, gpa, urm),
    [lsat, gpa, urm],
  );
  const t14Predictions = useMemo(
    () => buildPredictions(T14_SCHOOLS, lsat, gpa, urm),
    [lsat, gpa, urm],
  );

  const grouped = useMemo(() => {
    const map: Record<Tier, Prediction[]> = { reach: [], target: [], safety: [] };
    for (const p of t14Predictions) map[p.tier].push(p);
    return map;
  }, [t14Predictions]);

  const splitter =
    (lsat >= 170 && gpa < 3.5) || (lsat <= 158 && gpa >= 3.7);

  return (
    <div className="rounded-2xl border border-[var(--line)] bg-white shadow-sm">
      {/* Inputs */}
      <div className="grid gap-0 border-b border-[var(--line)] lg:grid-cols-2">
        <div className="p-6 sm:p-8">
          <label htmlFor="lsat-input" className="block text-sm font-semibold text-navy-900">
            LSAT Score
          </label>
          <div className="mt-2 flex items-center gap-3">
            <input
              id="lsat-input"
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
          <p className="mt-1 text-xs text-[var(--muted)]">120-180, median for T14 is about 173</p>
        </div>

        <div className="border-t border-[var(--line)] p-6 sm:p-8 lg:border-l lg:border-t-0">
          <label htmlFor="gpa-input" className="block text-sm font-semibold text-navy-900">
            Undergraduate GPA
          </label>
          <div className="mt-2 flex items-center gap-3">
            <input
              id="gpa-input"
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
          <p className="mt-1 text-xs text-[var(--muted)]">2.0-4.0, median for T14 is about 3.95</p>
        </div>
      </div>

      {/* Optional inputs */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-[var(--line)] px-6 py-4 sm:px-8">
        <label className="flex items-center gap-2 text-sm text-[var(--muted)]">
          <input
            type="checkbox"
            checked={urm}
            onChange={(e) => setUrm(e.target.checked)}
            className="h-4 w-4 rounded border-[var(--line)]"
          />
          Underrepresented minority (URM)
        </label>
        <p className="text-xs text-[var(--muted)]">
          URM status is modeled as a modest boost to your effective LSAT.
        </p>
      </div>

      {/* Splitter hint */}
      {splitter && (
        <div className="border-b border-[var(--line)] bg-amber-50/60 px-6 py-4 sm:px-8">
          <p className="text-sm text-amber-900">
            <span className="font-semibold">Splitter profile detected.</span>{' '}
            Your LSAT and GPA are far apart. Admissions officers weight the LSAT more heavily, so a
            high LSAT can partly offset a lower GPA (and vice versa). See the guide below for strategy.
          </p>
        </div>
      )}

      {/* T14 tiered results */}
      <div className="p-6 sm:p-8">
        <h3 className="text-lg font-semibold tracking-tight text-navy-900">
          Your chances at the T14
        </h3>
        <p className="mt-1 text-sm text-[var(--muted)]">
          Reach, target, and safety tiers based on {lsat} LSAT and {gpa.toFixed(2)} GPA
          {urm ? ' (URM)' : ''}. Each school shows your accept, waitlist, and reject odds.
        </p>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {TIER_ORDER.map((tier) => {
            const list = grouped[tier];
            const meta = TIER_META[tier];
            const style = TIER_STYLES[tier];
            return (
              <div key={tier} className="rounded-xl border border-[var(--line)] bg-[var(--background)]">
                <div className="flex items-center justify-between border-b border-[var(--line)] px-4 py-3">
                  <span className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${style.badge}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
                    {meta.label}
                  </span>
                  <span className="text-xs text-[var(--muted)]">{list.length} schools</span>
                </div>
                <ul className="divide-y divide-[var(--line)]">
                  {list.map((p) => (
                    <li key={p.school.slug} className="px-4 py-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-medium text-navy-900">{p.school.short}</span>
                        <span className="text-sm font-semibold tabular-nums text-navy-900">
                          {fmtPercent(p.probability)}
                        </span>
                      </div>
                      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[var(--line)]">
                        <div
                          className={`h-full rounded-full ${style.bar}`}
                          style={{ width: `${Math.round(p.probability * 100)}%` }}
                        />
                      </div>
                      <p className="mt-1.5 text-xs tabular-nums text-[var(--muted)]">
                        Waitlist {fmtPercent(p.waitlist)} · Reject {fmtPercent(p.reject)}
                      </p>
                    </li>
                  ))}
                  {list.length === 0 && (
                    <li className="px-4 py-6 text-center text-sm text-[var(--muted)]">
                      No schools in this tier.
                    </li>
                  )}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Top match summary */}
      <div className="border-t border-[var(--line)] p-6 sm:p-8">
        <h3 className="text-lg font-semibold tracking-tight text-navy-900">Snapshot</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <StatBox
            label="Best odds (T14)"
            value={t14Predictions.length ? fmtPercent(t14Predictions[0].probability) : 'N/A'}
            hint={t14Predictions.length ? t14Predictions[0].school.name : ''}
          />
          <StatBox
            label="Safety schools (all)"
            value={String(predictions.filter((p) => p.tier === 'safety').length)}
            hint="Above-median schools with strong odds"
          />
          <StatBox
            label="Data source"
            value="ABA 509"
            hint="2025 entering class percentiles"
          />
        </div>
      </div>
    </div>
  );
}
