import { useState } from "react";
import { AnimatedWords } from "../../components/Animations";
import PATIENTBG from "./../../assets/patient/patient-bg.png";
import TransitionEffect from "../../components/TransitionEffect";
import { Helmet } from "react-helmet";

export default function Preventivetechniques() {
  // const [show, setShow] = useState(false);
  return (
    <>
      <Helmet>
        <title>Preventive Techniques | GCCPL</title>
      </Helmet>
      <TransitionEffect />
      <section className="section-Preventivetechniques section-page flex flex-col lg:flex-row md:flex-col items-start lg:items-center md:items-start justify-start xl:justify-center lg:justify-start">
        <div className="container mx-auto px-4 md:px-10 sm:px-4">
          <div className="w-full pt-12 2xl:pt-12 xl:pt-8 lg:w-1/2 md:w-full">
            <h1 className="heading1 mb-4">
              <AnimatedWords title="Preventive Techniques" />
            </h1>
            <div className="text-white text-2xl 2xl:text-2xl xl:text-xl max-w-sm font-semibold mb-4">
              Vaccination is the most important Preventive technique against
              pneumonia
            </div>
          </div>
        </div>
        {/* <img
          src={PATIENTBG}
          alt="bg"
          className="relative lg:absolute md:relative right-0 bottom-0 w-[60%] lg:w-auto md:w-[60%] h-auto xl:h-[80%] lg:h-[60%] md:h-auto -mb-12 lg:-mb-0 md:-mb-12 self-end"
        /> */}
        <img
          src={PATIENTBG}
          alt="bg"
          className="relative lg:absolute md:relative w-full lg:w-[60%] md:w-full right-0 bottom-0"
        />
      </section>
    </>
  );
}
