import React, { forwardRef, useRef, useEffect, useState } from "react";
import MarqueeCustom from "./Marquee";
import { gsap, ScrollTrigger } from "gsap/all";


const Services = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set((".title"), { opacity: 0, y: 100 });
    ScrollTrigger.batch((".title"), {
      onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: { each: 0.15 }, overwrite: true }),
    
  })
  })
  return (
    <div className="services">
       <MarqueeCustom text={"what I do"} gradient={false} direction={"right"} speed={150}/>
       <ul className="container">
         <li> 
         <p className="number">01</p>
         <p className="title">Creative</p>
         <ul className="categories">
           <li className="category-tag">Branding</li>
           <li className="category-tag">Branding</li>
           <li className="category-tag">Branding</li>
           <li className="category-tag">Branding</li>
           <li className="category-tag">Branding</li>
         </ul>
         </li>
             <li> 
         <p className="number">02</p>
         <p  className="title">Creative</p>
         <ul className="categories">
           <li className="category-tag">Branding</li>
           <li className="category-tag">Branding</li>
           <li className="category-tag">Branding</li>
           <li className="category-tag">Branding</li>
              <li className="category-tag">Branding</li>
           <li className="category-tag">Branding</li>
        
         </ul>
         </li>
             <li> 
         <p className="number">03</p>
         <p className="title">Creative</p>
         <ul className="categories">
           <li className="category-tag">Branding</li>
           <li className="category-tag">Branding</li>
           <li className="category-tag">Branding</li>
           <li className="category-tag">Branding</li>
         </ul>
         </li>
         <li></li>
         <li></li>

       </ul>
      </div>
  )
};

export default Services;