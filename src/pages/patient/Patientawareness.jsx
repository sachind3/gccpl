import { useState } from "react";
import { AnimatedWords } from "../../components/Animations";
import SLIDE1 from "./../../assets/patient/slider/slide-1.png";
import SLIDE2 from "./../../assets/patient/slider/slide-2.png";
import SLIDE3 from "./../../assets/patient/slider/slide-3.png";
import SLIDE4 from "./../../assets/patient/slider/slide-4.png";
import SLIDE5 from "./../../assets/patient/slider/slide-5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import DownloadModal from "./../../components/DownloadModal";
import TransitionEffect from "../../components/TransitionEffect";
import { Helmet } from "react-helmet";

export default function Patientawareness() {
  const [show, setShow] = useState(false);
  const openModal = () => {
    setShow(true);
  };
  return (
    <>
      <Helmet>
        <title>Patient Awareness | GCCPL</title>
      </Helmet>
      <TransitionEffect />
      <section className="section-Patientawareness section-page flex items-center justify-center">
        <div className="container mx-auto px-4">
          <h1 className="heading1">
            <AnimatedWords title="Pneumonia" />
          </h1>
          <h1 className="heading1 mb-4">
            <AnimatedWords title="Awareness & Prevention" />
          </h1>
          <div className="mt-4">
            <Swiper
              slidesPerView={5}
              spaceBetween={30}
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
                <div className="flex flex-col space-y-3">
                  <img src={SLIDE1} alt="img1" width={"100%"} height={"auto"} />
                  <p className="text-white text-xl 2xl:text-xl xl:text-base text-center line-clamp-2 min-h-[56px]">
                    Pneumonia & its Types
                  </p>
                  <button
                    type="button"
                    onClick={openModal}
                    className="text-white border border-white px-4 py-2 self-center"
                  >
                    Download
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col space-y-3">
                  <img src={SLIDE2} alt="img1" width={"100%"} height={"auto"} />
                  <p className="text-white text-xl 2xl:text-xl xl:text-base text-center line-clamp-2 min-h-[56px]">
                    Pneumonia & Prevention Types
                  </p>
                  <button
                    type="button"
                    onClick={openModal}
                    className="text-white border border-white px-4 py-2 self-center"
                  >
                    Download
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col space-y-3">
                  <img src={SLIDE3} alt="img1" width={"100%"} height={"auto"} />
                  <p className="text-white text-xl 2xl:text-xl xl:text-base text-center line-clamp-2 min-h-[56px]">
                    Pneumonia in Asthma & COPD
                  </p>
                  <button
                    type="button"
                    onClick={openModal}
                    className="text-white border border-white px-4 py-2 self-center"
                  >
                    Download
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col space-y-3">
                  <img src={SLIDE4} alt="img1" width={"100%"} height={"auto"} />
                  <p className="text-white text-xl 2xl:text-xl xl:text-base text-center line-clamp-2 min-h-[56px]">
                    Pneumonia in Adults
                  </p>
                  <button
                    type="button"
                    onClick={openModal}
                    className="text-white border border-white px-4 py-2 self-center"
                  >
                    Download
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col space-y-3">
                  <img src={SLIDE5} alt="img1" width={"100%"} height={"auto"} />
                  <p className="text-white text-xl 2xl:text-xl xl:text-base text-center line-clamp-2 min-h-[56px]">
                    Pneumonia Vaccination & Lifestyle
                  </p>
                  <button
                    type="button"
                    onClick={openModal}
                    className="text-white border border-white px-4 py-2 self-center"
                  >
                    Download
                  </button>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <DownloadModal show={show} setShow={setShow} />
    </>
  );
}
