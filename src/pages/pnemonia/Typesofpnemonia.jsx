import { Helmet } from "react-helmet";
import { AnimatedWords } from "../../components/Animations";
import TransitionEffect from "../../components/TransitionEffect";
import IMG1 from "./../../assets/types_of_pnemonia/types_of_pnemonia_1.png";
import IMG2 from "./../../assets/types_of_pnemonia/types_of_pnemonia_2.png";

export default function Typesofpnemonia() {
  return (
    <>
      <Helmet>
        <title>Types of pnemonia | GCCPL</title>
      </Helmet>
      <TransitionEffect />
      <section className="section-Typesofpnemonia section-page flex items-center justify-center">
        <div className="container mx-auto px-4">
          <h1 className="heading1 mb-4">
            <AnimatedWords title="Types of Pneumonia" />
          </h1>
          <div className="text-white text-xl 2xl:text-xl xl:text-lg">
            Pneumonia can be classified in 2 ways based on:
          </div>
          <div className="grid text-white grid-cols-2 max-w-4xl mx-auto gap-8 mt-6">
            <div>
              <div className="border-b-8 border-lime-500 flex items-center justify-center">
                <img
                  src={IMG1}
                  width={0}
                  height={0}
                  alt="win1"
                  className="w-[340px] 2xl:w-[340px] xl:w-72"
                />
              </div>
              <h4 className="font-semibold text-2xl 3xl:text-2xl xl:text-xl mt-4">
                Community Acquired Pneumonia (CAP)
              </h4>
            </div>
            <div>
              <div className="border-b-8 border-lime-500 flex items-center justify-center">
                <img
                  src={IMG2}
                  width={0}
                  height={0}
                  alt="win2"
                  className="w-[340px] 2xl:w-[340px] xl:w-72"
                />
              </div>
              <h4 className="font-semibold text-2xl 3xl:text-2xl xl:text-xl mt-4">
                Hospital Acquired Pneumonia (HAP) or Ventilator Acquired
                Pneumonia that are acquired during hospitalization
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
