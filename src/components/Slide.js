import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const Slide = (props) => {
  return (
    <div className="slide">
        <div className="overlay"></div>
        <img src={props.source} alt="Example" className="" />
        <div className="slide-texts container">
        <p className="title">{props.title}</p>
        <span className="counter">{props.number} | {props.total}</span>
        </div>
        
    </div>
    

  );
};

export default Slide;
