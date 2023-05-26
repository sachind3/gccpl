import { Helmet } from "react-helmet";
import { AnimatedWords } from "../../components/Animations";
import TransitionEffect from "../../components/TransitionEffect";
import typesImage from "./../../assets/images/types.png";
export default function Benefits() {
  return (
    <>
      <Helmet>
        <title>Benefits of Pneumococcal Vaccines | GCCPL</title>
      </Helmet>
      <TransitionEffect />
      <section className="section-Benefits section-page flex items-center justify-center relative !pt-0">
        <div className="container mx-auto px-4 flex gap-3 w-full self-start">
          <div className=" pt-12 2xl:pt-12 xl:pt-8 w-1/2">
            <h1 className="heading1 mb-4 w-72">
              <AnimatedWords title="Benefits of Pneumococcal Vaccines" />
            </h1>
            <div className="flex flex-col divide-y-2 text-white">
              <p className="py-2">
                Reduces the overall risk of getting community acquired pneumonia
                (CAP) by minimizing risk of acquiring community acquired
                bacterial pneumonia (CABP), and secondary bacterial pneumonia in
                those with respiratory viral infections.
              </p>
              <p className="py-2">
                Reduces the risk of severe pneumonia and hospitalization, and
                minimizes the risk of complications and death due to pneumonia.
              </p>
              <p className="py-2">
                Significantly reduces the risk of Invasive Pneumococcal Disease
                (IPD) that includes meningitis and sepsis.
              </p>
              <p className="py-2">
                Helps lower the overall risk of spread of pneumonia in the
                community and its resulting healthcare burden.
              </p>
              <p className="py-2">
                Helps better management of coexisting medical conditions and
                improves overall outcomes in patients with diabetes, chronic
                kidney disease, COPD, and heart disease.
              </p>
              <p className="py-2">
                Lowers the risk of secondary bacterial pneumonia causing high
                morbidity and mortality in pandemics like COVID.
              </p>
              <p className="py-2">
                Significantly protects those with lowered immunity who are at
                high risk of acquiring pneumococcal infection and suffering its
                severity and complications.
              </p>
            </div>
          </div>
          <img src={typesImage} alt="types" className="w-1/2 self-start" />
        </div>
      </section>
    </>
  );
}
