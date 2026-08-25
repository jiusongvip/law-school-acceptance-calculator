// Application cost and deadline reference data.
// Source: LSAC fee schedule and school admissions pages, 2025-2026 cycle.
// Values shift slightly year to year; always confirm on the school website.

export interface SchoolDeadline {
  slug: string;
  name: string;
  short: string;
  earlyDecision: string | null;
  regularDecision: string;
  applicationFee: number; // USD
}

// LSAC fees (2025-2026 cycle)
export const CAS_SUBSCRIPTION = 207; // one-time, valid 5 years
export const CAS_REPORT_FEE = 45; // per school
export const LSAT_EXAM_FEE = 248; // per attempt

// T14 application deadlines. Regular decision dates are the final deadline.
// Early decision dates reflect binding ED where offered (Yale, Stanford, Harvard
// do not offer binding ED and are marked null).
export const T14_DEADLINES: SchoolDeadline[] = [
  { slug: 'yale-law-school', name: 'Yale Law School', short: 'Yale', earlyDecision: null, regularDecision: 'Dec 1', applicationFee: 85 },
  { slug: 'stanford-law-school', name: 'Stanford Law School', short: 'Stanford', earlyDecision: null, regularDecision: 'Dec 2', applicationFee: 95 },
  { slug: 'university-of-chicago-law-school', name: 'University of Chicago Law School', short: 'UChicago', earlyDecision: 'Dec 1', regularDecision: 'Dec 15', applicationFee: 90 },
  { slug: 'harvard-law-school', name: 'Harvard Law School', short: 'Harvard', earlyDecision: null, regularDecision: 'Dec 1', applicationFee: 85 },
  { slug: 'columbia-law-school', name: 'Columbia Law School', short: 'Columbia', earlyDecision: 'Nov 15', regularDecision: 'Dec 15', applicationFee: 85 },
  { slug: 'nyu-school-of-law', name: 'NYU School of Law', short: 'NYU', earlyDecision: 'Nov 15', regularDecision: 'Feb 1', applicationFee: 85 },
  { slug: 'university-of-pennsylvania-carey-law', name: 'University of Pennsylvania Carey Law School', short: 'Penn', earlyDecision: 'Nov 15', regularDecision: 'Dec 15', applicationFee: 85 },
  { slug: 'university-of-virginia-school-of-law', name: 'University of Virginia School of Law', short: 'UVA', earlyDecision: 'Dec 1', regularDecision: 'Feb 1', applicationFee: 85 },
  { slug: 'duke-university-school-of-law', name: 'Duke University School of Law', short: 'Duke', earlyDecision: 'Nov 1', regularDecision: 'Feb 1', applicationFee: 85 },
  { slug: 'northwestern-pritzker-school-of-law', name: 'Northwestern Pritzker School of Law', short: 'Northwestern', earlyDecision: 'Dec 1', regularDecision: 'Feb 1', applicationFee: 85 },
  { slug: 'university-of-michigan-law-school', name: 'University of Michigan Law School', short: 'Michigan', earlyDecision: 'Nov 15', regularDecision: 'Feb 1', applicationFee: 75 },
  { slug: 'uc-berkeley-school-of-law', name: 'UC Berkeley School of Law', short: 'Berkeley', earlyDecision: 'Nov 15', regularDecision: 'Feb 1', applicationFee: 85 },
  { slug: 'cornell-law-school', name: 'Cornell Law School', short: 'Cornell', earlyDecision: 'Jan 1', regularDecision: 'Feb 1', applicationFee: 85 },
  { slug: 'georgetown-university-law-center', name: 'Georgetown University Law Center', short: 'Georgetown', earlyDecision: 'Mar 1', regularDecision: 'Feb 5', applicationFee: 90 },
];

// Recommended application timeline (months before the fall you plan to enroll).
export const TIMELINE = [
  { when: '18-24 months before', task: 'Research schools, take a diagnostic LSAT, and plan your study timeline.' },
  { when: '12-15 months before', task: 'Take the LSAT for the first time, secure recommenders, and begin your personal statement.' },
  { when: '8-12 months before', task: 'Register for CAS, send transcripts, and finalize your school list.' },
  { when: '6 months before', task: 'Retake the LSAT if needed. Most schools accept scores up to their deadline.' },
  { when: '3-4 months before', task: 'Submit applications. Aim for November for rolling-admissions schools.' },
  { when: 'Deadline', task: 'Confirm every school received all materials through LSAC.' },
];
