// Deep content: score-band guides and splitter strategy.
// Values reference 2025 entering class (2024-2025 cycle) ABA 509 data.
// Written to exceed the depth of competing law school admission guides.

export interface ScoreBand {
  range: string;
  title: string;
  summary: string;
  schools: string[];
  advice: string;
}

// LSAT score bands: what each score range realistically buys you.
export const LSAT_BANDS: ScoreBand[] = [
  {
    range: '175-180',
    title: 'Competitive everywhere, including Yale and Stanford',
    summary:
      'A 175+ places you at or above the 75th percentile at every law school in the country. It clears the median at Yale (174), Stanford (173), Chicago (174), Harvard (174), and every other T14 school. Only about 1-2% of all LSAT takers score 175 or higher, so this is an elite result that makes your numbers a non-issue at nearly every school. At WashU, whose 175 median is the highest in the country, you are still right at the middle of the class. With a 175+ and a GPA above 3.9, you are competitive for the very top of the T14 including Yale and Stanford — though even then, both admit only about 4-6% of applicants, so no number guarantees a seat.',
    schools: ['Yale', 'Stanford', 'Harvard', 'UChicago', 'Columbia', 'WashU'],
    advice:
      'At this level your LSAT is no longer the differentiator, because every other serious T14 applicant has a comparable score. Schools will scrutinize your GPA, personal statement, recommendations, and work experience to separate you from the rest of the 175+ pool. Do not spend months chasing a 178 over a 176 — the marginal gain is tiny. Instead, invest that time in a distinctive personal statement, strong recommendations, and (if you are a KJD) a year or two of meaningful work experience, which is especially valued at Northwestern, Penn, and UChicago.',
  },
  {
    range: '170-174',
    title: 'Competitive across the T14',
    summary:
      'A 170-174 sits at or above the median at most T14 schools. It clears the median at Michigan (171), Duke (171), Georgetown (171), Berkeley (170), and UCLA (171), and is within a point or two of the median at NYU (172), Columbia (173), Penn (173), Northwestern (173), Cornell (173), and UVA (173). This is the sweet spot for T14 admission: you are genuinely competitive across the top 14, with Yale and Stanford as reaches and the rest as realistic targets or near-targets when paired with a strong GPA. A 170 is roughly the 97th percentile of all LSAT takers — an excellent score that should open real doors.',
    schools: ['Columbia', 'NYU', 'Penn', 'UVA', 'Duke', 'Michigan', 'Berkeley'],
    advice:
      'This is the range where a balanced T14 list makes sense. Pair a 170-174 with a GPA near 3.85+ and you can apply broadly across the top 14 with realistic expectations. If your GPA is below 3.6, consider retaking to reach 174+ to offset it, because the difference between a 170 and a 174 can move several schools from reach into target territory. If you are set on Yale or Stanford, a retake to 175+ is the single highest-leverage move you can make.',
  },
  {
    range: '165-169',
    title: 'Competitive at Top 20-50, reach for most of the T14',
    summary:
      'A 165-169 is above the median at roughly 80% of ABA-accredited law schools, but below the median at every T14 school. You are competitive at UCLA (171 median), WashU (175), Vanderbilt (170), Texas (172), USC (168), BU (170), Notre Dame (170), and Minnesota (171), but most T14 schools will be reaches unless your GPA is exceptional. This band is interesting because it sits right at the boundary: a 168 with a 3.9+ GPA can still be viable at Georgetown, Cornell, and Berkeley, while a 165 with a 3.4 GPA pushes you firmly toward the Top 20-40.',
    schools: ['UCLA', 'Vanderbilt', 'Texas', 'USC', 'BU', 'Notre Dame', 'Minnesota'],
    advice:
      'This band rewards a strategic school list. Apply to a mix of Top 15-30 targets (where your score is at or near the median) and a few T14 reaches. A 3.8+ GPA can pull several T14 schools into range; a sub-3.5 GPA pushes you toward the Top 20-40, where a 165-169 is a genuine asset. If you are set on the T14, a retake is worth it — moving from 166 to 170 is one of the most valuable jumps on the entire scale.',
  },
  {
    range: '160-164',
    title: 'Solid at Top 30-60 schools',
    summary:
      'A 160-164 is competitive at a broad set of respected regional schools and several Top 30 programs. Your score is at or near the median at schools ranked 30-60, such as Fordham (166), Emory (165), Alabama (165), Georgia (166), and Iowa (164), but below the median at most Top 30 schools. T14 schools are out of reach barring extraordinary circumstances. A 160 is roughly the 80th percentile of all takers — a solid score, but not one that opens the top of the rankings.',
    schools: ['Fordham', 'Emory', 'Alabama', 'Georgia', 'Iowa', 'Wake Forest', 'Ohio State'],
    advice:
      'Focus on schools ranked 30-60 where your score is at or above the median. Pair a 162-164 with a 3.7+ GPA and you have strong options in this band. If you are set on a higher-ranked school, a retake is the highest-leverage move you can make — moving from 162 to 167 changes your school tier entirely. Also weigh employment outcomes carefully at this band, because school choice matters more for job placement than it does higher up the rankings.',
  },
  {
    range: '150-159',
    title: 'Competitive at regional and lower-ranked schools',
    summary:
      'A 150-159 admits you to many regional and lower-ranked law schools, but options narrow sharply at the Top 50. The median LSAT at the average ABA school is around 158, so a 155-159 makes you a median applicant nationally, but below median at most schools ranked in the top half. Scholarship leverage is limited, and outcomes depend heavily on school choice, bar passage rate, and employment statistics. A 150 is around the 44th percentile of takers; a 159 is around the 70th.',
    schools: ['Regional schools', 'Schools ranked 60-100', 'Lower-ranked ABA programs'],
    advice:
      'Be deliberate about employment outcomes and bar passage rates when choosing at this band — a school ranked 90 with a 95% bar passage rate can be a better investment than a school ranked 70 with a 65% rate. A retake that pushes you past 160 opens a meaningfully better set of schools and scholarships, so unless you face an imminent deadline, seriously consider one. Many applicants can raise their score by 8-12 points with structured study.',
  },
  {
    range: '120-149',
    title: 'Below most schools, retake strongly recommended',
    summary:
      'Below 150, admission is limited to the least selective ABA schools and some conditional-admission or pre-law programs. The national median is roughly 158, so a score in this range is well below average, and many schools will question whether you are ready for the academic rigors of law school. That said, every year a handful of ABA schools admit applicants in the 140s, usually paired with strong work experience or an upward academic trend. A 149 is around the 42nd percentile; a 140 is around the 20th.',
    schools: ['Least selective ABA schools', 'Conditional admission programs'],
    advice:
      'Unless you face an imminent deadline, retake. Most applicants can raise their score substantially with structured study — a jump from 145 to 158 is realistic for many people and completely changes your options. The return on investment here is enormous: every few points unlock entirely new school tiers. If you cannot retake, target the least selective ABA schools with strong bar passage and employment outcomes, and lean heavily on work experience and a compelling personal statement.',
  },
];

