import React, { useRef, useEffect, useState } from "react";
import Slide from "./Slide"
import { gsap, ScrollTrigger } from "gsap/all";
import ScrollBtn from "./ScrollBtn";
import About from "./About";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,EffectFade } from "swiper";
import "swiper/css/effect-fade";
// Import Swiper styles
import 'swiper/css';
const HeaderSlider = () => {
const resultRef=useRef(null)
const root=useRef(null)

    const slides = [
        {
            title:"Blapp",
            source:"header-2.png"
        },
        {
            title:"Fecec",
            source:"header-7.png"
        },
        {
            title:"Sant Joan de Deu",
            source:"header-5.png"
        }
      ];
 
  return (
    <div className="highlighted-container">
  
    <Swiper
    spaceBetween={50}
    slidesPerView={1}
    autoPlay ={true}
    effect={"fade"}
    autoplay={{
      delay: 3500,
      disableOnInteraction: false,
    }}
    modules={[Autoplay,EffectFade]}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    >
            {slides.map((slide,i) => (
      
      <SwiperSlide key={`${slide.title}_${i}`}><Slide  key={`${slide.title}_${i}`} total = {slides.length} number = {i + 1} title={slide.title} source={slide.source} /></SwiperSlide>
  
      ))}
    </Swiper>
    <div ref={root} className="skills-row">
            <p className="b"> Branding    |    UX UI   |   Motion graphics   |   Ilustración   |   Social media   |   Animación   |   Branding    |    UX UI   |   Motion graphics   |   Ilustración   |   Social media   |   Animación   |  Branding    |    UX UI   |   Motion graphics   |   Ilustración   |   Social media   |   Animación   |   Branding    |    UX UI   |   Motion graphics   |   Ilustración   |   Social media   |   Animación  </p> 
        </div>
        <ScrollBtn resultRef={resultRef}/>

        <About ref={resultRef}/>

        </div>
  );
};

export default HeaderSlider;
