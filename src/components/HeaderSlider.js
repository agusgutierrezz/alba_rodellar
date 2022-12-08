import React, { useRef, useEffect, useState } from "react";
import Slide from "./Slide"
import { gsap, ScrollTrigger } from "gsap/all";
import ScrollBtn from "./ScrollBtn";
import About from "./About";

const HeaderSlider = () => {
    const resultRef = useRef(null);
    const delay = 5000;
    const slides = [
        {
            title:"Festival de Sitges",
            source:"header-4.png"
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
      const [index, setIndex] = useState(0);
      const timeoutRef = useRef(null);
    
      function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }

      useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {
          resetTimeout();
        };
      }, [index]);

      const root = useRef();
      const q = gsap.utils.selector(root);
      
      useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(q(".b"), {
          x: -50,
          scrollTrigger: {
            trigger: (".highlighted-container"),
            start: "top top",
            end: "bottom bottom",
            scrub:0.5,
          }
        });
    });
  return (
    <div className="highlighted-container">
        <div className="slideshow">
 
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
       {slides.map((slide,i) => (
          <Slide  key={`${slide.title}_${i}`} total = {slides.length} number = {i + 1} title={slide.title} source={slide.source} />
        ))}
          
        </div>
        </div>
        <div ref={root} className="skills-row">
            <p className="b"> Branding    |    UX UI   |   Motion graphics   |   Ilustración   |   Social media   |   Animación   |   Branding    |    UX UI   |   Motion graphics   |   Ilustración   |   Social media   |   Animación   |  Branding    |    UX UI   |   Motion graphics   |   Ilustración   |   Social media   |   Animación   |   Branding    |    UX UI   |   Motion graphics   |   Ilustración   |   Social media   |   Animación  </p> 
        </div>
        <ScrollBtn resultRef={resultRef}/>
        <About ref={resultRef}/>

        </div>
  );
};

export default HeaderSlider;
