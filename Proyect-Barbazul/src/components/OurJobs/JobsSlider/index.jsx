import { Container } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

import img1 from "../../../assets/corte1.jpg";
import img2 from "../../../assets/corte2.jpg";
import img3 from "../../../assets/corte3.jpg";
import img4 from "../../../assets/corte4.jpg";
import img5 from "../../../assets/corte5.jpg";
import img6 from "../../../assets/corte6.jpg";

const JobsSlider = () => {
  return (
    <Container className="container">
      <Swiper
        className="Swiper-Container"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        <SwiperSlide className="Swiper-img-container">
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="Swiper-img-container">
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="Swiper-img-container">
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="Swiper-img-container">
          <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide className="Swiper-img-container">
          <img src={img5} alt="" />
        </SwiperSlide>
        <SwiperSlide className="Swiper-img-container">
          <img src={img6} alt="" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow "></div>
          <div className="swiper-button-next slider-arrow"></div>
        </div>
      </Swiper>
    </Container>
  );
};

export default JobsSlider;
