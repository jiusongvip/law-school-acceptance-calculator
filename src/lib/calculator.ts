import type { LawSchool } from '../data/schools';

// Weighted-deviation probability model.
//
// The chance of admission is estimated by how far the applicant's LSAT and GPA
// sit from each school's enrolled-student median, expressed in comparable
// "standard deviation" units, then shifted on the log-odds scale anchored at
// the school's acceptance rate. This keeps LSAT and GPA sensitivities matched
// (1 LSAT point ≈ 0.05 GPA) and avoids the saturation that a naive sigmoid
// produces on real score ranges.
//
// Weighting: LSAT 60% / GPA 40%, reflecting admissions officers' public
// statements that the LSAT carries more weight in law school decisions.
//
// In addition to the acceptance probability, we estimate a waitlist and a
// rejection probability so the output mirrors what admissions offices actually
// produce (accept / waitlist / reject) rather than a single number.

export type Tier = 'reach' | 'target' | 'safety';

export interface Prediction {
  school: LawSchool;
  probability: number; // acceptance probability, 0-1
  waitlist: number; // waitlist probability, 0-1
  reject: number; // rejection probability, 0-1
  tier: Tier;
  lsatDelta: number; // applicant LSAT minus school p50
  gpaDelta: number; // applicant GPA minus school p50
}

const LSAT_WEIGHT = 0.6;
const GPA_WEIGHT = 0.4;

// Normalization: how many raw points equal one "standard deviation" of the
// enrolled class. T14 25th-75th LSAT spans roughly 4-6 points, so ~3 points is
// one unit; the 25th-75th GPA spans roughly 0.15-0.2, so ~0.1 is one unit.
const LSAT_UNIT = 3;
const GPA_UNIT = 0.1;

// How much the log-odds shift per one normalized unit of distance from median.
// Calibrated so that a perfect 180/4.0 clears the "safety" bar (>55%) at the
// bottom of the T14, while a median applicant lands near the school's raw
// acceptance rate.
const LOGIT_SLOPE = 1.0;

// Underrepresented minority (URM) status is modeled as an effective LSAT boost
// of a few points, reflecting the documented tendency for URM applicants to be
// admitted at slightly lower numeric medians.
const URM_LSAT_BOOST = 3;

function sigmoid(x: number): number {
  return 1 / (1 + Math.exp(-x));
}

export function predict(
  school: LawSchool,
  lsat: number,
  gpa: number,
  urm = false,
): number {
  const effectiveLsat = urm ? lsat + URM_LSAT_BOOST : lsat;

  // Normalized distance from the median, in comparable units.
  const lsatZ = (effectiveLsat - school.lsat.p50) / LSAT_UNIT;
  const gpaZ = (gpa - school.gpa.p50) / GPA_UNIT;
  const z = LSAT_WEIGHT * lsatZ + GPA_WEIGHT * gpaZ;

  // Anchor at the school's acceptance rate (the baseline log-odds when you sit
  // exactly at the median), then shift by the weighted distance.
  const baselineLogit = Math.log(school.acceptanceRate / (1 - school.acceptanceRate));
  const adjustedLogit = baselineLogit + z * LOGIT_SLOPE;

  const p = sigmoid(adjustedLogit);
  return Math.min(0.98, Math.max(0.02, p));
}

// Waitlist probability peaks for borderline applicants (acceptance odds around
// 30-40%) and tapers off at both extremes, mirroring how schools actually use
// their waitlists.
function waitlistProbability(accept: number): number {
  const center = 0.35;
  const width = 0.15;
  return 0.28 * Math.exp(-Math.pow(accept - center, 2) / (2 * width * width));
}

export function predictOutcomes(
  school: LawSchool,
  lsat: number,
  gpa: number,
  urm = false,
): { accept: number; waitlist: number; reject: number } {
  const accept = predict(school, lsat, gpa, urm);
  const waitlist = waitlistProbability(accept);
  const reject = Math.max(0, 1 - accept - waitlist);
  return { accept, waitlist, reject };
}

export function classify(probability: number): Tier {
  if (probability < 0.25) return 'reach';
  if (probability <= 0.55) return 'target';
  return 'safety';
}

export function buildPredictions(
  schools: LawSchool[],
  lsat: number,
  gpa: number,
  urm = false,
): Prediction[] {
  return schools
    .map((school) => {
      const { accept, waitlist, reject } = predictOutcomes(school, lsat, gpa, urm);
      const effectiveLsat = urm ? lsat + URM_LSAT_BOOST : lsat;
      return {
        school,
        probability: accept,
        waitlist,
        reject,
        tier: classify(accept),
        lsatDelta: effectiveLsat - school.lsat.p50,
        gpaDelta: gpa - school.gpa.p50,
      };
    })
    .sort((a, b) => b.probability - a.probability);
}

export const TIER_META: Record<Tier, { label: string; description: string }> = {
  reach: {
    label: 'Reach',
    description: 'Below the median. Possible, but these schools are a stretch.',
  },
  target: {
    label: 'Target',
    description: 'Near the median. Solid, realistic options for your numbers.',
  },
  safety: {
    label: 'Safety',
    description: 'Above the median. Strong odds of an offer from these schools.',
  },
};
