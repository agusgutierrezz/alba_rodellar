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
           <li className="category-tag">UX/UI</li>
           <li className="category-tag">Illustration</li>
           <li className="category-tag">Video</li>
           <li className="category-tag">Photography</li>
           <li className="category-tag">3D</li>
           <li className="category-tag">Voiceover</li>
         
         </ul>
         </li>
             <li> 
         <p className="number">02</p>
         <p  className="title">Animation</p>
         <ul className="categories">
           <li className="category-tag">Motion Graphic</li>
           <li className="category-tag">Rigging</li>
           <li className="category-tag">Character animation</li>

        
         </ul>
         </li>
             <li> 
         <p className="number">03</p>
         <p className="title">Strategy</p>
         <ul className="categories">
           <li className="category-tag">Identity</li>
           <li className="category-tag">Restyling</li>
  
         </ul>
         </li>
         <li></li>
         <li></li>

       </ul>
      </div>
  )
};

export default Services;