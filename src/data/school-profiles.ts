// T14 school profiles: detailed per-school admissions insight.
// Written to exceed the depth of competing school-specific pages.
// Medians and acceptance rates reflect the 2025 entering class (2024-2025 cycle).

export interface SchoolProfile {
  slug: string;
  name: string;
  vibe: string;
  knownFor: string[];
  admissionsNote: string;
  strategy: string;
}

export const T14_PROFILES: SchoolProfile[] = [
  {
    slug: 'yale-law-school',
    name: 'Yale Law School',
    vibe: 'Small, academically elite, and faculty-centric.',
    knownFor: [
      'Smallest class in the T14 (roughly 200 students)',
      'Produces more law professors and Supreme Court clerks than any other school',
      'No traditional letter grades; a famously low-pressure pass/fail culture',
      'Median LSAT of 174 and GPA of 3.96, with a ~4% acceptance rate',
      'Unmatched placement into academia, public-interest leadership, and appellate practice',
    ],
    admissionsNote:
      'Yale is the most selective law school in the country, admitting roughly 4% of applicants — a rate that has fallen from about 6% a few years ago as competition has intensified. Even with a 175 LSAT and a 3.9+ GPA, acceptance is far from guaranteed, because the class is tiny and Yale weighs essays, recommendations, and intellectual distinctiveness unusually heavily. Yale explicitly looks for an "original mind": it rewards applicants who have done serious academic work, published scholarship, or demonstrated deep intellectual curiosity, rather than those with a polished but generic profile. Faculty members review applications directly, which is rare in law admissions and means a professor\u2019s enthusiasm for your file can matter enormously.',
    strategy:
      'Do not treat Yale as a target even with perfect stats — treat it as a reach and apply early. Invest heavily in a personal statement that shows an original mind rather than a list of achievements, and choose recommenders who can speak to your intellectual depth specifically. If you have published, researched, or taught, lead with it. Because Yale is the most idiosyncratic T14 school, an application tuned for Harvard or Columbia may not land here.',
  },
  {
    slug: 'stanford-law-school',
    name: 'Stanford Law School',
    vibe: 'Interdisciplinary, tech-adjacent, and innovation-focused.',
    knownFor: [
      'The strongest ties to Silicon Valley and technology law of any T14 school',
      'Joint degrees with business, engineering, and public policy',
      'Small, collaborative class with a famously non-cutthroat reputation',
      'Median LSAT of 173 and GPA of 3.96, with a ~6% acceptance rate',
      'Dominant placement into startups, venture capital, IP, and public-interest tech',
    ],
    admissionsNote:
      'Stanford rejects many 175+ applicants every year, because it is looking for a specific kind of candidate: someone who crosses disciplines and thinks entrepreneurially. It admits about 6% of applicants, second only to Yale in selectivity. Stanford values applicants with tech, startup, engineering, or interdisciplinary backgrounds, and it reads essays closely for evidence of a forward-looking, specific reason to want a law degree. A generic "I want to be a lawyer" statement will not land here; a concrete vision — building a legal-tech company, working on AI policy, launching a public-interest practice — will.',
    strategy:
      'Highlight any tech, startup, or interdisciplinary background prominently. Stanford rewards applicants who can articulate a specific, forward-looking reason for wanting a law degree, so spend real time on the "why law, why Stanford, why now" questions. If your background is traditional (humanities, government), do not fake a tech angle — instead emphasize intellectual originality and a distinctive vision. Apply early and treat it as a reach for almost everyone.',
  },
  {
    slug: 'university-of-chicago-law-school',
    name: 'University of Chicago Law School',
    vibe: 'Intellectual, rigorous, and theory-driven.',
    knownFor: [
      'The birthplace of law and economics',
      'Legendary doctrinal and theoretical training',
      'Top placement into federal clerkships and legal academia',
      'Median LSAT of 174 and GPA of 3.97, with a ~10% acceptance rate',
      'A small, intense, and famously "ideas-first" culture',
    ],
    admissionsNote:
      'Chicago prizes raw intellectual firepower above almost everything else. It is comfortable admitting applicants with a high LSAT and a slightly softer GPA, or vice versa, if the overall profile signals academic strength — which makes it friendlier to splitters than its peer schools. Its LSAT median (174) and GPA median (3.97) are both near the top of the T14, and its acceptance rate has dropped to about 10% in the latest cycle. Chicago responds to applicants who demonstrate genuine intellectual engagement: a serious thesis, published research, or a rigorous major in philosophy, math, or economics.',
    strategy:
      'Emphasize intellectual depth — a thesis, serious research, or a rigorous major — over leadership credentials. Chicago responds to applicants who love ideas, not applicants who want a credential. If you are a splitter (high LSAT, softer GPA), Chicago is one of your best T14 shots, so make sure your file leads with academic intensity. A "Why Chicago" note that shows you understand the law-and-economics tradition can genuinely help here.',
  },
  {
    slug: 'harvard-law-school',
    name: 'Harvard Law School',
    vibe: 'Large, prestigious, and broadly connected.',
    knownFor: [
      'Largest class in the T14 (roughly 560 students)',
      'An unmatched alumni network spanning government, big law, and academia',
      'Median LSAT of 174 and GPA of 3.96, with a ~9% acceptance rate',
      'Unrivaled course breadth (hundreds of courses and dozens of clinics)',
      'Strongest brand recognition of any law school in the world',
    ],
    admissionsNote:
      'Harvard has the scale to admit a broader range of profiles than Yale or Stanford, but its medians sit near the very top, and its acceptance rate has held around 9%. Numbers below a 170 LSAT or a 3.8 GPA make Harvard a long shot for almost everyone. Because the class is large, Harvard can afford to take chances on unusual backgrounds — a Rhodes Scholar, a military officer, a successful entrepreneur — and it reads applications holistically, but the underlying numbers still need to be elite. Harvard also admits a meaningful share of applicants straight from undergrad, unlike some peers that prefer work experience.',
    strategy:
      'With a 170+ LSAT and a 3.9+ GPA, Harvard is a realistic target. Differentiate through leadership, unusual experience, or a clear career vision, since Harvard sees thousands of high-stat applicants every cycle. Do not pad your resume — Harvard rewards a few deep commitments over a long list of shallow ones. Apply early; Harvard has a single December deadline and does not offer binding early decision.',
  },
  {
    slug: 'columbia-law-school',
    name: 'Columbia Law School',
    vibe: 'Big-law powerhouse in the heart of New York.',
    knownFor: [
      'Elite placement into New York big law and corporate practice',
      'Strengths in corporate, securities, and international law',
      'Median LSAT of 173 and GPA of 3.92, with a ~12% acceptance rate',
      'Deep integration with the New York legal and financial markets',
      'A large, numbers-driven applicant pool',
    ],
    admissionsNote:
      'Columbia is numbers-driven and heavily oriented toward corporate law. A 170+ LSAT with a 3.85+ GPA makes you competitive; below that, the odds drop quickly, because Columbia receives an enormous volume of high-stat applicants and can afford to be selective. Its acceptance rate has fallen to about 12%, and it fills much of its class through rolling review, which means applying early matters. Columbia values a clear corporate or public-interest direction and rewards applicants with business, finance, or economics backgrounds, though it is less holistic than Harvard or Michigan.',
    strategy:
      'If your goal is New York big law, Columbia is a top choice — emphasize any business or finance background and a concrete career direction. Apply early, since Columbia fills much of its class through rolling review and the early pool is less crowded. If you are a splitter, note that Columbia is more GPA-protective than some peers, so a soft GPA needs a 173+ LSAT to compensate.',
  },
  {
    slug: 'nyu-school-of-law',
    name: 'NYU School of Law',
    vibe: 'Public-interest and global law hub in Greenwich Village.',
    knownFor: [
      'The top public-interest and clinical programs in the country',
      'Strengths in international and tax law',
      'Median LSAT of 172 and GPA of 3.92, with a ~13% acceptance rate',
      'A large, diverse, and famously progressive class',
      'Strong global network through NYU\u2019s many international programs',
    ],
    admissionsNote:
      'NYU admits a slightly wider range than Columbia but still holds a 172 LSAT median and a 3.92 GPA median. Its acceptance rate is about 13%, higher than most of the top T14, which makes it one of the more accessible elite schools for strong-but-not-perfect applicants. NYU rewards commitment to public interest, global work, and clear values as much as raw numbers, and it reads essays carefully for authenticity. It is also one of the best T14 choices for applicants targeting public-interest careers rather than big law.',
    strategy:
      'If you have a public-interest or international background, NYU should be high on your list — emphasize commitment over prestige. With a 170+ LSAT and 3.8+ GPA, NYU is a target rather than a reach. Do not pad your file with corporate-flavored material if you are applying as a public-interest candidate; NYU wants coherence between your stated values and your record.',
  },
  {
    slug: 'university-of-pennsylvania-carey-law',
    name: 'University of Pennsylvania Carey Law School',
    vibe: 'Business-minded, interdisciplinary, and Ivy League.',
    knownFor: [
      'Tight integration with the Wharton School',
      'Corporate and cross-disciplinary joint degrees (including the JD/MBA)',
      'Median LSAT of 173 and GPA of 3.95, with a ~8% acceptance rate',
      'Strong big-law placement, especially on the East Coast',
      'One of the most selective schools in the T14 in the latest cycle',
    ],
    admissionsNote:
      'Penn favors applicants with a business, finance, or quantitative tilt, and its acceptance rate has fallen to about 8% — one of the most selective in the T14. A 170+ LSAT and 3.9+ GPA put you in range, but Penn also values real-world experience and a clear business-oriented direction. The Wharton integration is real: many Penn Law students pursue joint degrees, and the admissions office looks favorably on applicants who plan to use the business school. Penn is somewhat more holistic than Columbia but still numbers-sensitive.',
    strategy:
      'Lean into any business or economics background and consider Penn for joint degrees. Work experience helps more at Penn than at some peers, so do not hide it. If you are targeting corporate law or a JD/MBA, Penn should be near the top of your list. Note the ~8% acceptance rate and apply early — this is a genuine reach for most applicants despite the rank.',
  },
  {
    slug: 'university-of-virginia-school-of-law',
    name: 'University of Virginia School of Law',
    vibe: 'Collegial, historic, and friendly for a top school.',
    knownFor: [
      'Exceptionally high student satisfaction and a famously social culture',
      'Strong clerkship and big-law placement',
      'Median LSAT of 173 and GPA of 3.99 — the highest GPA median in the T14',
      'A public school with a private-school feel and generous aid',
      'Deep ties to the federal government and military law',
    ],
    admissionsNote:
      'UVA has one of the highest GPA medians in the T14 (3.99) — effectively a 4.0 floor for many admits — which makes it tougher for low-GPA splitters than its LSAT median suggests. Its acceptance rate is about 10%. UVA loves demonstrated interest and fit, and it reads the "Why UVA" statement carefully; applicants who show genuine enthusiasm for Charlottesville and the school\u2019s culture have a real edge. It is also more holistic than many peers of similar rank, rewarding personality and fit alongside numbers.',
    strategy:
      'If you have a strong GPA, UVA is a natural target. Write a genuine "Why UVA" statement — it is one of the few schools where this visibly matters. Do not assume a high LSAT alone will carry a weak GPA here, because UVA protects its GPA median aggressively. If you are a high-LSAT splitter, UVA is still worth a shot but is less favorable than WashU or Northwestern.',
  },
  {
    slug: 'duke-university-school-of-law',
    name: 'Duke University School of Law',
    vibe: 'Southern, collegial, and increasingly tech-forward.',
    knownFor: [
      'Growing strength in technology, IP, and entrepreneurship law',
      'Strong clerkship and big-law placement',
      'Median LSAT of 171 and GPA of 3.91, with a ~13% acceptance rate',
      'A collaborative, famously non-cutthroat culture',
      'Early decision that provides a measurable admissions boost',
    ],
    admissionsNote:
      'Duke balances strong numbers (171 LSAT median, 3.91 GPA median) with a genuine emphasis on fit and personality. It is more holistic than some peers of similar rank, and it reads applications for warmth and collegiality — the school\u2019s culture is a real selling point. Duke\u2019s early decision program is one of the few in the T14 that provides a measurable admissions boost, and a meaningful share of each class comes in through ED. Its acceptance rate is about 13%.',
    strategy:
      'Duke rewards demonstrated interest and a clear story. Apply early decision if Duke is a genuine first choice — ED gives a real, quantifiable boost here. Emphasize collegiality and any tech or IP interest, which is Duke\u2019s fastest-growing strength. With a 170+ LSAT and 3.8+ GPA, Duke is a realistic target.',
  },
  {
    slug: 'northwestern-pritzker-school-of-law',
    name: 'Northwestern Pritzker School of Law',
    vibe: 'Work-experience friendly and professionally oriented.',
    knownFor: [
      'The most work-experience-friendly school in the T14',
      'Strong business and litigation placement in Chicago and New York',
      'Median LSAT of 173 and GPA of 3.96, with a ~12% acceptance rate',
      'Interviews nearly all admitted students — a rare T14 practice',
      'Historically splitter-friendly, rewarding a high LSAT',
    ],
    admissionsNote:
      'Northwestern openly favors applicants with post-college work experience and conducts interviews for nearly all admitted students. Most of its class arrives with 1-2+ years of work, and the school treats that experience as a genuine differentiator, not a tiebreaker. Its medians are high (173 LSAT, 3.96 GPA) and its acceptance rate is about 12%, but the interview component means personality and maturity can move the needle more than at most T14 schools. Northwestern is also historically splitter-friendly, making it a strong reach for high-LSAT, low-GPA applicants.',
    strategy:
      'If you have work experience, emphasize it heavily and prepare for the interview — it is a core part of Northwestern\u2019s process. High-LSAT splitters should treat Northwestern as a top reach, because the school has a track record of protecting its LSAT median over its GPA median. Do not apply straight from undergrad expecting an easy ride; the school\u2019s culture tilts toward older, experienced applicants.',
  },
  {
    slug: 'university-of-michigan-law-school',
    name: 'University of Michigan Law School',
    vibe: 'Balanced, warm, and nationally portable.',
    knownFor: [
      'Strong across big law, public interest, and academia',
      'A loyal, far-reaching alumni network',
      'Median LSAT of 171 and GPA of 3.88, with a ~9% acceptance rate',
      'Holistic, personality-driven admissions that value writing',
      'A famously unconventional, sometimes playful application essay',
    ],
    admissionsNote:
      'Michigan famously values essays and personality, admitting applicants with "imperfect" numbers who write compellingly. But its LSAT median (171) and GPA median (3.88) remain high, and its acceptance rate has dropped to about 9% in the latest cycle, making it more selective than its rank suggests. Michigan reads the personal statement and the (often unconventional) Michigan essay closely, and it rewards authenticity, humor, and self-awareness more than almost any other T14 school. It is also a favorite of reverse splitters, thanks to its holistic read.',
    strategy:
      'Invest real effort in the Michigan essay, which is often unconventional and gives you a genuine chance to stand out. Michigan rewards authenticity and a sense of humor more than almost any other T14 school, so do not submit a generic statement. Reverse splitters (high GPA, softer LSAT) should target Michigan aggressively, as its holistic process is more forgiving of a below-median LSAT than many peers.',
  },
  {
    slug: 'uc-berkeley-school-of-law',
    name: 'UC Berkeley School of Law',
    vibe: 'Progressive, intellectual, and public-interest oriented.',
    knownFor: [
      'Top public-interest, IP, and technology law programs',
      'Strong presence in California and the West Coast legal market',
      'Median LSAT of 170 and GPA of 3.92, with a ~15% acceptance rate',
      'Highly values diversity of background and thought',
      'A deeply mission-driven, social-justice-oriented culture',
    ],
    admissionsNote:
      'Berkeley is holistic and progressive, but its LSAT median (170) and GPA median (3.92) remain high. Its acceptance rate is about 15%, the highest in the T14 alongside Georgetown and Cornell, which makes it one of the more accessible elite schools. Berkeley admits many applicants with distinctive backgrounds and clear public-interest commitments, and it reads essays for evidence of a mission rather than just a credential. It is also the strongest T14 choice for applicants targeting California, where its alumni network is unmatched.',
    strategy:
      'Emphasize commitment to public interest, social justice, or technology — Berkeley rewards applicants with a mission. If you are targeting California, it should be high on your list, and its 170 LSAT median makes it more reachable than many peers. Do not submit a corporate-flavored application if you are applying as a public-interest candidate; coherence between values and record matters here.',
  },
  {
    slug: 'cornell-law-school',
    name: 'Cornell Law School',
    vibe: 'Small, rigorous, and Ivy League.',
    knownFor: [
      'A small class with close faculty access',
      'Strong big-law placement for its size',
      'Median LSAT of 173 and GPA of 3.92, with a ~18% acceptance rate',
      'A numbers-driven process relative to its peers',
      'Binding early decision that provides a meaningful boost',
    ],
    admissionsNote:
      'Cornell has a high LSAT median (173) relative to its rank and is more numbers-driven than some peers, but its acceptance rate is about 18% — the highest in the T14 — which makes it the most accessible Ivy League law school. Cornell protects its LSAT median aggressively, so high-LSAT applicants (even with softer GPAs) are well positioned, while reverse splitters may find it tougher. Its binding early decision program is one of the most favorable in the T14 and a reliable path for strong applicants who are sure Cornell is their first choice.',
    strategy:
      'Treat Cornell as a target with a 170+ LSAT and 3.85+ GPA, and as a reach below that. High-LSAT splitters should consider Cornell seriously, because its numbers-driven process rewards a strong LSAT. If Cornell is a genuine first choice, apply binding early decision — it provides a meaningful, reliable boost. Emphasize any interest in a smaller, close-knit academic community.',
  },
  {
    slug: 'georgetown-university-law-center',
    name: 'Georgetown University Law Center',
    vibe: 'Washington, D.C. powerhouse for government and policy.',
    knownFor: [
      'The largest law school in the country',
      'Unmatched access to government, policy, and international law',
      'Median LSAT of 171 and GPA of 3.93, with a ~16% acceptance rate',
      'Offers part-time and evening programs for working professionals',
      'The most accessible T14 school for strong-but-not-elite numbers',
    ],
    admissionsNote:
      'Georgetown has one of the higher acceptance rates in the T14 (about 16%) and the largest class, making it the most accessible T14 for strong-but-not-elite numbers. Its D.C. location drives its identity: government, policy, and international law are its calling cards, and its alumni dominate the D.C. legal market. Georgetown reads applications holistically and is more forgiving of a below-median number than the very top schools, but its medians (171 LSAT, 3.93 GPA) still demand strong stats. It is also a top choice for part-time applicants, a rare T14 option.',
    strategy:
      'For many applicants, Georgetown is the most realistic T14 — treat it as a target with a 168+ LSAT and 3.8+ GPA. Emphasize government, policy, or international ambitions, which is what Georgetown is built around. If you need a part-time program while working, Georgetown\u2019s evening option is the strongest in the T14 and worth prioritizing. Apply early; its rolling process rewards timely applications.',
  },
];
