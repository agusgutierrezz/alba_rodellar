import React, { useRef, useEffect,Component,useLayoutEffect,useState } from "react";
import Marquee from "react-fast-marquee";
import logoFull from "./../assets/logo-full-color.png";


function MarqueeCustom(props) {
 
  return (
   <Marquee gradient={props.gradient} className={props.className} direction={props.direction} speed={props.speed}>
 
        <p>{props.text}</p>
        <img src={logoFull}/>
        <p>{props.text}</p>
        <img src={logoFull}/>
        <p>{props.text}</p>
        <img src={logoFull}/>
        <p>{props.text}</p>
        <img src={logoFull}/>
    
  </Marquee>
 

  );


}
export default MarqueeCustom;