import { useEffect, useState } from "react";
import { AnimatedWords } from "../../components/Animations";
import METER from "./../../assets/risk/meter.png";
import TransitionEffect from "../../components/TransitionEffect";
import { Helmet } from "react-helmet";

export default function Riskscore() {
  const [deg, setDeg] = useState(0);
  const [score, setScore] = useState(0);
  const handleChange = (e) => {
    if (e.target.checked) {
      setScore(score + 1);
    } else {
      if (score === 0) {
        setScore(0);
      } else {
        setScore(score - 1);
      }
    }
  };
  useEffect(() => {
    if (score === 0) {
      setDeg(-60);
    } else if (score === 1) {
      setDeg(0);
    } else if (score === 2) {
      setDeg(12);
    } else if (score === 3) {
      setDeg(24);
    } else if (score === 4) {
      setDeg(36);
    } else if (score === 5) {
      setDeg(48);
    } else {
      setDeg(60);
    }
  }, [score]);
  return (
    <>
      <Helmet>
        <title>Risk Score | GCCPL</title>
      </Helmet>
      <TransitionEffect />
      <section className="section-Riskscore section-page flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="text-white text-2xl 2xl:text-2xl xl:text-xl font-semibold mb-4">
            Am I at risk of Pneumonia?
            <br />
            Click here to know your
          </div>
          <h1 className="heading1 mb-4">
            <AnimatedWords title="Risk Score" />
          </h1>
          <div className="w-full grid grid-cols-4 mt-8">
            <div className="col-span-1 flex flex-col justify-end gap-6 leftcheck">
              <label htmlFor="risk1" className="customInput">
                <input
                  type="checkbox"
                  className="hidden"
                  id="risk1"
                  value="risk1"
                  name="risk"
                  onChange={handleChange}
                />
                <i></i>
                <span>I am above 65 years age</span>
              </label>
              <label htmlFor="risk2" className="customInput">
                <input
                  type="checkbox"
                  className="hidden"
                  id="risk2"
                  value="risk2"
                  name="risk"
                  onChange={handleChange}
                />
                <i></i>
                <span>I have Diabetes</span>
              </label>
              <label htmlFor="risk3" className="customInput">
                <input
                  type="checkbox"
                  className="hidden"
                  id="risk3"
                  value="risk3"
                  name="risk"
                  onChange={handleChange}
                />
                <i></i>
                <span>I have Kidney Disease</span>
              </label>
            </div>
            <div className="col-span-2 mx-auto">
              <div className="relative border-b-8 border-lime-500">
                <div className="arrow" style={{ rotate: `${deg}deg` }}></div>
                <div className="arrowCircle"></div>
                <img src={METER} width={"100%"} height={"100%"} alt="meter" />
                <div className="absolute bottom-3 text-white font-bold text-3xl text-center w-full">
                  Risk Score
                </div>
              </div>
            </div>
            <div className="col-span-1 flex flex-col justify-end gap-6 rightcheck">
              <label htmlFor="risk4" className="customInput">
                <input
                  type="checkbox"
                  className="hidden"
                  id="risk4"
                  value="risk4"
                  name="risk"
                  onChange={handleChange}
                />
                <i></i>
                <span>My lungs are damaged due to Smoking/COPD</span>
              </label>
              <label htmlFor="risk5" className="customInput">
                <input
                  type="checkbox"
                  className="hidden"
                  id="risk5"
                  value="risk5"
                  name="risk"
                  onChange={handleChange}
                />
                <i></i>
                <span>I have Heart Disease</span>
              </label>
              <label htmlFor="risk6" className="customInput">
                <input
                  type="checkbox"
                  className="hidden"
                  id="risk6"
                  value="risk6"
                  name="risk"
                  onChange={handleChange}
                />
                <i></i>
                <span>My Immunity is suppressed</span>
              </label>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
