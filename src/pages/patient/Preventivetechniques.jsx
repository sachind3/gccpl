import { useState } from "react";
import { AnimatedWords } from "../../components/Animations";
import PATIENTBG from "./../../assets/patient/patient-bg.png";
import TransitionEffect from "../../components/TransitionEffect";
import { Helmet } from "react-helmet";

export default function Preventivetechniques() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Helmet>
        <title>Preventive Techniques | GCCPL</title>
      </Helmet>
      <TransitionEffect />
      <section className="section-Preventivetechniques section-page flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="pt-12 2xl:pt-12 xl:pt-8 w-1/2">
            <h1 className="heading1 mb-4">
              <AnimatedWords title="Preventive Techniques" />
            </h1>
            <div className="text-white text-2xl 2xl:text-2xl xl:text-xl max-w-sm font-semibold mb-4">
              Vaccination is the most important Preventive technique against
              pneumonia
            </div>
            {!show && (
              <button
                className="bg-transparent text-white border border-white py-2 px-4 mb-8 hover:bg-white hover:text-teal-500 duration-500"
                onClick={() => setShow(!show)}
              >
                Read More
              </button>
            )}
            {show && (
              <>
                <p className="text-white text-lg 2xl:text-lg xl:text-base mb-4">
                  Vaccines are available to protect against the bacteria{" "}
                  <b>Pneumococcus (PCV-13 and PPSV-23 vaccines)</b>, and
                  Hemophilus influenza type B (Hib vaccine). PCV-13 and Hib are
                  given to infants and children under 5 years of age part of the
                  immunization program in most countries. Older children and
                  adults with risk factors and comorbid conditions mentioned
                  above particularly those of reduced immunity, and those aged
                  65 years or more, should also get the pneumococcal PPSV-23
                  vaccine.
                </p>
                <p className="text-white text-lg 2xl:text-lg xl:text-base mb-4 font-bold">
                  Pneumococcal vaccination is the most important technique to
                  prevent majority of community acquired bacterial pneumonia
                  (CABP) and also secondary bacterial pneumonia commonly seen
                  with viral pneumonia.
                </p>
                <p className="text-white text-lg 2xl:text-lg xl:text-base mb-4">
                  Influenza vaccine is to be taken annually and should be given
                  to children, the elderly, and those with respiratory and other
                  comorbid high-risk conditions mentioned. COVID vaccines have
                  been introduced in 2020-21 due to the pandemic.
                </p>
              </>
            )}
          </div>
        </div>
        <img
          src={PATIENTBG}
          alt="bg"
          className="absolute right-0 bottom-0 h-[80%] w-auto"
        />
      </section>
    </>
  );
}
