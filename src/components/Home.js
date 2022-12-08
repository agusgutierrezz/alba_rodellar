import React, { useRef, useEffect, useState } from "react";
import WorkList from "./WorkList";
import { gsap } from "gsap";
import HeaderSlider from "./HeaderSlider";
import MarqueeCustom from "./Marquee";
import About from "./About";
import Services from "./Services";




const Home = () => {
  const resultRef = useRef(null);
  return (
    <div className="p-home">
    
        <HeaderSlider/>
        <MarqueeCustom text={"my work"} gradient={false} direction={"right"} speed={100}/>
        <WorkList/>
        
        <Services />
    </div>
  );
};

export default Home;