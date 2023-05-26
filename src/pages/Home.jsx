import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import BannerText from "../components/BannerText";
import TransitionEffect from "../components/TransitionEffect";
import { Helmet } from "react-helmet";
export default function Home() {
  return (
    <>
      <Helmet>
        <title>GCCPL</title>
      </Helmet>
      <TransitionEffect />
      <Swiper
        pagination={{
          clickable: true,
        }}
        speed={1200}
        loop={true}
        modules={[Autoplay, Navigation, Pagination, A11y]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className={`homeSlider`}
      >
        <SwiperSlide className={`slide1`}>
          <BannerText
            para={`Who are susceptible to`}
            heading1={`Pneumococcal<br />Infection?`}
            heading2={`Elderly`}
            heading3={`65 years or older<sup>1</sup>`}
          />
        </SwiperSlide>
        <SwiperSlide className={`slide2`}>
          <BannerText
            para={`Who are susceptible to`}
            heading1={`Pneumococcal<br />Infection?`}
            heading2={`Adults`}
            heading3={`with lung diseases<br />like COPD<sup>1</sup>`}
          />
        </SwiperSlide>
        <SwiperSlide className={`slide3`}>
          <BannerText
            para={`Who are susceptible to`}
            heading1={`Pneumococcal<br />Infection?`}
            heading2={`Adults`}
            heading3={`with chronic<br />kidney disease (CKD)<sup>1,21</sup>`}
          />
        </SwiperSlide>
        <SwiperSlide className={`slide4`}>
          <BannerText
            para={`Who are susceptible to`}
            heading1={`Pneumococcal<br />Infection?`}
            heading2={`Adults`}
            heading3={`with immune deficiency<sup>1</sup>`}
          />
        </SwiperSlide>
        <SwiperSlide className={`slide5`}>
          <BannerText
            para={`Who are susceptible to`}
            heading1={`Pneumococcal<br />Infection?`}
            heading2={`Individuals`}
            heading3={`with smoking habits<sup>1</sup>`}
          />
        </SwiperSlide>
        <SwiperSlide className={`slide6`}>
          <BannerText
            para={`Who are susceptible to`}
            heading1={`Pneumococcal<br />Infection?`}
            heading2={`Individuals`}
            heading3={`with diabetes<sup>1</sup>`}
          />
        </SwiperSlide>
        <SwiperSlide className={`slide7`}>
          <BannerText
            para={`Who are susceptible to`}
            heading1={`Pneumococcal<br />Infection?`}
            heading2={`Individuals`}
            heading3={`with heart disease<sup>1</sup>`}
          />
        </SwiperSlide>
        {/* <SwiperNavButtons /> */}
      </Swiper>
    </>
  );
}
