import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { AnimatedWords } from "../components/Animations";
import IMG1 from "./../assets/disease_burden/slide_1.png";
import IMG2 from "./../assets/disease_burden/slide_2.png";
import IMG3 from "./../assets/disease_burden/slide_3.png";
import TransitionEffect from "../components/TransitionEffect";
import { Helmet } from "react-helmet";

export default function Diseaseburden() {
  return (
    <>
      <Helmet>
        <title>Disease Burden</title>
      </Helmet>
      <TransitionEffect />
      <section className="section-Diseaseburden section-page flex items-start xl:items-center lg:items-start justify-center">
        <div className="container mx-auto px-4 md:px-10 sm:px-4">
          <h1 className="heading1 mb-4">
            <AnimatedWords title="Disease Burden" />
            <sup className="font-normal text-lg -translate-y-4 relative inline-block arial">
              7, 8, 23
            </sup>
          </h1>
          <div>
            <Swiper
              slidesPerView={1}
              spaceBetween={60}
              breakpoints={{
                1280: {
                  slidesPerView: 3,
                },
                520: {
                  slidesPerView: 2,
                },
              }}
              navigation={{
                prevEl: ".prevBtn",
                nextEl: ".nextBtn",
              }}
              pagination={{
                clickable: true,
                el: ".custom-pagination",
                type: "bullets",
              }}
              loop={true}
              modules={[Navigation, Pagination, A11y]}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              className="diseaseSlider"
            >
              <SwiperSlide>
                <div className="border-b-8 border-lime-500 flex items-center justify-center mb-4">
                  <img
                    src={IMG1}
                    width={0}
                    height={0}
                    alt="win1"
                    className="w-[480px] 2xl:w-[480px] xl:w-[340px]"
                  />
                </div>
                <p className="text-white text-xl 2xl:text-xl xl:text-base font-semibold">
                  Global Pneumonia burden is around
                </p>
                <div className="text-orange-500 font-bold text-3xl 2xl:text-3xl xl:text-2xl">
                  400-450 million
                </div>
                <p className="text-white text-xl 2xl:text-xl xl:text-base font-semibold">
                  per year
                </p>
                <span className="text-white text-xl xl:text-base">
                  (children: 150-160 million)
                </span>
              </SwiperSlide>
              <SwiperSlide>
                <div className="border-b-8 border-lime-500 flex items-center justify-center mb-4">
                  <img
                    src={IMG2}
                    width={0}
                    height={0}
                    alt="win1"
                    className="w-[480px] 2xl:w-[480px] xl:w-[340px]"
                  />
                </div>
                <p className="text-white text-xl 2xl:text-xl xl:text-base font-semibold">
                  CAP (Community Acquired Pneumonia) global incidence:
                </p>
                <div className="text-orange-500 font-bold text-3xl 2xl:text-3xl xl:text-2xl">
                  1.5 to 14 per 1000 person-years
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="border-b-8 border-lime-500 flex items-center justify-center mb-4">
                  <img
                    src={IMG3}
                    width={0}
                    height={0}
                    alt="win1"
                    className="w-[480px] 2xl:w-[480px] xl:w-[340px]"
                  />
                </div>
                <p className="text-white text-xl 2xl:text-xl xl:text-base font-semibold">
                  Hospitalizations in CAP is
                </p>
                <div className="text-orange-500 font-bold text-3xl 2xl:text-3xl xl:text-2xl">
                  20-30%{" "}
                  <span className="text-white text-xl xl:text-base font-normal">
                    increasing with age to
                  </span>
                </div>
                <div className="text-orange-500 font-bold text-3xl 2xl:text-3xl xl:text-2xl">
                  67-75%{" "}
                  <span className="text-white text-xl xl:text-base font-normal">
                    in ≥ 65 years
                  </span>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="custom-pagination"></div>
          </div>
        </div>
      </section>
    </>
  );
}
