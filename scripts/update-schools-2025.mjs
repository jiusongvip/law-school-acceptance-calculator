// Generate src/data/schools.ts with all 196 ABA-approved law schools.
//
// Data source: backend.abarequireddisclosures.org (ABA Standard 509 compilations)
//  - aba-2025-full.json : LSAT/GPA percentiles, acceptance rate, tuition
//  - aba-2025-types.json: Public/Private school type (Basics section)
//
// T14_SCHOOLS and TOP30_SCHOOLS keep their curated identity (slug, name,
// location, rank, publicSchool) and get refreshed numeric fields. The
// remaining schools are generated into EXTRA_SCHOOLS with rank 0 (no US News
// rank) and location '' (not reported in the ABA compilations).

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const stripBom = (p) =>
  readFileSync(join(__dirname, 'aba-data', p), 'utf8').replace(/^\uFEFF/, '');

const abaData = JSON.parse(stripBom('aba-2025-full.json'));
const schoolTypes = JSON.parse(stripBom('aba-2025-types.json'));

const ABA_NAME_BY_SLUG = {
  'yale-law-school': 'Yale University',
  'stanford-law-school': 'Stanford University',
  'university-of-chicago-law-school': 'Chicago, The University of',
  'harvard-law-school': 'Harvard University',
  'columbia-law-school': 'Columbia University',
  'nyu-school-of-law': 'New York University',
  'university-of-pennsylvania-carey-law': 'Pennsylvania, University of',
  'university-of-virginia-school-of-law': 'Virginia, University of',
  'duke-university-school-of-law': 'Duke University',
  'northwestern-pritzker-school-of-law': 'Northwestern University',
  'university-of-michigan-law-school': 'Michigan, University of',
  'uc-berkeley-school-of-law': 'California-Berkeley, University of',
  'cornell-law-school': 'Cornell University',
  'georgetown-university-law-center': 'Georgetown University',
  'ucla-school-of-law': 'California-Los Angeles, University of',
  'washington-university-school-of-law': 'Washington University (St. Louis)',
  'vanderbilt-university-law-school': 'Vanderbilt University',
  'university-of-texas-school-of-law': 'Texas, University of',
  'usc-gould-school-of-law': 'Southern California, University of',
  'boston-university-school-of-law': 'Boston University',
  'university-of-notre-dame-law-school': 'Notre Dame, University of',
  'university-of-minnesota-law-school': 'Minnesota, University of',
  'boston-college-law-school': 'Boston College',
  'fordham-university-school-of-law': 'Fordham University',
  'university-of-florida-levin-college-of-law': 'Florida, University of',
  'university-of-north-carolina-school-of-law': 'North Carolina, University of',
  'george-washington-university-law-school': 'George Washington University, The',
  'emory-university-school-of-law': 'Emory University',
  'university-of-alabama-school-of-law': 'Alabama, The University of',
  'university-of-georgia-school-of-law': 'Georgia, University of',
};