// GPA score bands.
export const GPA_BANDS: ScoreBand[] = [
  {
    range: '3.90-4.00',
    title: 'Competitive everywhere',
    summary:
      'A 3.9+ GPA clears the median at every law school in the country, including UVA (3.99), Chicago (3.97), Yale (3.96), Stanford (3.96), Harvard (3.96), WashU (3.96), and UCLA (3.95). Combined with a 170+ LSAT, you are a strong candidate across the entire T14. The GPA alone, however, is not enough: Yale and Stanford admit only 4-6% of applicants, and even a 4.0 with a 175 LSAT is no guarantee there. What a 3.9+ does is remove GPA as a worry, letting you focus entirely on the LSAT and the qualitative parts of the application.',
    schools: ['Yale', 'Stanford', 'Harvard', 'UChicago', 'UVA', 'Columbia'],
    advice:
      'Your GPA is a genuine asset — protect it and leverage it. Pair it with a strong LSAT (170+) and you can aim for the very top of the rankings and negotiate scholarships from schools trying to protect their GPA medians. Do not assume the GPA alone carries you into the T14: at the very top, essays, recommendations, and work experience are what separate the admits from the waitlists.',
  },
  {
    range: '3.70-3.89',
    title: 'Competitive across the T14',
    summary:
      'A 3.7-3.89 GPA is at or above the median at most T14 schools and highly competitive at Top 15-30. It clears the median at Michigan (3.88) and sits just below the median at Duke (3.91), Berkeley (3.92), Cornell (3.92), and Georgetown (3.93), while sitting slightly below the very top schools (Yale 3.96, Harvard 3.96, Chicago 3.97). Paired with a 168+ LSAT, this is a solid T14 GPA, and paired with a 172+ it makes you competitive nearly everywhere.',
    schools: ['UVA', 'Duke', 'Michigan', 'Berkeley', 'Cornell', 'Georgetown', 'Northwestern'],
    advice:
      'This is a strong GPA that opens most of the T14 when matched with a solid LSAT. Focus on assembling a cohesive application narrative rather than chasing GPA perfection — at 3.8, another 0.05 of GPA matters far less than 2-3 LSAT points or a stronger personal statement. If your LSAT is below 168, a retake is your highest-leverage move.',
  },
  {
    range: '3.50-3.69',
    title: 'Competitive at Top 20-50',
    summary:
      'A 3.5-3.69 GPA is below the median at every T14 school but below the median at most Top 20-50 schools like Texas (3.89), USC (3.85), BU (3.88), Notre Dame (3.89), Minnesota (3.88), and BC (3.83), so you will lean on your LSAT to carry the application. A high LSAT (168+) can still keep several T14 schools within reach as a classic splitter, especially at schools that protect their LSAT median over their GPA median.',
    schools: ['Texas', 'USC', 'BU', 'Notre Dame', 'Minnesota', 'Florida', 'Alabama'],
    advice:
      'If you want the T14 with this GPA, your LSAT must carry the application. Aim for 170+ and lean into work experience or a compelling narrative to offset the GPA. Write a GPA addendum only if you have a genuine explanation (illness, family emergency, a demanding major). For the Top 20-50, this GPA is workable with a 162-168 LSAT, so target schools where your LSAT is above their median.',
  },
  {
    range: '3.30-3.49',
    title: 'Competitive at Top 30-60',
    summary:
      'A 3.3-3.49 GPA is below the median at most Top 30 schools but competitive across the Top 30-60 with a matching LSAT. You are below the median at Fordham (3.68), Emory (3.75), Alabama (3.83), and Georgia (3.75), so a 165+ LSAT is essentially required to stay competitive in this band. This is classic splitter territory: your application will be judged primarily on the LSAT, and a 168-172 can make even several Top 25 schools realistic.',
    schools: ['Fordham', 'Emory', 'Alabama', 'Georgia', 'Boston College', 'UNC', 'Iowa'],
    advice:
      'Pair this GPA with a 165+ LSAT and target schools ranked 30-60, where a high LSAT is a scarce and valuable asset. A 170+ LSAT can still make several Top 20 schools realistic as a splitter. Consider an addendum if you have a genuine upward GPA trend (strong last two years), and demonstrate current academic capacity through graduate coursework or a demanding job.',
  },
  {
    range: '3.00-3.29',
    title: 'Below most Top 50 medians',
    summary:
      'A 3.0-3.29 GPA is below the median at nearly every Top 50 school, and below the 25th percentile at most T14 schools. Admission requires a strong LSAT (165+) and ideally meaningful work experience or an upward academic trend. This GPA is a real obstacle at selective schools, but it is not disqualifying everywhere: many schools ranked 50-100 regularly admit applicants in this range when the LSAT is strong. The key is being realistic about which schools will look past the GPA.',
    schools: ['Regional schools', 'Schools ranked 50-100', 'Selected Top 50 with high LSAT'],
    advice:
      'You will need a high LSAT to offset this GPA. Consider an addendum explaining any extenuating circumstances, and demonstrate academic capacity through graduate work or a strong recent record. Target schools where your LSAT is at or above the 75th percentile — a 168+ LSAT can make Top 50 schools realistic. Be honest with yourself about the T14: with a sub-3.3 GPA, even a 175 LSAT leaves most T14 schools as reaches.',
  },
  {
    range: 'Below 3.00',
    title: 'Significant hurdle, but not impossible',
    summary:
      'Below 3.0 is a serious obstacle at nearly all ABA schools. Very few schools admit sub-3.0 applicants, and those that do usually require a top LSAT and a compelling story. The reason is simple: the GPA is a signal of academic capability, and law schools worry that a sub-3.0 applicant may struggle with the first-year curriculum. That said, a handful of ABA schools do admit sub-3.0 applicants every year, almost always with a 170+ LSAT, significant work experience, or an exceptional addendum explaining the GPA.',
    schools: ['Least selective ABA schools', 'Conditional programs', 'Schools valuing work experience'],
    advice:
      'This GPA requires a 170+ LSAT and a powerful addendum plus demonstrated recent academic success. Some schools weigh the last two years of college or a graduate degree more favorably, so highlight an upward trend or a strong master\u2019s GPA. Consider gaining 2-3 years of professional experience before applying — schools like Northwestern openly value it, and it gives the committee a more recent data point than your college transcript.',
  },
];

