// FAQ content — written to exceed the depth of competing pages.
// Answers reference 2025 entering class (2024-2025 cycle) ABA 509 data.

export interface Faq {
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  {
    q: 'How accurate is this law school acceptance calculator?',
    a: 'No calculator can guarantee an admission result, because schools weigh essays, recommendations, work experience, and other soft factors that numbers cannot capture. This tool estimates chances from official ABA 509 data — the same LSAT and GPA percentiles every ABA-accredited school must report for its 2025 entering class. It is directionally accurate for comparing schools and building a balanced list, but treat each percentage as a rough estimate, not a promise. The model is transparent by design: it measures how far your LSAT (weighted 60%) and GPA (weighted 40%) sit from each school\u2019s enrolled-student median and maps that distance to a probability, so you can see exactly why a school is a reach or a safety.',
  },
  {
    q: 'Is a 165 LSAT score good for law school?',
    a: 'Yes. A 165 places you above the median at roughly 80% of ABA-accredited law schools and puts you around the 93rd percentile of all test takers. It is competitive for many Top 50 schools like Minnesota, Notre Dame, and BU, but for T14 schools — where medians run 170-175 — a 165 is below median, so those schools become reaches unless your GPA is exceptional (3.9+). The practical answer depends on your goals: a 165 is an excellent score for a strong regional school or a Top 30-40 target, but if you are set on the T14, it is worth a retake, since moving from 165 to 170 opens a completely different tier.',
  },
  {
    q: 'What LSAT score do I need for Harvard Law?',
    a: 'Harvard Law has a median LSAT of 174 and median GPA of 3.96 for its most recent entering class, with an acceptance rate of about 9%. To be genuinely competitive you should aim for at least a 173-175 on the LSAT with a GPA near 3.9. Scores below 170 make Harvard a reach for almost everyone, because roughly 25% of the enrolled class scored at or below 171, but the vast majority of admits are in the 172-176 range. Remember that Harvard receives thousands of applicants with 170+ scores, so your essays, recommendations, and experience are what separate admits from waitlists once your numbers are in range.',
  },
  {
    q: 'What is the lowest GPA accepted to law school?',
    a: 'A few ABA-accredited schools admit students with GPAs below 3.0 every year, but almost always paired with a top LSAT (168+), meaningful work experience, or an exceptional addendum explaining the low GPA. Most schools with a median GPA under 3.2 are less selective, but at T14 and most Top 50 schools, a GPA below 3.5 is a significant disadvantage unless paired with a very high LSAT — the classic splitter profile. The honest answer is that a sub-3.0 GPA closes the door at nearly every selective school, but it does not close the door on law school entirely: schools ranked 60-120 regularly admit applicants in the 2.8-3.2 range when the LSAT is strong.',
  },
  {
    q: 'Can I get into law school with a 3.0 GPA?',
    a: 'It is possible, but hard at selective schools. A 3.0 GPA means you would need a top LSAT score (roughly 168-170+) to offset it at schools ranked in the Top 50, and even then T14 schools will likely be reaches. Your best path is to target schools ranked 50-120 where a 168+ LSAT is above their 75th percentile — those schools will reach for your LSAT even with a soft GPA. Strong work experience, a graduate degree, or a compelling addendum can all help, but the numbers remain the biggest factor. If you can raise your LSAT into the 170s, you become a genuine splitter candidate at several Top 30 schools.',
  },
  {
    q: 'What is a splitter in law school admissions?',
    a: 'A splitter is an applicant whose LSAT and GPA are far apart — for example, a 172 LSAT with a 3.2 GPA, or a 3.9 GPA with a 158 LSAT. Admissions officers generally weight the LSAT more heavily (it feeds the U.S. News rankings more directly and is the stronger predictor of first-year grades), so a high LSAT can partly compensate for a low GPA, but a high GPA cannot fully compensate for a low LSAT. This tool flags splitter profiles and gives tailored guidance. High-LSAT splitters are in the more favorable position and should target splitter-friendly schools like WashU, Northwestern, UVA, and Georgetown; reverse splitters (high GPA, low LSAT) usually need a retake to meaningfully improve their odds.',
  },
  {
    q: 'What is the difference between LSAT and GPA in admissions?',
    a: 'Both matter, but admissions officers consistently describe the LSAT as the single most important predictor of first-year law school performance, and it is generally weighted more heavily than GPA. A common rule of thumb cited by admissions experts is that LSAT carries about 60-70% of the numeric weight and GPA the remaining 30-40%. The LSAT also feeds the U.S. News rankings more directly than GPA, which gives schools a strong incentive to protect their LSAT median. The practical implication: a high LSAT can open doors that a high GPA alone cannot, which is why splitters with strong LSATs generally fare better than splitters with strong GPAs.',
  },
  {
    q: 'What are the T14 law schools?',
    a: 'The T14 is shorthand for the 14 law schools that have historically ranked in the top 14 of the U.S. News law school rankings: Yale, Stanford, Chicago, Harvard, Columbia, NYU, Penn, Virginia, Duke, Northwestern, Michigan, Berkeley, Cornell, and Georgetown. Because they rarely leave the top 14, they carry outsized prestige in legal hiring, and their graduates dominate big law, federal clerkships, and academia. The T14 is not a fixed list — the exact order shifts year to year, and schools like UCLA, WashU, and Vanderbilt now frequently rank alongside or above the bottom of the traditional T14 — but the brand recognition of the original 14 remains unmatched.',
  },
  {
    q: 'What is the hardest law school to get into?',
    a: 'Yale Law School is the most selective, with an acceptance rate around 4% and a median LSAT of 174. Stanford (about 6%) is close behind. Both admit very small classes — roughly 200 and 180 students respectively — so even applicants with perfect numbers face steep odds. In the latest cycle, Penn (about 8%), Michigan (about 9%), and Harvard (about 9%) have also become extremely selective, with several T14 schools now admitting under 10% of applicants. The key point: the very top schools are reaches for essentially everyone, no matter how strong your numbers, because the pool of 170+/3.9+ applicants far exceeds the available seats.',
  },
  {
    q: 'Does applying early decision improve my law school chances?',
    a: 'At some schools, yes — early decision can provide a meaningful boost because it signals strong interest and lets the school lock in a committed applicant. The effect varies by school: Duke, Cornell, and Georgetown are known to give ED a real, measurable edge, while Yale, Stanford, and Harvard do not offer binding ED at all. The catch is that ED is usually binding, meaning you commit to attend if admitted and must withdraw other applications — which also means you may lose scholarship negotiating leverage. Only apply ED to a school you would attend regardless of cost or aid, and understand that the boost is real but modest.',
  },
  {
    q: 'How do I use my chances to build a balanced school list?',
    a: 'Apply to a mix of reach, target, and safety schools. Aim for roughly 2-4 safeties, 4-6 targets, and 2-4 reaches. In this tool, a school where your estimated chance is under 25% is a reach; 25-55% is a target; above 55% is a safety. The most common mistake is building a list of almost all reaches, which produces an empty cycle. Spread your applications across tiers so that an unlucky result at the top does not leave you without options, and apply early — rolling admissions mean the same application fares better in November than in February.',
  },
  {
    q: 'How many law schools should I apply to?',
    a: 'Most applicants apply to 8-12 schools, and recent cycles show applicants averaging around 7-10 applications each. Applying too broadly (15+) can dilute the quality of each application, because schools can tell when an essay is generic; applying too narrowly (under 5) risks an empty cycle, especially when your LSAT and GPA are average. The sweet spot is 8-12 well-chosen schools spread across reach, target, and safety tiers, with each application genuinely tailored. Factor in cost too — at roughly $130 per school in fees and CAS reports, a 12-school list costs well over $1,500 before fee waivers.',
  },
  {
    q: 'Where does this calculator get its data?',
    a: 'Data comes from ABA 509 Required Disclosures for the 2025 entering class, which every ABA-accredited law school must publish annually. We use the 25th, 50th, and 75th percentile LSAT and GPA of enrolled full-time students, plus each school\u2019s reported acceptance rate. These are the exact same numbers schools report to the ABA and that feed the U.S. News rankings, which is why they are the most reliable public admissions data available. Data is updated annually as new reports are released. Note that medians rise slightly most years as competition intensifies, so a score that was at the median last year may sit just below it this year.',
  },
  {
    q: 'Does GPA or LSAT matter more for international students?',
    a: 'For international applicants, the LSAT usually matters more, because LSAC does not convert non-U.S. transcripts to a standard 4.0 scale the same way it does for U.S. transcripts. Many international GPAs are reported as "superior," "above average," or "average" rather than a numeric 4.0 equivalent, which makes the GPA harder for schools to weigh precisely. That leaves the LSAT as the one standardized, directly comparable number schools can rely on — so a strong LSAT is disproportionately valuable for international applicants. Aim for a score at or above your target schools\u2019 medians, and consider that your GPA may be treated more conservatively than a domestic applicant\u2019s.',
  },
  {
    q: 'Can I retake the LSAT to improve my chances?',
    a: 'Yes. Law schools overwhelmingly consider your highest LSAT score, though a few may look at all scores or your average. Because the LSAT is heavily weighted, a meaningful score improvement is one of the highest-leverage things you can do to raise your admission chances — a 3-point gain can move several schools from reach into target territory. Be aware of LSAC limits on retakes (a set number per testing year and across five years), and note that schools see every attempt, so a sharp upward trend is far better than several flat or declining scores. Use the score-impact tool on this page to see exactly how much a retake could help at your target schools.',
  },
  {
    q: 'How much does it cost to apply to law school?',
    a: 'For a typical applicant sending 8 applications, expect roughly $1,700-1,900 total. That breaks down as: a one-time CAS subscription of about $207, CAS reports at $45 per school, application fees of about $75-95 per school, and the LSAT exam at $248 per attempt. Fee waivers can significantly reduce this: LSAC grants need-based fee waivers covering the CAS fee and several reports, and many schools waive application fees on request or through targeted programs. Use the cost calculator on this page to estimate your own total, and apply for LSAC fee waivers early, since they take time to process.',
  },
  {
    q: 'When are law school application deadlines?',
    a: 'Most T14 regular decision deadlines fall in December or February. Yale, Stanford, Harvard, Chicago, and Columbia close around December 1-15, while NYU, UVA, Michigan, Berkeley, Cornell, and Georgetown run to early February. Because most schools use rolling admissions — reviewing applications as they arrive and filling seats progressively — submitting by November gives you a real, measurable advantage over waiting for the final deadline. Confirm exact dates on each school\u2019s website each cycle, since they shift slightly year to year, and remember that early decision deadlines (where offered) typically fall in November.',
  },
  {
    q: 'Should I retake the LSAT if I am a few points below my target?',
    a: 'Usually yes, if you have a realistic path to a higher score. A three-point LSAT gain can move several schools from reach into target territory, which is one of the cheapest ways to improve your odds compared to anything else in the application. The decision hinges on two questions: are you consistently scoring higher on recent practice tests (suggesting your real score will rise), and would the extra points actually change your school list? If you are at 168 aiming for schools with 172 medians, a retake to 171+ is clearly worth it; if you are at 174 already, the marginal gain is small. Use the score-impact tool above to quantify the benefit.',
  },
  {
    q: 'How much do essays and recommendations actually matter?',
    a: 'They matter most at the margins, and most at the very top. With identical numbers, a strong personal statement and glowing recommendations can tip a close decision, while weak materials can sink strong stats. At Yale, Stanford, and Harvard, where nearly every applicant has elite numbers, the essays are often what separate admits from waitlists. At schools lower in the rankings, the numbers dominate and essays are less decisive. A useful way to think about it: the LSAT and GPA decide which schools are realistic, but the essays and recommendations decide whether you actually get in at the schools where your numbers are competitive.',
  },
  {
    q: 'Do I have a better chance as an underrepresented minority (URM)?',
    a: 'Law schools place real value on diversity, and applicants from underrepresented racial and ethnic groups often see a meaningful boost at the same LSAT and GPA — in practice, a URM applicant may be competitive at schools where their numbers sit several points below the median. The effect varies by school and by the specific applicant pool, and it is one of several non-numeric factors (along with work experience, military service, and unusual background) that admissions officers weigh alongside hard numbers. Note that admissions policies around race have been shifting, so the magnitude of any boost is not guaranteed and varies by school and year.',
  },
  {
    q: 'How important is work experience for law school admission?',
    a: 'It helps and is growing in importance, but it rarely outweighs weak numbers on its own. Northwestern is the most openly work-experience-friendly T14 school, and several others — Penn, UChicago, and Georgetown — value a year or two of post-college work. Strong work experience can partly offset a slightly lower GPA and gives you concrete material for essays and interviews, but it cannot compensate for an LSAT far below a school\u2019s median. The trend is clear: the share of law students with at least a year of work experience has risen steadily, and schools increasingly prefer candidates with some real-world seasoning over straight-from-college applicants.',
  },
  {
    q: 'What LSAT score do I need for a scholarship?',
    a: 'Scholarships track the same medians as admission: the more you are above a school\u2019s LSAT and GPA medians, the larger the offer, because schools use scholarships to attract candidates who boost their numbers. An applicant at or above the 75th percentile of both can often secure substantial aid — sometimes full tuition — while someone at the 25th percentile may receive little or none. The math is stark: at a school with a 165 LSAT median, a 170 is a scholarship candidate and a 160 is a stretch admit. If minimizing debt matters to you, target schools where your numbers are above the medians rather than chasing the highest rank.',
  },
  {
    q: 'Are my chances better if I apply early in the cycle?',
    a: 'Yes, at most rolling-admissions schools. Reviewing applications as they arrive means seats and scholarship budgets are fuller later, so submitting by November is generally better than waiting for a February deadline. The effect is larger for borderline applicants — those sitting near a school\u2019s medians — and smaller for clearly strong ones. This is one of the few factors entirely within your control that measurably improves your odds, so treat the October-November window as a real strategic advantage rather than a nice-to-have.',
  },
  {
    q: 'What should I do if I am waitlisted?',
    a: 'A waitlist is not a rejection — treat it as a second chance that requires action. Send a concise letter of continued interest (LOCI) that updates the school on anything new since you applied (a higher LSAT, a promotion, a new award) and reaffirms that you would attend if admitted. Do not send a wall of text or repeat your application. If the school is your clear first choice and you would attend without merit aid, say so — that "full-commitment" signal matters to schools managing yield. Continue to keep your file updated, and note that waitlist movement varies widely by school and year, so keep your other options alive while you wait.',
  },
  {
    q: 'What are "soft" factors in law school admissions?',
    a: 'Soft factors are everything in your application besides the LSAT and GPA: personal statement, letters of recommendation, resume, work experience, military service, diversity of background, and interview performance. They are called "soft" because they are harder to quantify, but at the very top schools — where nearly everyone has elite numbers — softs are often what separate admits from waitlists. The rough rule of thumb is that admissions is about 70-80% numbers and 20-30% softs, but that ratio flips at Yale, Stanford, and Harvard, where the qualitative parts carry disproportionate weight. Do not neglect softs: a compelling narrative can lift a borderline application.',
  },
  {
    q: 'Is it better to apply straight from college or work first?',
    a: 'The trend strongly favors working first. A growing share of law school classes — and a majority at schools like Northwestern — arrive with one to three years of work experience, and admissions officers value the maturity and real-world perspective it brings. Working first also gives you material for essays, a clearer sense of why you want law school, and (if you retake the LSAT) more time to raise your score. The main downside is delaying your career by a year or two, but for most applicants — especially those with average numbers — the admissions and career benefits of working first outweigh the cost.',
  },
  {
    q: 'How important are employment outcomes and bar passage rates?',
    a: 'They are the most important factors most applicants overlook. Law school is a significant investment, and the return depends heavily on whether graduates actually become lawyers. Before choosing a school, check its bar passage rate (first-time and ultimate) and its employment outcomes (the share of graduates in full-time, long-term, bar-passage-required jobs). The ABA publishes this data for every accredited school, and the gaps are enormous: some schools place over 90% of graduates in attorney jobs while others place under 50%. A school ranked 20 spots lower with a 95% bar passage rate can be a far better investment than a higher-ranked school with a 70% rate.',
  },
  {
    q: 'How much does law school cost, and is it worth the debt?',
    a: 'Law school is expensive — annual tuition at T14 schools runs roughly $63,000-$82,000, and total cost of attendance (including living expenses) often exceeds $100,000 per year at private schools, with many graduates carrying $150,000-$200,000 in debt. Whether it is worth it depends on your school and career path: big-law associates earn $200,000+ in their first year, which makes the debt manageable, but public-interest and smaller-firm lawyers earn far less and often rely on loan forgiveness programs. The honest rule: attend the best school you can afford without excessive debt, and match your school choice to your actual career goals rather than prestige alone.',
  },
  {
    q: 'What is the difference between my transcript GPA and my CAS GPA?',
    a: 'Law schools use the CAS GPA calculated by LSAC, not the GPA on your transcript, and the two often differ. LSAC recalculates your GPA using its own rules: it includes every college course you took for credit (even at other institutions, and even repeated or failed courses), weights them by credit hours, and applies its own grading scale. This is why your CAS GPA can be lower than your transcript GPA — LSAC counts courses your home school may have forgiven. Check your CAS GPA early through your LSAC account, because it is the number schools actually see, and it is the number you should enter into this calculator.',
  },
  {
    q: 'Can I transfer to a different law school after 1L?',
    a: 'Yes, and it is a well-established path, though competitive. Law school transfers are based almost entirely on your first-year (1L) grades, which must be strong — typically top 10-20% of your class — to move up the rankings. Transfers happen after 1L, and the main tradeoff is that transfer students usually lose any scholarship from their original school and receive little aid at the new one. The strategy: attend the best school you get into, earn excellent 1L grades, and apply to transfer if you outperform your class. Note that transfer admission is highly grades-dependent and much less predictable than regular admission.',
  },
  {
    q: 'Can I use the GRE instead of the LSAT?',
    a: 'An increasing number of law schools — including several T14 schools like Harvard, Columbia, Northwestern, and Georgetown — accept the GRE in place of the LSAT, but the LSAT remains the dominant and safer choice. Roughly 98% of law school enrollees submit an LSAT score, and schools that accept both may still prefer the LSAT. If you have a strong GRE score and the LSAT is a weak spot, GRE acceptance gives you an alternative path, but check each school\u2019s policy carefully, because the rules vary, and a strong LSAT is still the most portable and reliable credential across the largest number of schools.',
  },
  {
    q: 'What is the difference between full-time and part-time law school?',
    a: 'Part-time law programs — offered by schools like Georgetown, Fordham, and Loyola — let you earn a JD while working, typically over four years instead of three, with evening or weekend classes. They are a strong option for career-changers and working professionals who cannot leave a job. The tradeoffs: part-time students often have access to fewer clinics and on-campus recruiting opportunities, and employment outcomes can differ from the full-time program. If you are weighing the two, check the part-time program\u2019s bar passage and employment data specifically, since they are reported separately from the full-time program.',
  },
  {
    q: 'What does a perfect 180 LSAT actually mean?',
    a: 'A 180 is the highest possible LSAT score and is extraordinarily rare — only a few dozen test takers per year achieve it, putting it well above the 99.9th percentile. It clears the 75th percentile at every law school in the country, including Yale and Stanford. But a 180 does not guarantee admission anywhere: Yale and Stanford admit only 4-6% of applicants, and even a 180 with a 4.0 GPA is no guarantee there, because the essays, recommendations, and experience still decide the outcome at the very top. In practice, the difference between a 176 and a 180 is negligible for admissions — both clear every median — so do not chase perfection at the expense of the rest of your application.',
  },
  {
    q: 'Is taking a gap year before law school worth it?',
    a: 'For most applicants, yes. A year of work, service, or meaningful experience strengthens your application in ways that matter: it gives you material for a more mature personal statement, a real answer to "why law," and often a higher LSAT score if you use the time to study. Schools increasingly value post-college experience, and the data shows applicants with work experience are admitted at higher rates at many schools. The cost is a year of delay and, if you are not careful, a year of drift — so treat a gap year as a deliberate investment: work at something that builds skills or perspective, study for the LSAT, and apply the following cycle.',
  },
  {
    q: 'How do I choose the right recommenders for law school?',
    a: 'Choose recommenders who know your academic or professional work well and can write specifically about your abilities — a detailed letter from an assistant professor who taught you closely beats a generic letter from a famous name who barely knows you. For most applicants, two academic recommenders (professors who can speak to your writing and analytical ability) plus one professional recommender (if you have worked) is the right mix. Give each recommender your resume, a reminder of your work in their class or role, and plenty of lead time. A lukewarm or vague letter is a real negative, so prioritize people who will write enthusiastically and specifically about you.',
  },
];
