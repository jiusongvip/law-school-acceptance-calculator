import { useMemo, useState } from 'react';
import { CAS_SUBSCRIPTION, CAS_REPORT_FEE, LSAT_EXAM_FEE } from '../data/costs';

// Application cost estimator: how much does it cost to apply to N schools?

const AVG_APP_FEE = 85; // most schools charge $75-95

export default function CostCalculator() {
  const [schoolCount, setSchoolCount] = useState(8);
  const [includeLsat, setIncludeLsat] = useState(true);
  const [lsatAttempts, setLsatAttempts] = useState(2);

  const breakdown = useMemo(() => {
    const casSubscription = CAS_SUBSCRIPTION;
    const casReports = schoolCount * CAS_REPORT_FEE;
    const appFees = schoolCount * AVG_APP_FEE;
    const lsatFees = includeLsat ? lsatAttempts * LSAT_EXAM_FEE : 0;
    const total = casSubscription + casReports + appFees + lsatFees;
    return { casSubscription, casReports, appFees, lsatFees, total };
  }, [schoolCount, includeLsat, lsatAttempts]);

  const perSchool = useMemo(
    () => Math.round((breakdown.total / Math.max(schoolCount, 1)) * 100) / 100,
    [breakdown.total, schoolCount],
  );

  const rows = [
    { label: 'CAS subscription (one-time, 5 years)', value: breakdown.casSubscription },
    { label: `CAS reports (${schoolCount} schools x $${CAS_REPORT_FEE})`, value: breakdown.casReports },
    { label: `Application fees (${schoolCount} schools x ~$${AVG_APP_FEE})`, value: breakdown.appFees },
    ...(includeLsat
      ? [{ label: `LSAT exam (${lsatAttempts} attempts x $${LSAT_EXAM_FEE})`, value: breakdown.lsatFees }]
      : []),
  ];

  return (
    <div className="shadow-card rounded-2xl border border-[var(--line)] bg-white p-6 sm:p-8">
      <div className="grid gap-6 lg:grid-cols-3">
        <div>
          <label htmlFor="cost-schools" className="block text-sm font-semibold text-navy-900">
            Schools you plan to apply to
          </label>
          <input
            id="cost-schools"
            type="range"
            min={1}
            max={20}
            step={1}
            value={schoolCount}
            onChange={(e) => setSchoolCount(Number(e.target.value))}
            className="mt-4 w-full"
          />
          <span className="mt-1 inline-block text-2xl font-semibold tabular-nums text-navy-900">
            {schoolCount}
          </span>
        </div>

        <div>
          <label htmlFor="cost-attempts" className="block text-sm font-semibold text-navy-900">
            LSAT attempts
          </label>
          <input
            id="cost-attempts"
            type="range"
            min={1}
            max={5}
            step={1}
            value={lsatAttempts}
            onChange={(e) => setLsatAttempts(Number(e.target.value))}
            className="mt-4 w-full"
          />
          <span className="mt-1 inline-block text-2xl font-semibold tabular-nums text-navy-900">
            {lsatAttempts}
          </span>
          <label className="mt-2 flex items-center gap-2 text-sm text-[var(--muted)]">
            <input
              type="checkbox"
              checked={includeLsat}
              onChange={(e) => setIncludeLsat(e.target.checked)}
              className="h-4 w-4 rounded border-[var(--line)]"
            />
            Include LSAT fees
          </label>
        </div>

        <div className="rounded-xl bg-navy-900 p-6 text-white">
          <p className="text-sm text-navy-200">Estimated total cost</p>
          <p className="mt-1 text-4xl font-semibold tabular-nums tracking-tight">
            ${breakdown.total.toLocaleString()}
          </p>
          <p className="mt-2 text-sm text-navy-300">
            About ${perSchool.toFixed(0)} per school, including the one-time CAS fee.
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-[var(--line)]">
        {rows.map((row, i) => (
          <div
            key={row.label}
            className={`flex items-center justify-between px-4 py-3 ${
              i > 0 ? 'border-t border-[var(--line)]' : ''
            }`}
          >
            <span className="text-sm text-[var(--muted)]">{row.label}</span>
            <span className="text-sm font-semibold tabular-nums text-navy-900">
              ${row.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs leading-relaxed text-[var(--muted)]">
        Figures use the LSAC {new Date().getFullYear() - 1} fee schedule and an average $85
        application fee. Individual schools charge $75-95. Fee waivers from LSAC or schools can
        cover the CAS fee and up to six reports; many schools also grant application fee waivers on
        request.
      </p>
    </div>
  );
}
