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
      setDeg(-90);
    } else if (score === 1) {
      setDeg(0);
    } else if (score === 2) {
      setDeg(18);
    } else if (score === 3) {
      setDeg(36);
    } else if (score === 4) {
      setDeg(54);
    } else if (score === 5) {
      setDeg(72);
    } else {
      setDeg(90);
    }
  }, [score]);
  return (
    <>
      <Helmet>
        <title>Risk Score | GCCPL</title>
      </Helmet>
      <TransitionEffect />
      <section className="section-Riskscore section-page flex items-start xl:items-center lg:items-start justify-center">
        <div className="container mx-auto px-4 md:px-10 sm:px-4">
          <div className="text-white text-2xl 2xl:text-2xl xl:text-xl font-semibold mb-4">
            Am I at risk of Pneumonia?
            <br />
            Click here to know your
          </div>
          <h1 className="heading1 mb-4">
            <AnimatedWords title="Risk Score" />
          </h1>
          <div className="w-full flex mt-8 px-0  lg:px-10 sm:px-0 flex-col lg:flex-row md:flex-col">
            <div className="flex flex-col xl:hidden lg:flex gap-3">
              <label htmlFor="risk1m" className="customInput">
                <input
                  type="checkbox"
                  className="hidden"
                  id="risk1m"
                  value="risk1m"
                  name="risk"
                  onChange={handleChange}
                />
                <i></i>
                <span>I am above 65 years age</span>
              </label>
              <label htmlFor="risk2m" className="customInput">
                <input
                  type="checkbox"
                  className="hidden"
                  id="risk2m"
                  value="risk2m"
                  name="risk"
                  onChange={handleChange}
                />
                <i></i>
                <span>I have Diabetes</span>
              </label>
              <label htmlFor="risk3m" className="customInput">
                <input
                  type="checkbox"
                  className="hidden"
                  id="risk3m"
                  value="risk3m"
                  name="risk"
                  onChange={handleChange}
                />
                <i></i>
                <span>I have Kidney Disease</span>
              </label>
              <label htmlFor="risk4m" className="customInput">
                <input
                  type="checkbox"
                  className="hidden"
                  id="risk4m"
                  value="risk4m"
                  name="risk"
                  onChange={handleChange}
                />
                <i></i>
                <span>My lungs are damaged due to Smoking/COPD</span>
              </label>
              <label htmlFor="risk5m" className="customInput">
                <input
                  type="checkbox"
                  className="hidden"
                  id="risk5m"
                  value="risk5m"
                  name="risk"
                  onChange={handleChange}
                />
                <i></i>
                <span>I have Heart Disease</span>
              </label>
              <label htmlFor="risk6m" className="customInput">
                <input
                  type="checkbox"
                  className="hidden"
                  id="risk6m"
                  value="risk6m"
                  name="risk"
                  onChange={handleChange}
                />
                <i></i>
                <span>My Immunity is suppressed</span>
              </label>
            </div>
            <div className="w-1/4 hidden flex-col justify-end gap-6 leftcheck xl:flex lg:hidden pb-10">
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

            <div className="w-full col-span-2 mx-auto lg:w-1/2 md:w-full mt-8 md:mt-0 sm:mt-8">
              <div className="relative w-[300px] xl:w-[520px] lg:w-[400px] md:w-[400px] sm:w-[300] mx-auto ">
                <div className="relative w-full">
                  <div className="arrow" style={{ rotate: `${deg}deg` }}></div>
                  <div className="arrowCircle"></div>
                  <img src={METER} width={"100%"} height={"100%"} alt="meter" />
                </div>
                <div className="text-white font-bold text-3xl text-center w-full z-10 pt-3 flex items-center justify-center">
                  <div className="bg-gray-900 text-white px-3 rounded-md">
                    Risk Score
                  </div>
                </div>
              </div>
            </div>

            <div className="w-1/4 hidden flex-col justify-end gap-6 rightcheck xl:flex lg:hidden pb-10">
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
