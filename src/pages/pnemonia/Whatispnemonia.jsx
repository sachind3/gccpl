import { Helmet } from "react-helmet";
import { AnimatedWords } from "../../components/Animations";
import TransitionEffect from "../../components/TransitionEffect";
import IMG1 from "./../../assets/what_is_pnemonia/what_is_pnemonia_1.png";
import IMG2 from "./../../assets/what_is_pnemonia/what_is_pnemonia_2.png";

export default function Whatispnemonia() {
  return (
    <>
      <Helmet>
        <title>What is pnemonia? | GCCPL</title>
      </Helmet>
      <TransitionEffect />
      <section className="section-Whatispnemonia section-page  flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-10 sm:px-4">
          <h1 className="heading1 mb-4">
            <AnimatedWords title="What is Pneumonia?" />
          </h1>
          <div className="text-white text-xl 2xl:text-xl xl:text-lg">
            Pneumonia implies inflammation of the air sacs of the lungs due to
            bacterial, viral or fungal infection. The infection and inflammation
            can cause the air sacs of the lung to swell up and get filled with
            fluid or pus. This can decrease the effective gaseous exchange of
            oxygen and carbon dioxide that occurs here.<sup>2</sup>
          </div>
          <div className="grid text-white grid-cols-1 md:grid-cols-2 sm:grid-cols-1  max-w-4xl mx-auto gap-8">
            <div className="mt-2 md:mt-4 sm:mt-2">
              <div className="border-b-8 border-lime-500 flex items-center justify-center">
                <img
                  src={IMG1}
                  width={0}
                  height={0}
                  alt="win1"
                  className="w-[340px] 2xl:w-[340px] xl:w-72"
                />
              </div>
              <h4 className="font-semibold text-2xl 2xl:text-2xl xl:text-xl mt-4">
                Causative Organism:
              </h4>
              <p className="text-xl 2xl:text-xl xl:text-base">
                Bacterial, Viral, Fungal, Parasitic
              </p>
            </div>
            <div className="mt-2 md:mt-4 sm:mt-2">
              <div className="border-b-8 border-lime-500 flex items-center justify-center">
                <img
                  src={IMG2}
                  width={0}
                  height={0}
                  alt="win2"
                  className="w-[340px] 2xl:w-[340px] xl:w-72"
                />
              </div>
              <h4 className="font-semibold text-2xl 2xl:text-2xl xl:text-xl mt-4">
                Mode of Spread:
              </h4>
              <p className="text-xl 2xl:text-xl xl:text-base">
                Through mucus and saliva by coughing/sneezing
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
