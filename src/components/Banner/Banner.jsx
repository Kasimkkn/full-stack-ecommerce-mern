import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import img1 from '../../img/img1.jpg';
import img2 from '../../img/asus.jpg';
import img3 from '../../img/img3.jpg';
import img4 from '../../img/img1.jpg';
import img5 from '../../img/img2.jpg';
import img6 from '../../img/img3.jpg';
import './Banner.css';

const CustomCarousel = () => {

  return (

    <div className="banner">
      <h1 className="heading">Top Products</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide className='slide'>
          <img src={img1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">

          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>

  );
};

export default CustomCarousel;
