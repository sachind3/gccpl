import { Link } from "react-router-dom";
import { AnimatedWords } from "../components/Animations";
import TransitionEffect from "../components/TransitionEffect";
import { Helmet } from "react-helmet";

export default function References() {
  return (
    <>
      <Helmet>
        <title>References | GCCPL</title>
      </Helmet>
      <TransitionEffect />
      <section className="section-References section-page flex items-start justify-start relative">
        <div className="container mx-auto px-4 md:px-10 sm:px-4">
          <h1 className="heading1 mb-4">
            <AnimatedWords title="References" />
          </h1>
          <div>
            <ol className="list-decimal text-white text-sm refList space-y-2 p-6 pt-0">
              <li>
                <Link to="https://www.cdc.gov/pneumococcal/about/symptoms-complications.html">
                  https://www.cdc.gov/pneumococcal/about/symptoms-complications.html
                </Link>
              </li>
              <li>
                <Link to="https://www.cdc.gov/pneumonia/causes.html">
                  https://www.cdc.gov/pneumonia/causes.html
                </Link>
              </li>
              <li>
                <Link to="https://www.cdc.gov/vaccines/vpd/pneumo/hcp/recommendations.html">
                  https://www.cdc.gov/vaccines/vpd/pneumo/hcp/recommendations.html
                </Link>
              </li>
              <li>
                <Link to="https://www.cdc.gov/vaccines/vpd/pneumo/hcp/who-when-to-vaccinate.html">
                  https://www.cdc.gov/vaccines/vpd/pneumo/hcp/who-when-to-vaccinate.html
                </Link>
              </li>
              <li>
                <Link to="https://goldcopd.org/2023-gold-report-2/">
                  https://goldcopd.org/2023-gold-report-2/
                </Link>
              </li>
              <li>
                <p>
                  Beers MH et al eds, The Merck Manual of Diagnosis and Therapy,
                  18th edition Chapter 52 Pneumonia; CDC. Epidemiology &
                  Prevention of Vaccine-Preventable Diseases, The Pink Book, 9th
                  Edition
                </p>
              </li>
              <li>
                <p>
                  Ghoshal S. Burden of Pneumonia in the Community. JAPI 2016
                  Dec:
                  <Link
                    to={
                      "https://www.japi.org/u2b4c434/burden-of-pneumonia-in-the-community"
                    }
                  >
                    https://www.japi.org/u2b4c434/burden-of-pneumonia-in-the-community
                  </Link>
                </p>
              </li>
              <li>
                <p>
                  Nayar S et al. Management of community-acquired bacterial
                  pneumonia in adults, Lung India: Nov-Dec 2019 - Volume 36 -
                  Issue 6 - p 525-533
                </p>
              </li>
              <li>
                <p>
                  Dhar R et al. Clinical practice guidelines 2019: Lung India
                  2020 Aug;37(Supplement):S19-S29
                </p>
              </li>
              <li>
                <p>
                  Rates of pneumococcal disease in adults with chronic medical
                  conditions. Shea KM, Edelsberg J, Weycker D, Farkouh RA,
                  Strutton DR, Pelton SI. Open Forum Infect Dis. 2014;1:0.
                </p>
              </li>
              <li>
                <p>
                  Reasons for hospitalizations in adults with diabetes in
                  Kuwait. Al-Adsani AM, Abdulla KA. Int J Diabetes Mellit.
                  2015;3(1):65-69.
                </p>
              </li>
              <li>
                <p>
                  Infections in patients with diabetes mellitus: a review of
                  pathogenesis. Casqueiro J, Casqueiro J, Alves C. Indian J
                  Endocrinol Metab. 2012;16 Suppl 1:0-36.
                </p>
              </li>
              <li>
                <p>
                  National Coalition for Adult Immunization roundtable
                  panelists. A call to action: Improving influenza and
                  pneumococcal immunization rates among high-risk adults. (May
                  1998) [Online], 2004. Available from URL{" "}
                  <Link
                    to={"http://www.nfid.org/ncai/publications/roundtable/"}
                  >
                    http://www.nfid.org/ncai/publications/roundtable/
                  </Link>
                </p>
              </li>
              <li>
                <p>
                  Petigara T, Zhang D. Pneumococcal vaccine coverage in adults
                  aged 19-64 years, newly diagnosed with chronic conditions in
                  the US. Am J Prev Med.2018;54(5):620-636
                </p>
              </li>
              <li>
                <p>
                  Moe H. Kyaw, Charles E. Rose, Jr, Alicia M. Fry et.al.; The
                  influence of chronic illnesses on the incidence of invasive
                  pneumococcal disease in adults; J Infect Dis. 2005 Aug 1;
                  192(3): 377-386. Published online 2005 Jun 23. Liu J. Impact
                  of diabetes mellitus on pneumonia mortality in a senior
                  population: results from the NHANES III follow-up study. J
                  Geriatr Cardiol. 2013 Sep;10(3):267-71. Kuo CS, et al.
                  Effectiveness of 23-valent pneumococcal polysaccharide vaccine
                  on diabetic elderly. Medicine (Baltimore). 2016
                  Jun;95(26):e4064. American Diabetes Association Professional
                  Practice Committee; 4. Comprehensive Medical Evaluation and
                  Assessment of Comorbidities: Standards of Medical Care in
                  Diabetes—2022. Diabetes Care 1 January 2022; 45
                  (Supplement_1): S46-S59.
                </p>
              </li>
              <li>
                <p>
                  Mahashur A et al. Role of Pneumococcal Vaccination in Chronic
                  Lung Diseases. JAPI Apr 2015. Vol 63. Special issue. Kurashima
                  K, Takaku Y, Nakamoto K, et al. Risk factors for pneumonia and
                  the effect of the pneumococcal vaccine in patients with
                  chronic airflow obstruction. Chronic Obstr Pulm Dis. 2016;
                  3(3): 610-619.
                </p>
              </li>
              <li>
                <p>
                  Rizvi AA, Singh A. Vaccination coverage among older adults: a
                  population-based study in India. Bull World Health Organ. 2022
                  Jun 1;100(6):375-384.
                </p>
              </li>
              <li>
                <p>
                  Walters JA, Tang JN, Poole P, Wood-Baker R. Pneumococcal
                  vaccines for preventing pneumonia in chronic obstructive
                  pulmonary disease. Cochrane Database Syst Rev. 2017 Jan
                  24;1(1):CD001390.
                </p>
              </li>
              <li>
                <p>
                  Lee TA, Weaver FM, Weiss KB. Impact of pneumococcal
                  vaccination on pneumonia rates in patients with COPD and
                  asthma. J Gen Intern Med. 2007 Jan;22(1):62-7.{" "}
                </p>
              </li>
              <li>
                <p>
                  Pant A et al. Pneumonia in Patients with Chronic Kidney
                  Disease Admitted to Nephrology Department of a Tertiary Care
                  Center: A Descriptive Cross-sectional Study. JNMA J Nepal Med
                  Assoc. 2021 Oct 15;59(242):1000-1003.
                </p>
              </li>
              <li>
                <p>
                  Haddiya I. Current Knowledge of Vaccinations in Chronic Kidney
                  Disease Patients. Int J Nephrol Renovasc Dis. 2020 Jul
                  27;13:179-185.{" "}
                </p>
              </li>
              <li>
                <p>
                  Guidelines for vaccination in patients with chronic kidney
                  disease. Indian J Nephrol. 2016 Apr;26(Suppl 1):S15-8
                </p>
              </li>
              <li>
                <p>
                  Koul PA et al. Pneumococcal disease burden from an Indian
                  perspective: Need for its prevention in pulmonology practice.
                  Lung India. 2019 May-Jun;36(3):216-225
                </p>
              </li>
              <li>
                <p>
                  Kim HW et al. Serotype 6B from a pneumococcal polysaccharide
                  vaccine induces cross-functional antibody responses in adults
                  to serotypes 6A, 6C, and 6D. Medicine (Baltimore). 2016
                  Sep;95(37):e4854
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
