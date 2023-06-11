import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatedWords } from "../../components/Animations";
import ICON1 from "./../../assets/risk/tab-1.png";
import ICON2 from "./../../assets/risk/tab-2.png";
import ICON3 from "./../../assets/risk/tab-3.png";
import ICON4 from "./../../assets/risk/tab-4.png";
import ICON5 from "./../../assets/risk/tab-5.png";
import RISKPLACEHOLDER from "./../../assets/risk/riskplaceholder.png";
import TransitionEffect from "../../components/TransitionEffect";
import { Helmet } from "react-helmet";

export default function Riskfactor() {
  const [selectedTab, setSelectedTab] = useState("ELDERLY");
  const tabItems = [
    {
      icon: ICON1,
      label: "ELDERLY",
      para: "Elderly, (especially 65 years and above) with suppressed Immunity, or conditions like Diabetes, Heart Disease, Kidney Disease, or damaged Lungs due to Smoking/COPD are at the risk of Pneumococcal Infection.",
    },
    {
      icon: ICON2,
      label: "YOUNGER",
      para: "Newborns (neonates), infants, and children, due to the easy spread of infections from the upper airway to the lungs resulting from a shorter airway and underdeveloped immunity.",
    },
    {
      icon: ICON3,
      label: "COPD",
      para: "Respiratory conditions like COPD (chronic obstructive pulmonary disease), asthma and Smokers: The risk of contracting pneumococcal pneumonia is 7-8 times higher for COPD, and 6 times higher for asthma. Patients of COPD have 8 times higher risk of contracting and getting hospitalized due to pneumococcal pneumonia and up to 5 times higher risk of invasive pneumococcal disease (IPD).",
    },
    {
      icon: ICON4,
      label: "DIABETES",
      para: "Comorbid conditions like diabetes, or heart disease: Patients with diabetes are at 3 times higher risk of contracting pneumonia as well as hospitalization due to pneumonia. Diabetes is not only associated with a higher risk of Pneumococcal Pneumonia but reported to have 3.5 times increased risk of invasive pneumococcal disease (IPD).",
    },
    {
      icon: ICON5,
      label: "CKD",
      para: "Compromised kidney or liver function: Patients with chronic kidney disease (CKD) have double the risk of pneumonia and hospitalization, with the risk increasing many times for those on dialysis.",
    },
  ];
  const showPara = tabItems.find((item) => item.label === selectedTab);
  return (
    <>
      <Helmet>
        <title>Risk Factor | GCCPL</title>
      </Helmet>
      <TransitionEffect />
      <section className="section-Riskfactor section-page flex items-start justify-center">
        <div className="container mx-auto px-4 md:px-10 sm:px-4">
          <h1 className="heading1 mb-4">
            <AnimatedWords title="Risk Factors" />
            <sup className="font-normal text-lg -translate-y-4 relative inline-block arial">
              14, 15, 16, 17, 18, 21
            </sup>
          </h1>
          <div className="flex items-center justify-between gap-8 mb-3 mt-4">
            {tabItems.length &&
              tabItems.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`${
                      item.label === selectedTab ? "selected" : "relative"
                    } px-5 py-1 min-w-[100px] text-center cursor-pointer`}
                    onClick={() => setSelectedTab(item.label)}
                  >
                    <img src={item.icon} width={100} height={100} alt="icon" />
                    <div
                      className={`${
                        item.label === selectedTab
                          ? " text-white"
                          : "text-[#a4161d]"
                      } relative z-[8] text-xl 2xl:text-2xl xl:text-xl  font-bold my-4`}
                    >
                      {item.label}
                    </div>
                    {item.label === selectedTab ? (
                      <motion.div
                        className="absolute bg-[#fff] bottom-0 left-0 w-full h-1 "
                        layoutId="underline"
                      />
                    ) : null}
                  </div>
                );
              })}
          </div>
          <div className="w-full lg:w-1/2 md:f-full">
            <div className="text-white text-3xl 2xl:text-3xl xl:text-xl mb-3 font-bold">
              {showPara.label}
            </div>
            <div className="text-white text-base 2xl:text-2xl xl:text-xl lg:text-base font-medium">
              {showPara.para}
            </div>
          </div>
          <img
            src={RISKPLACEHOLDER}
            width={0}
            height={0}
            alt="icon"
            className="absolute bottom-0 right-40 w-[300px] 2xl:w-[424px] xl:w-[380px] lg:w-[300px]"
          />
        </div>
      </section>
    </>
  );
}
