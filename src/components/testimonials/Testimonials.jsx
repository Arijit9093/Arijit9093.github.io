import React from 'react'

import './testimonials.css'
// import Swiper core and required modules
import { Pagination,  Scrollbar, Navigation, A11y} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Certificate1 from '../../assests/certificate1.png'
import Certificate2 from '../../assests/certificate2.png'
import Certificate3 from '../../assests/certificate3.png'
import Certificate4 from '../../assests/certificate4.png'
import Certificate5 from '../../assests/certificate5.png'
import LightSpeed from 'react-reveal/LightSpeed';
const Testimonials = () => {
  return (
    
    <section id='testimonials'>
      <h5>Received</h5>
      <h2>Certificates</h2>
      <LightSpeed>
      <Swiper className="container"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide className='certificate__item'>
          <div className="certificate__item-image">
            <img src={Certificate1} alt="" />
          </div>
          <h3 className='internship_title'> Internship Selection Certificate from Internshala.</h3>
        </SwiperSlide>
        <SwiperSlide className='certificate__item'>
          <div className="certificate__item-image">
            <img src={Certificate2} alt="" />
          </div>
          <h3 className='internship_title'>Nasscom AI foundation Certificate.</h3>
        </SwiperSlide>
        <SwiperSlide className='certificate__item'>
          <div className="certificate__item-image">
            <img src={Certificate3} alt="" />
          </div>
          <h3 className='internship_title'>NPTEL Certificate for Forest and their Management</h3>
        </SwiperSlide>
        <SwiperSlide className='certificate__item'>
          <div className="certificate__item-image">
            <img src={Certificate4} alt="" />
          </div>
          <h3 className='internship_title'>Certificate of Algorithmic Toolbox by Coursera.</h3>
        </SwiperSlide>
        <SwiperSlide className='certificate__item'>
          <div className="certificate__item-image">
            <img src={Certificate5} alt="" />
          </div>
          <h3 className='internship_title'>Problem Solving Certification from HackerRank.</h3>
        </SwiperSlide>
      </Swiper>
      </LightSpeed>
    </section>
  )
}

export default Testimonials