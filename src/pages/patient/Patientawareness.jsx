import { useState } from "react";
import { AnimatedWords } from "../../components/Animations";
// import SLIDE1 from "./../../assets/patient/slider/slide-1.png";
// import SLIDE2 from "./../../assets/patient/slider/slide-2.png";
// import SLIDE3 from "./../../assets/patient/slider/slide-3.png";
// import SLIDE4 from "./../../assets/patient/slider/slide-4.png";
// import SLIDE5 from "./../../assets/patient/slider/slide-5.png";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { A11y, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import DownloadModal from "./../../components/DownloadModal";
import TransitionEffect from "../../components/TransitionEffect";
import { Helmet } from "react-helmet";
import Fancybox from "./../../components/fancybox";
import LEAFLET from "./../../assets/images/leaflet.png";
import { Link } from "react-router-dom";
export default function Patientawareness() {
  const [show, setShow] = useState(false);
  // const openModal = () => {
  //   setShow(true);
  // };
  return (
    <>
      <Helmet>
        <title>Patient Awareness | GCCPL</title>
      </Helmet>
      <TransitionEffect />
      <section className="section-Patientawareness section-page flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-8 sm:px-4">
          <h1 className="heading1">
            <AnimatedWords title="Pneumonia" />
          </h1>
          <h1 className="heading1 mb-4">
            <AnimatedWords title="Awareness & Prevention" />
          </h1>
          <Fancybox>
            <div className="mt-4 grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3  gap-4">
              <a
                data-fancybox="gallery"
                href="https://solmc.in/demo/video/nap.mp4"
                className="aspect-square flex items-center justify-center text-white p-3 flex-col gap-2 text-center"
              >
                <video
                  className="rounded h-full"
                  src="https://solmc.in/demo/video/nap.mp4"
                />
                <p>Pneumococcal Awareness</p>
                <p>NAP</p>
              </a>
              <a
                data-fancybox="gallery"
                href="https://solmc.in/demo/video/dr-k-kanthi-swaroop.mp4"
                className="aspect-square flex items-center justify-center text-white p-3 flex-col gap-2 text-center"
              >
                <video
                  className="rounded h-full"
                  src="https://solmc.in/demo/video/dr-k-kanthi-swaroop.mp4"
                />
                <p>Benefits of Pneumococcal Vaccine in Diabetic patients</p>
                <p>Dr. K. Kanthi Swaroop</p>
              </a>
              <a
                data-fancybox="gallery"
                href="https://solmc.in/demo/video/dr-J-ramdas.mp4"
                className="aspect-square flex items-center justify-center text-white p-3 flex-col gap-2 text-center"
              >
                <video
                  className="rounded h-full"
                  src="https://solmc.in/demo/video/dr-J-ramdas.mp4"
                />
                <p>Benefits of Pneumococcal Vaccine in COPD patients</p>
                <p>Dr. J. Ramadas</p>
              </a>
              <a
                data-fancybox="gallery"
                href="https://solmc.in/demo/video/dr-s-p-rai.mp4"
                className="aspect-square flex items-center justify-center text-white p-3 flex-col gap-2 text-center"
              >
                <video
                  className="rounded h-full"
                  src="https://solmc.in/demo/video/dr-s-p-rai.mp4"
                />
                <p>Benefits of Pneumococcal Vaccine in Diabetic patients</p>
                <p>Dr. S. P. Rai</p>
              </a>
              <a
                data-fancybox="gallery"
                href="https://solmc.in/demo/video/dr-s-p-matthew-n.mp4"
                className="aspect-square flex items-center justify-center text-white p-3 flex-col gap-2 text-center"
              >
                <video
                  className="rounded h-full"
                  src="https://solmc.in/demo/video/dr-s-p-matthew-n.mp4"
                />
                <p>Benefits of Pneumococcal Vaccine in Diabetic patients</p>
                <p>Dr. S. P. Matthew</p>
              </a>
              <a
                data-fancybox="gallery"
                href="https://solmc.in/demo/video/dr-nandini-banerjee.mp4"
                className="aspect-square flex items-center justify-center text-white p-3 flex-col gap-2 text-center"
              >
                <video
                  className="rounded h-full"
                  src="https://solmc.in/demo/video/dr-nandini-banerjee.mp4"
                />
                <p>Benefits of Pneumococcal Vaccine in COPD patients</p>
                <p>Dr. Nandini Banerjee</p>
              </a>
              <Link
                to="./gccpl-medical-leaflet-final.pdf"
                download
                target="_blank"
                className="aspect-square flex items-center justify-center text-white p-3 flex-col gap-2 text-center"
              >
                <div className="aspect-square">
                  <img
                    className="rounded w-full h-full object-cover"
                    src={LEAFLET}
                    alt="leaflet"
                  />
                </div>
                <p>GCCPL Leaflet</p>
              </Link>
            </div>
          </Fancybox>
        </div>
      </section>
      <DownloadModal show={show} setShow={setShow} />
    </>
  );
}