// slug -> [name, short, location, rank, publicSchool]
const IDENTITY = {
  'yale-law-school': ['Yale Law School', 'Yale', 'New Haven, CT', 1, false],
  'stanford-law-school': ['Stanford Law School', 'Stanford', 'Stanford, CA', 1, false],
  'university-of-chicago-law-school': ['University of Chicago Law School', 'UChicago', 'Chicago, IL', 3, false],
  'harvard-law-school': ['Harvard Law School', 'Harvard', 'Cambridge, MA', 4, false],
  'columbia-law-school': ['Columbia Law School', 'Columbia', 'New York, NY', 5, false],
  'nyu-school-of-law': ['NYU School of Law', 'NYU', 'New York, NY', 5, false],
  'university-of-pennsylvania-carey-law': ['University of Pennsylvania Carey Law School', 'Penn', 'Philadelphia, PA', 7, false],
  'university-of-virginia-school-of-law': ['University of Virginia School of Law', 'UVA', 'Charlottesville, VA', 8, true],
  'duke-university-school-of-law': ['Duke University School of Law', 'Duke', 'Durham, NC', 9, false],
  'northwestern-pritzker-school-of-law': ['Northwestern Pritzker School of Law', 'Northwestern', 'Chicago, IL', 10, false],
  'university-of-michigan-law-school': ['University of Michigan Law School', 'Michigan', 'Ann Arbor, MI', 11, true],
  'uc-berkeley-school-of-law': ['UC Berkeley School of Law', 'Berkeley', 'Berkeley, CA', 12, true],
  'cornell-law-school': ['Cornell Law School', 'Cornell', 'Ithaca, NY', 13, false],
  'georgetown-university-law-center': ['Georgetown University Law Center', 'Georgetown', 'Washington, DC', 14, false],
  'ucla-school-of-law': ['UCLA School of Law', 'UCLA', 'Los Angeles, CA', 15, true],
  'washington-university-school-of-law': ['Washington University School of Law', 'WashU', 'St. Louis, MO', 16, false],
  'vanderbilt-university-law-school': ['Vanderbilt University Law School', 'Vanderbilt', 'Nashville, TN', 17, false],
  'university-of-texas-school-of-law': ['University of Texas School of Law', 'Texas', 'Austin, TX', 18, true],
  'usc-gould-school-of-law': ['USC Gould School of Law', 'USC', 'Los Angeles, CA', 19, false],
  'boston-university-school-of-law': ['Boston University School of Law', 'BU', 'Boston, MA', 20, false],
  'university-of-notre-dame-law-school': ['University of Notre Dame Law School', 'Notre Dame', 'Notre Dame, IN', 21, false],
  'university-of-minnesota-law-school': ['University of Minnesota Law School', 'Minnesota', 'Minneapolis, MN', 22, true],
  'boston-college-law-school': ['Boston College Law School', 'BC', 'Newton, MA', 23, false],
  'fordham-university-school-of-law': ['Fordham University School of Law', 'Fordham', 'New York, NY', 24, false],
  'university-of-florida-levin-college-of-law': ['University of Florida Levin College of Law', 'Florida', 'Gainesville, FL', 25, true],
  'university-of-north-carolina-school-of-law': ['University of North Carolina School of Law', 'UNC', 'Chapel Hill, NC', 26, true],
  'george-washington-university-law-school': ['George Washington University Law School', 'GW', 'Washington, DC', 27, false],
  'emory-university-school-of-law': ['Emory University School of Law', 'Emory', 'Atlanta, GA', 28, false],
  'university-of-alabama-school-of-law': ['University of Alabama School of Law', 'Alabama', 'Tuscaloosa, AL', 29, true],
  'university-of-georgia-school-of-law': ['University of Georgia School of Law', 'Georgia', 'Athens, GA', 30, true],
};

const T14_ORDER = [
  'yale-law-school', 'stanford-law-school', 'university-of-chicago-law-school',
  'harvard-law-school', 'columbia-law-school', 'nyu-school-of-law',
  'university-of-pennsylvania-carey-law', 'university-of-virginia-school-of-law',
  'duke-university-school-of-law', 'northwestern-pritzker-school-of-law',
  'university-of-michigan-law-school', 'uc-berkeley-school-of-law',
  'cornell-law-school', 'georgetown-university-law-center',
];
const TOP30_ORDER = [
  'ucla-school-of-law', 'washington-university-school-of-law',
  'vanderbilt-university-law-school', 'university-of-texas-school-of-law',
  'usc-gould-school-of-law', 'boston-university-school-of-law',
  'university-of-notre-dame-law-school', 'university-of-minnesota-law-school',
  'boston-college-law-school', 'fordham-university-school-of-law',
  'university-of-florida-levin-college-of-law',
  'university-of-north-carolina-school-of-law',
  'george-washington-university-law-school', 'emory-university-school-of-law',
  'university-of-alabama-school-of-law', 'university-of-georgia-school-of-law',
];

const fmtPct = (v) => (Math.round(v * 10000) / 10000).toFixed(4).replace(/0+$/, '').replace(/\.$/, '');
const fmtGpa = (v) => v.toFixed(2);

function buildSchool(slug) {
  const abaName = ABA_NAME_BY_SLUG[slug];
  const [name, short, location, rank, publicSchool] = IDENTITY[slug];
  const entry = abaData[abaName];
  if (!entry) throw new Error(`No ABA data found for ${abaName} (${slug})`);
  const { lsat, gpa, acceptanceRate } = entry.admissions;
  const t = entry.tuition;
  const tuition = t.ftNonResident > 0 ? t.ftNonResident : t.ftResident;
  return `  {
    slug: '${slug}',
    name: '${name}',
    short: '${short}',
    location: '${location}',
    rank: ${rank},
    acceptanceRate: ${fmtPct(acceptanceRate / 100)},
    lsat: { p25: ${lsat.p25}, p50: ${lsat.p50}, p75: ${lsat.p75} },
    gpa: { p25: ${fmtGpa(gpa.p25)}, p50: ${fmtGpa(gpa.p50)}, p75: ${fmtGpa(gpa.p75)} },
    tuition: ${tuition},
    publicSchool: ${publicSchool},
  },`;
}

// ---- Extra schools (all remaining ABA-approved schools) ----

