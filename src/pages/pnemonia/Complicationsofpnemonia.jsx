import { complications } from "./../../utils/complications";
import { AnimatedWords } from "../../components/Animations";
import { useEffect, useState } from "react";
import TransitionEffect from "../../components/TransitionEffect";
import { Helmet } from "react-helmet";

export default function Complicationsofpnemonia() {
  const [info, setInfo] = useState(null);
  useEffect(() => {
    const newInfo = complications[0];
    setInfo(newInfo);
  }, []);
  return (
    <>
      <Helmet>
        <title>Complications of pnemonia | GCCPL</title>
      </Helmet>
      <TransitionEffect />
      <section className="section-Complicationsofpnemonia section-page py-12 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <h1 className="heading1 mb-4">
            <AnimatedWords title="Complications" />
          </h1>
          <div className="flex flex-col justify-start items-start w-1/2">
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
          <div className="manImg aspect-[4/3] scale-100 2xl:scale-100 xl:scale-[72%] w-[999px] h-[749px] absolute bottom-0 right-[10%] 2xl:right-[10%] xl:right-[5%]  origin-bottom-right">
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
        </div>
      </section>
    </>
  );
}