// Splitter strategy: high LSAT / low GPA and the reverse, plus the edge cases.
export interface SplitterProfile {
  id: string;
  title: string;
  pattern: string;
  why: string;
  strategy: string[];
}

export const SPLITTER_PROFILES: SplitterProfile[] = [
  {
    id: 'high-lsat-low-gpa',
    title: 'High LSAT, Low GPA (the classic splitter)',
    pattern: 'Example: 172 LSAT with a 3.2 GPA',
    why: 'Admissions officers treat the LSAT as the stronger predictor of first-year performance, and it feeds the U.S. News rankings more directly than GPA. As a result, many schools are willing to dip below their GPA median to protect their LSAT median. This makes the high-LSAT/low-GPA splitter the more favorable splitter profile: your one strong number is the one schools care about most. A 172 LSAT is above the 75th percentile at many Top 20-40 schools, which makes you a scarce asset they want to lock in.',
    strategy: [
      'Target schools where your LSAT is at or above the 75th percentile, even if your GPA is below the 25th. These schools will reach for your LSAT.',
      'Write a GPA addendum only if you have a genuine explanation (illness, family emergency, a hard major). Do not make excuses — committees have seen every reason.',
      'Show academic capacity now: a strong graduate GPA, recent rigorous coursework, or a demanding job signals you can handle law school.',
      'Lean on splitter-friendly schools: WashU, Northwestern, UVA, and Georgetown historically weigh the LSAT heavily and admit many splitters.',
      'Apply broadly across the Top 20-40, where a 172 LSAT is rare and valuable, and add a few T14 reaches.',
      'Time your application early — rolling admissions mean a strong splitter submitted in October faces less competition than one submitted in February.',
    ],
  },
  {
    id: 'low-lsat-high-gpa',
    title: 'Low LSAT, High GPA (the reverse splitter)',
    pattern: 'Example: 3.90 GPA with a 158 LSAT',
    why: 'A high GPA proves academic discipline, but the LSAT is weighted more heavily in admissions and in rankings, so a low LSAT hurts more than a low GPA helps. Reverse splitters face an uphill climb at schools with strict LSAT medians, because admitting you drags down the number schools are most protective of. The good news is that a 3.9 GPA is a genuinely strong signal, and several schools (UVA, Berkeley, Michigan, Georgetown) are known to admit reverse splitters with strong essays and experience.',
    strategy: [
      'Retake the LSAT if at all possible: a jump from 158 to 165 opens a completely different set of schools, and it is the single highest-leverage move you can make.',
      'If you cannot retake, target schools where your GPA is above the 75th percentile and your LSAT is only slightly below median.',
      'Lean on holistic, GPA-friendly schools including UVA, Berkeley, Michigan, and Georgetown, which value essays and experience more than some peers.',
      'Emphasize writing quality and experience; reverse splitters must win on the qualitative parts of the application.',
      'Be realistic about the T14: with a sub-160 LSAT, even a 4.0 GPA leaves most T14 schools as reaches.',
    ],
  },
  {
    id: 'super-splitter',
    title: 'Super Splitter (extreme gap)',
    pattern: 'Example: 176 LSAT with a 2.9 GPA',
    why: 'When the gap is extreme — a 175+ LSAT against a sub-3.0 GPA — schools face a direct tradeoff between protecting their LSAT median and worrying about your academic readiness. A 176 LSAT is in the top 1% of all takers and is genuinely rare, so schools that protect their LSAT median (WashU, Northwestern, UVA) will often take the risk. But the sub-3.0 GPA is a red flag that a committee must actively justify, so your application needs a compelling, non-excuse narrative explaining it.',
    strategy: [
      'Lead with the LSAT: it is your entire case, so make sure every school sees it immediately and it is genuinely elite (174+).',
      'Write a strong GPA addendum that takes ownership, explains the specific circumstances, and points to recent evidence of academic success.',
      'Show proof of current capability: a high graduate GPA, a rigorous job, or recent college coursework all counter the old GPA.',
      'Target WashU and Northwestern aggressively — both are famously splitter-friendly and willing to dip far below GPA medians for a top LSAT.',
      'Apply very broadly and very early. Your profile is polarizing: some committees will say yes and others no, so volume and timing matter.',
    ],
  },
  {
    id: 'edge-splitter',
    title: 'Mild Splitter (both numbers a bit off)',
    pattern: 'Example: 166 LSAT with a 3.5 GPA',
    why: 'Most applicants are not extreme splitters — they have two numbers that are each slightly below the medians of the schools they want. This is the most common profile in law school admissions, and it is also the most sensitive to strategy, because neither number is strong enough to carry the other. Your fate is usually decided by the qualitative parts of the application: essays, recommendations, work experience, and timing.',
    strategy: [
      'Build your list around schools where you sit near (not far below) both medians — a 166 LSAT and 3.5 GPA are workable at schools ranked 25-60.',
      'Do not overreach: treat every school where you are below both medians as a reach, and balance them with true targets and safeties.',
      'Apply early. For borderline applicants, submitting by November is one of the few things you can control that measurably improves your odds.',
      'Invest heavily in the personal statement and a strong recommendation — at the margin, these are what tip a borderline application.',
      'Consider a retake only if you have a realistic path to 170+; otherwise, spend the time on application quality instead.',
    ],
  },
];
