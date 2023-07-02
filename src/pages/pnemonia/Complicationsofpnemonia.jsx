import { complications } from "./../../utils/complications";
import { AnimatedWords } from "../../components/Animations";
import { useEffect, useState } from "react";
import TransitionEffect from "../../components/TransitionEffect";
import { Helmet } from "react-helmet";
import MANIMG from "./../../assets/symptoms/mobileman.png";
import { FaTimes } from "react-icons/fa";

export default function Complicationsofpnemonia() {
  const [info, setInfo] = useState(null);
  const [mobInfo, setmobInfo] = useState({ show: false, info: null });
  useEffect(() => {
    const newInfo = complications[0];
    setInfo(newInfo);
  }, []);

  useEffect(() => {
    if (mobInfo?.show) {
      const element = document.getElementById("test");
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [mobInfo]);
  return (
    <>
      <Helmet>
        <title>Complications of pnemonia | GCCPL</title>
      </Helmet>
      <TransitionEffect />
      <section
        className="section-Complicationsofpnemonia section-page py-12 flex items-center justify-center"
        id="test"
      >
        <div className="container mx-auto px-4 md:px-10 sm:px-4">
          <h1 className="heading1 mb-4">
            <AnimatedWords title="Complications" />
            <sup className="font-normal text-lg translate-y-1 lg:-translate-y-4 md:translate-y-1 relative inline-block arial">
              9, 10, 11, 12, 13, 15
            </sup>
          </h1>
          <div className="hidden xl:flex lg:hidden flex-col justify-start items-start w-1/2 ">
            <ul>
              {complications.length &&
                complications.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className={`text-white text-xl 2xl:text-xl xl:text-lg cursor-pointer py-1 px-4 rounded-2xl ${
                        info?.title === item.title &&
                        "bg-orange-500 font-semibold"
                      }`}
                      onClick={() => setInfo(item)}
                    >
                      {item.title}
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="hidden xl:block lg:hidden manImg aspect-[4/3] scale-100 2xl:scale-100 xl:scale-[72%] w-[999px] h-[749px] absolute bottom-0 right-[10%] 2xl:right-[10%] xl:right-[5%]  origin-bottom-right">
            {info?.title && (
              <div
                className={`absolute w-[250px] origin-center tooltipBox`}
                style={{ top: `${info.top}%`, left: `${info.left}%` }}
              >
                <img src={info?.img} alt="icon" className="circleImg" />
                <div className="text-white bg-orange-500 p-2 text-xl rounded-xl text-center">
                  {info?.para}
                </div>
              </div>
            )}
          </div>
          <div className="flex xl:hidden lg:flex justify-center items-center">
            <div className="block 2xl:hidden xl:block relative">
              <img src={MANIMG} alt="man" />

              {complications.length &&
                complications.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className={`bg-blue w-4 h-4  md:w-5 md:h-5  sm:w-4 sm:h-4 rounded-full absolute bg-orange-500 font-semibold circleImg2`}
                      style={{ top: `${item.y}%`, left: `${item.x}%` }}
                      onClick={() => setmobInfo({ show: true, info: item })}
                    ></div>
                  );
                })}
              {mobInfo?.show && (
                <div className="absolute top-0 left-0 w-full bg-white p-3 shadow rounded">
                  <div
                    className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-orange-600 rounded-full text-white"
                    onClick={() => setmobInfo({ show: false, info: null })}
                  >
                    <FaTimes className="text-sm" />
                  </div>
                  <div className="font-semibold">{mobInfo?.info?.title}</div>
                  <div className="text-sm">{mobInfo?.info?.para}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
