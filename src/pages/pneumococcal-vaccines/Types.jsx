import { useState } from "react";
import typesImage from "./../../assets/images/types.png";
import { AnimatedWords } from "../../components/Animations";
import TransitionEffect from "../../components/TransitionEffect";
import { Helmet } from "react-helmet";

export default function Types() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Helmet>
        <title>Types of Pneumococcal Vaccines | GCCPL</title>
      </Helmet>
      <TransitionEffect />
      <section className="section-Types section-page flex items-center justify-center relative !pt-0">
        <div className="container mx-auto px-4 md:px-8 sm:px-4 flex gap-3 w-full self-start">
          <div className=" pt-12 2xl:pt-12 xl:pt-8 w-1/2">
            <h1 className="heading1 mb-4 w-72">
              <AnimatedWords title="Types of Pneumococcal Vaccines" />
            </h1>
            <div className="text-white text-2xl xl:text-xl max-w-sm font-semibold mb-4">
              There are two types of Pneumococcal Vaccines
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
                  The antigen of Pneumococcus (the protein part of the bacteria
                  that facilitates entry and infection) is made up of sugar
                  (polysaccharide). Sugar antigens are weaker compared to
                  protein antigens in stimulating an immune response in those
                  with underdeveloped immunity like seen in infants and young
                  children. Therefore, the sugar antigen is joined (conjugated)
                  with a protein carrier (PCV) to enable effective and
                  long-lasting immune response in children and those with
                  reduced immunity.
                </p>
                <p className="text-white text-lg 2xl:text-lg xl:text-base mb-4">
                  In adults, the sugar antigen works well enough to stimulate
                  the desired immune response and protection, therefore the
                  PPSV-23 vaccine is used in adults. The PPSV-23 covers {`>`}{" "}
                  90% of Pneumococcus serotypes and all those causing pneumonia
                  and serious or invasive pneumococcal disease.
                </p>
              </>
            )}
          </div>
          <img src={typesImage} alt="types" className="w-1/2 self-start" />
        </div>
      </section>
    </>
  );
}
