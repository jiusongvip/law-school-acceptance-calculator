// Competitor comparison data for the "vs" intent coverage.
// Reflects the latest (2024-2025) state of each competitor.

export interface ComparisonRow {
  feature: string;
  ours: string;
  oursAdvantage: boolean;
  sevenSage: string;
  lsd: string;
  lsac: string;
}

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: 'Cost',
    ours: '100% free',
    oursAdvantage: true,
    sevenSage: 'Free predictor (paid prep courses)',
    lsd: 'Free',
    lsac: 'Free',
  },
  {
    feature: 'Signup required',
    ours: 'None — full results instantly',
    oursAdvantage: true,
    sevenSage: 'None for the predictor (account to track schools)',
    lsd: 'Required to log your decisions',
    lsac: 'Required for full access',
  },
  {
    feature: 'Accept / Waitlist / Reject odds',
    ours: 'Acceptance probability per school',
    oursAdvantage: false,
    sevenSage: 'All three probabilities',
    lsd: 'Real reported outcomes',
    lsac: 'Likelihood ranges',
  },
  {
    feature: 'URM / background input',
    ours: 'Not offered',
    oursAdvantage: false,
    sevenSage: 'URM status factored in',
    lsd: 'Not offered',
    lsac: 'Not offered',
  },
  {
    feature: 'Reach / Target / Safety tiers',
    ours: 'Automatic for every school',
    oursAdvantage: true,
    sevenSage: '4 tiers (adds super-reach)',
    lsd: 'Not offered',
    lsac: 'Not offered',
  },
  {
    feature: 'Reverse calculator (LSAT needed)',
    ours: 'Included',
    oursAdvantage: true,
    sevenSage: 'Not offered',
    lsd: 'Not offered',
    lsac: 'Not offered',
  },
  {
    feature: 'Retake / score-impact analysis',
    ours: 'Included',
    oursAdvantage: true,
    sevenSage: 'Not offered',
    lsd: 'Not offered',
    lsac: 'Not offered',
  },
  {
    feature: 'Application cost calculator',
    ours: 'Included',
    oursAdvantage: true,
    sevenSage: 'Separate scholarship calculator',
    lsd: 'Not offered',
    lsac: 'Not offered',
  },
  {
    feature: 'Application deadlines table',
    ours: 'T14 deadlines + 6-step timeline',
    oursAdvantage: true,
    sevenSage: 'Per-school pages',
    lsd: 'School pages only',
    lsac: 'Not offered',
  },
  {
    feature: 'Score-band guides (LSAT & GPA)',
    ours: 'Full 6-band guides with strategy',
    oursAdvantage: true,
    sevenSage: 'Brief medians overview',
    lsd: 'Scattered articles',
    lsac: 'Not offered',
  },
  {
    feature: 'Splitter strategy guides',
    ours: '4 detailed playbooks',
    oursAdvantage: true,
    sevenSage: 'Not offered',
    lsd: 'Not offered',
    lsac: 'Not offered',
  },
  {
    feature: 'School profiles (what each wants)',
    ours: '14 in-depth T14 profiles',
    oursAdvantage: true,
    sevenSage: 'Data tables only',
    lsd: 'Data + community',
    lsac: 'Data only',
  },
  {
    feature: 'Data source',
    ours: 'ABA 509, 2025 entering class',
    oursAdvantage: false,
    sevenSage: 'ABA 509 + ML model',
    lsd: 'Crowdsourced applicant data',
    lsac: 'Official ABA data',
  },
  {
    feature: 'Community / self-reported decisions',
    ours: 'Not offered',
    oursAdvantage: false,
    sevenSage: 'Decision tracker (account)',
    lsd: 'Extensive (real applicant outcomes)',
    lsac: 'Not offered',
  },
];

export const COMPETITORS = {
  sevenSage: {
    name: '7Sage',
    url: 'https://7sage.com',
    description:
      'A popular LSAT prep company whose predictor is now free and uses a machine-learning model to estimate acceptance, waitlist, and rejection odds across 190+ schools. It lacks the reverse calculator, retake analysis, cost estimator, and deep written guides found here.',
  },
  lsd: {
    name: 'LSD.law',
    url: 'https://lsd.law',
    description:
      'A community data site with real, self-reported applicant decisions and school percentile charts. It has no one-click probability calculator, no tiered results, and no decision tools, but its crowd-sourced outcomes are a useful supplement to ABA data.',
  },
  lsac: {
    name: 'LSAC Official',
    url: 'https://lsac.org',
    description:
      'The official source for LSAT and ABA data, but its calculator omits several top schools (Yale, Stanford, Chicago, Penn) and offers no decision tiers, reverse calculation, or application planning tools.',
  },
};