function slugify(abaKey) {
  return abaKey
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function deriveShort(abaKey) {
  let s = abaKey.split(',')[0].trim();
  s = s.replace(/\s*\(.*\)\s*$/, '').trim();
  s = s.replace(/^The\s+/, '').trim();
  if (s.length > 24) s = abaKey.split(',')[0].split(' ')[0];
  return s;
}

const usedSlugs = new Set(T14_ORDER.concat(TOP30_ORDER));
const usedShorts = new Set(Object.values(IDENTITY).map((v) => v[1]));

const curatedAbaNames = new Set(Object.values(ABA_NAME_BY_SLUG));

const EXTRA = [];
for (const abaKey of Object.keys(abaData)) {
  if (curatedAbaNames.has(abaKey)) continue; // already covered by curated schools
  const slug = slugify(abaKey);
  const name = abaKey.replace(/^The\s+/, '');
  let short = deriveShort(abaKey);
  if (usedShorts.has(short)) short = name;
  const entry = abaData[abaKey];
  const { lsat, gpa, acceptanceRate } = entry.admissions;
  const t = entry.tuition;
  const tuition = t.ftNonResident > 0 ? t.ftNonResident : t.ftResident;
  const isPublic = schoolTypes[abaKey] === 'Public';
  EXTRA.push({
    slug,
    name,
    short,
    location: '',
    rank: 0,
    acceptanceRate: acceptanceRate / 100,
    lsat,
    gpa,
    tuition,
    publicSchool: isPublic,
  });
  usedSlugs.add(slug);
  usedShorts.add(short);
}

// Sort extras by LSAT median desc (then GPA median desc) so the table reads
// as a rough "selectivity order" below the featured schools.
EXTRA.sort((a, b) => b.lsat.p50 - a.lsat.p50 || b.gpa.p50 - a.gpa.p50);

function buildExtraSchool(s) {
  return `  {
    slug: '${s.slug}',
    name: '${s.name.replace(/'/g, "\\'")}',
    short: '${s.short.replace(/'/g, "\\'")}',
    location: '${s.location}',
    rank: ${s.rank},
    acceptanceRate: ${fmtPct(s.acceptanceRate)},
    lsat: { p25: ${s.lsat.p25}, p50: ${s.lsat.p50}, p75: ${s.lsat.p75} },
    gpa: { p25: ${fmtGpa(s.gpa.p25)}, p50: ${fmtGpa(s.gpa.p50)}, p75: ${fmtGpa(s.gpa.p75)} },
    tuition: ${s.tuition},
    publicSchool: ${s.publicSchool},
  },`;
}

const header = `// Law school admission data for all 196 ABA-approved law schools.
// Source: ABA 509 Required Disclosures, 2025 entering class (2024-2025 cycle).
// LSAT values are the 25th/50th/75th percentile of enrolled full-time students.
// GPA values follow the same percentile convention.
// Acceptance rates reflect the 2025 entering class as reported in ABA 509.
// Generated by scripts/update-schools-2025.mjs from the ABA compilation
// workbooks (scripts/aba-data/). Do not hand-edit the numeric fields.
//
// EXTRA_SCHOOLS carry rank 0 (no US News rank) and location '' (the ABA
// compilations do not report address data); sort them by LSAT median.

export interface LawSchool {
  slug: string;
  name: string;
  short: string;
  location: string;
  rank: number;
  acceptanceRate: number; // 0-1
  lsat: { p25: number; p50: number; p75: number };
  gpa: { p25: number; p50: number; p75: number };
  tuition: number; // annual, USD
  publicSchool: boolean;
}

// T14 + a representative slice of Top 50 for the single-page data tables.
// Medians reflect the most recent (2024-2025) ABA 509 disclosures.
export const T14_SCHOOLS: LawSchool[] = [
${T14_ORDER.map(buildSchool).join('\n')}
];

// Additional Top 15-30 schools shown in the TOP50 table.
export const TOP30_SCHOOLS: LawSchool[] = [
${TOP30_ORDER.map(buildSchool).join('\n')}
];

// Every other ABA-approved law school (rank 0 = no US News rank).
export const EXTRA_SCHOOLS: LawSchool[] = [
${EXTRA.map(buildExtraSchool).join('\n')}
];

// Curated list for tools that want a compact school set.
export const FEATURED_SCHOOLS: LawSchool[] = [...T14_SCHOOLS, ...TOP30_SCHOOLS];

// Complete list of all 196 ABA-approved law schools.
export const ALL_SCHOOLS: LawSchool[] = [...FEATURED_SCHOOLS, ...EXTRA_SCHOOLS];

export const DATA_YEAR = 2025;
`;

writeFileSync(join(ROOT, 'src', 'data', 'schools.ts'), header, 'utf8');
console.log(
  `Wrote schools.ts: ${T14_ORDER.length} T14 + ${TOP30_ORDER.length} Top30 + ${EXTRA.length} extra = ${T14_ORDER.length + TOP30_ORDER.length + EXTRA.length} schools.`,
);
