function Publication(id, year, title, authors, journal, pissue, link, pdf, abstract) {
  this.id = id;
  this.year = year;
  this.title = title;
  this.authors = authors;
  this.journal = journal;
  this.pissue = pissue;
  this.link = link;
  this.pdf = pdf;
  this.abstract = abstract;
}
const publication_1 = new Publication(
  1,
  2015,
  "Epidemiologic Study of Trauma Patients Admitted to a Level 1 Trauma Center in Shiraz: One Year Survey.",
  ["Haleh Ghaem", "Shahram Paydar", "Mehrdad Anvar", "Mahnaz Yadollahi", "Parsa Ravanfar"],
  "Razavi International Journal of Medicine",
  [3, 4, "1-4"],
  "https://journal.razavihospital.ir/article_113491.html",
  "https://journal.razavihospital.ir/article_113491_01a429468a1f9a426a8af7f0781d81d1.pdf",
  "Abstract Background: Traumatic injuries exert significant burden on human populations around the world. Iran as a developing country is at top 5 deadliest countries regarding injuries; however, few studies have examined the descriptive epidemiology of trauma in Iran. Objectives: To describe injuries regarding age, gender and injury mechanism and also time trend in emergency departments of Shahid Rajaee Trauma Center affiliated to Shiraz University of Medical Sciences. Patients and Methods: This descriptive cross-sectional study was carried out on all trauma patients (n = 21542) admitted to Shahid Rajaee Trauma Hospital (level I trauma referral center in Shiraz) between March 2011 and March 2012. Data were analyzed separately by age, gender, month of admission, and injury mechanisms (motorcycle collision, car-pedestrian accidents, car-car accidents, fall from height, stab wounds and gunshot injuries). Results: With a mean age of 36.0 ± 17.2 years, a total number of 21542 patients were visited, 16524 (76.7%) of whom were male. The male to female ratio was 3.3:1 with injured men being significantly younger than women (mean age 33.7 + 16.6 and 43.6 ± 19.2 years, respectively). There were 1492 trauma victims older than 60 years accounting for the smallest proportion of the population (6.92%). On admission, 1699 patients (7.9%) required cardiopulmonary cerebral resuscitation (CPCR) with a sex ratio of 2:1. Among those requiring CPCR, falling down was the major cause (45.24%) of injury in elderly (patients over 60 year) and car accident in those under 60 year (43.94%). Conclusions: Injuries affect all age groups; however, the disproportionately at risk population is the productive youth. Preventive strategies should focus on reducing trauma incidence among young men at population level. Considering the higher number of incidents occurring in mid spring and late summer, authorities should devise preventive plans mainly through alteration of traffic rules in this period."
);
const publication_2 = new Publication(
  2,
  2017,
  "Does Implementation of ISO Standards in Hospitals Improve Patient Satisfaction?",
  ["Vahid Keshtkar", "Meisam Bazgir", "Mehrdad Anvar"],
  "Journal of Health Management and Informatics",
  [4, 1, "7-11"],
  "https://jhmi.sums.ac.ir/article_42681.html",
  "https://jhmi.sums.ac.ir/article_42681_eae286b0dc5e2d2b86023f352e0e5ad7.pdf",
  "Introduction: Around the world, a large number of projects have been developed with the aim of assessing patient satisfaction especially in hospitals. As an important indicator of the quality of health care system, Patients’ perception of health care has been the center of attention over the recent 20 years.Method: 402 patients who were hospitalized in teaching hospitals affiliated to the Shiraz University of Medical Sciences were investigated. Patients’ satisfactions of the health care services were assessed using the translated and modified version of the KQCAH consisted of 44 questions divided to7 categories of Respect and Caring, Effectiveness and Continuity, Appropriateness, Information, Efficiency, Meals, First Impression, Staff Diversity. All of the patients were asked to fill out the questionnaire (with written informed consents) at the time of discharge from the hospitals.Results: Regarding total score of patient satisfaction the ISO-certified hospitals did not show advantages over the uncertified hospitals. The total score of patients’ satisfaction ranged from 66.5 to 77.5 in. Overall, only in one ISO-certified hospital the total score of patient satisfaction representing all dimensions, was significantly higher comparing to other hospitals included in the study.Conclusion: It seems that solitary application of ISO standards could not improve patient satisfaction in hospitals affiliated to Shiraz University of Medical Sciences. Keywords: ISO, Patient satisfaction, Teaching hospitals"
);
const publication_3 = new Publication(
  3,
  2017,
  "Logistic regression modeling for evaluation of factors affecting trauma outcome in a level I trauma center in Shiraz.",
  [
    "Mahnaz Yadollahi",
    "Mehrdad Anvar",
    "Haleh Ghaem",
    "Shahram Bolandparvaz",
    "Shahram Paydar",
    "Fateme Izianloo",
  ],
  "Iranina Red Crescent Medical Journal",
  [19, 1, "0-0"],
  "",
  "https://archive.ircmj.com/article/19/1/21963-pdf.pdf",
  "Background: Since injury-related mortality is preventable, identifying factors that inversely affect trauma outcome are important initial steps towards reducing injury burden. Objectives: This study aims to determine independent risk factors of early/late in-hospital mortality among adult trauma victims with equal injury characteristics and severity at Shahid Rajaee (Emtiaz) Hospital during 2013 and 2014. Patients and Methods: A cross-sectional study of adult trauma patients (age≥ 15 years) sustaining injury through traffic accidents,violence, and unintentional incidents was conducted. Information was retrieved from three hospital administrative databases. Dataon demographics, injury mechanisms, injured body regions, injury descriptions, outcomes of hospitalization, and development of nosocomial infections were recorded. Injury severity score was calculated by cross walking from international classification of diseases (ICD-10) injury diagnosis codes to abbreviated injury scale (AIS-98) severity codes. Two multiple logistic regression models were employed to reflect the partial effect of each covariate on early (within 48 hours) and late (beyond 48 hours) deaths. Results: There were 47,295 hospitalized patients (male/female ratio: 2.7:1.0) with a median age of 30 years (interquartile range 23 - 44 years). A crude mortality rate of 1% (454 cases) was observed and 52% of deaths occurred within 48 hours of hospital arrival. One percent developed a nosocomial infection in the course of admission. After adjusting for covariates, sustaining a thoracic injury (OR 8.5, 95% CI [4.7 - 15.2]), ISS over 16 (OR 6.4, 95% CI [3.6 - 11.4]) and age over 65 years (OR 5.1, 95% CI [3.0 - 8.8]) were the most important independent risk factors of early trauma death. Presence of a hospital-acquired infection (OR 12.7, 95% CI [8.9 - 18.1]), age over 65 years (OR 7.4 95% CI [4.5 - 12.1]), and ISS of more than 16 (OR 14.6, 95% CI [6.2 - 34.3]) were independent predictors of late death.Conclusions: Age, injury severity, injured body region, and hospital-acquired infections are important determinants of trauma outcome in our center. Timely recognition of factors affecting trauma mortality is crucial for monitoring changes of trauma quality of care. Our findings suggest the need to allocate resources for trauma prevention along with a potential focus on reducing inhospital complications."
);
const publication_4 = new Publication(
  4,
  2017,
  "Analysis of Shahid Rajaee hospital administrative data on injuries resulting from car accidents in Shiraz, Iran: 2011-2014 data.",
  ["Mahnaz Yadollahi", "Aida Ghiassee", "Mehrdad Anvar", "Hale Ghaem", "Mohammad Farahmand"],
  "Chinese Journal of Traumatology",
  [20, 1, "27-33"],
  "https://www.sciencedirect.com/science/article/pii/S1008127517300123",
  "https://medcentral.net/doi/pdf/10.1016/j.cjtee.2015.10.006",
  "Purpose administrative data from trauma centers could serve as potential sources of invaluable information while studying epidemiologic features of car accidents. In this cross-sectional analysis of Shahid Rajaee hospital administrative data, we aimed to evaluate patients injured in car accidents in terms of age, gender, injury severity, injured body regions and hospitalization outcome in the recent four years (2011–2014). Methods The hospital registry was accessed at Shiraz Trauma Research Center (Shiraz, Iran) and the admission's unit data were merged with the information gathered upon discharge. A total number of 27,222 car accident patients aged over 15 years with International Classification of Diseases 10th revision (ICD-10) external causes of injury codes (V40.9-V49.9) were analyzed. Injury severity score and injured body regions were determined based on converting ICD-10 injury codes to Abbreviated Injury Scale (AIS-98) severity codes using a domestically developed electronic algorithm. A binary logistic regression model was applied to the data to examine the contribution of all independent variables to in-hospital mortality. Results Men accounted for 68.9% of the injuries and the male to female ratio was 2.2:1. The age of the studied population was (34 ± 15) years, with more than 77.2% of the population located in the 15–45 years old age group. Head and neck was the most commonly injured body region (39.0%) followed by extremities (27.2%). Injury severity score (ISS) was calculated for 13,152 (48.3%) patients, of whom, 80.9% had severity scores less than 9. There were 332 patients (1.2%) admitted to the intensive care units and 422 in-hospital fatalities (1.5%) were recorded during the study period. Age above 65 years [OR = 7.4, 95% CI (5.0–10.9)], ISS above 16 [OR = 9.1, 95% CI (5.5–14.9)], sustaining a thoracic injury [OR = 7.4, 95% CI (4.6–11.9)] and head injury [OR = 4.9, 95% CI (3.1–7.6)] were the most important independent predictors of death following car accidents. Conclusion Hospital administrative databases of this hospital could be used as reliable sources of information in providing epidemiologic reports of car accidents in terms of severity and outcomes. Improving the quality of recordings at hospital databases is an important initial step towards more comprehensive injury surveillance in Fars, Iran."
);
const publication_5 = new Publication(
  5,
  2017,
  "Time distribution of injury-related in-hospital mortality in a trauma referral center in South of Iran (2010–2015).",
  [
    "Hamidreza Abbasi",
    "Shahram Bolandparvaz",
    "Mahnaz Yadollahi",
    "Mehrdad Anvar",
    "Zahra Farahgol",
  ],
  "Medicine",
  [96, 21, ""],
  "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5457857/",
  "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5457857/pdf/medi-96-e6871.pdf",
  "In Iran, there are no studies addressing trauma death timing and factors affecting time of death after injuries. This study aimed to examine time distribution of trauma deaths in an urban major trauma referral center with respect to victims’ injury characteristics during 2010 to 2015. This was a cross-sectional study of adult trauma-related in-hospital deaths resulting from traffic-related accidents, falls, and violence-related injuries. Information on injury characteristics and time interval between admission and death was extracted from 3 hospital databases. Mortality time distribution was analyzed separately in the context of each baseline variable. A total of 1117 in-hospital deaths (mean age 47.6 ± 22.2 years, 80% male) were studied. Deaths timing followed an extremely positive skewed bimodal distribution with 1 peak during the first 24 hours of admission (41.6% of deaths) and another peak starting from the 7th day of hospitalization to the end of first month (27.7% of total). Subjects older than 65 years were more likely to die after 24 hours compared to younger deceased (P = .031). More than 70% of firearm-related deaths and 48% of assault-related mortalities occurred early, whereas 67% and 66% of deaths from falls and motorcycle accidents occurred late (P < .001). Over 57% of deaths from severe thoracic injuries occurred early, whereas this value was only 37% for central nervous system injuries (P < .001). From 2010 to 2015, percentage of late deaths decreased significantly from 68% to 54% (P < .001). Considering 1 prehospital peak of mortality and 2 in-hospital peaks, mortality time distribution follows the old trimodal pattern in Shiraz. This distribution is affected by victims’ age, injury mechanism, and injured body area. Although such distribution reflects a relatively lower quality of care comparing to mature trauma systems, a change toward expected bimodal pattern has started."
);
const publication_6 = new Publication(
  6,
  2017,
  "Injury patterns among various age and gender groups of trauma patients in southern Iran: A cross-sectional study.",
  ["Shahram Bolandparvaz", "Mahnaz Yadollahi", "Hamid Reza Abbasi", "Mehrdad Anvar"],
  "Medicine",
  [96, 41, ""],
  "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5662297/",
  "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5662297/pdf/medi-96-e7812.pdf",
  "Administrative data from trauma referral centers are useful sources while studying epidemiologic aspects of injuries. We aimed to provide a hospital-based view of injuries in Shiraz considering victims’ age and gender, using administrative data from trauma research center. A cross-sectional registry-based study of adult trauma patients (age ≥15 years) sustaining injury through traffic accidents, violence, and unintentional incidents was conducted. Information was retrieved from 3 hospital administrative databases. Data on demographics, injury mechanisms, injured body regions, and injury descriptions; outcomes of hospitalization; and development of nosocomial infections were recorded. Injury Severity Score (ISS) was calculated by crosswalking from ICD-10 (International Classification of Diseases) injury diagnosis codes to AIS-98 (Abbreviated Injury Scale) severity codes. Patients were compared based on age groups and gender differences. A total of 47,295 trauma patients with a median age of 30 (interquartile range: 24–44 years) were studied, of whom 73.1% were male and the remaining 26.9% were female (M/F = 2.7:1.0). The most common injury mechanisms in the male group were car and motorcycle accidents whereas females were mostly victims of falls and pedestrian accidents (P < .01). As age increased, a shift from transportation-related to unintentionally caused injuries occurred. Overall, young men had their most severe injuries on head, whereas elderly women suffered more severe extremity injuries. Injury severity was similar between men and women; however, elderly had a significantly higher ISS. Although incidence of nosocomial infections was independent of victims’ age and gender, elderly men had a significantly higher mortality rate. Based on administrative data from our trauma center, male gender and age >65 years are associated with increased risk of injury incidence, prolonged hospitalizations, and in-hospital death following trauma. Development of a regional trauma surveillance system may provide further opportunities for studying injuries and evaluating preventive actions."
);
const Publications = {
  publication_1,
  publication_2,
  publication_3,
  publication_4,
  publication_5,
  publication_6,
};

export default Publications;
