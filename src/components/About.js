import React, { forwardRef,useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import classNames from "classnames"

const About = forwardRef((props, ref) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const handleOpen=()=>{
    setIsVideoOpen(!isVideoOpen)
    
  }
  const conditionalStyle = classNames ("showreel-page", {
    "visible" : isVideoOpen,
    "" : !isVideoOpen
  })
    return (
      <div className="about" ref={ref}>
        <div className="text-wrapper">
        <p>Hi! i’am Alba and I am passionate about transforming heavy content into attractive pieces and researching innovative trends that bring personality and value to the projects i work on.</p>
        <a className="btn-primary"onClick={handleOpen} href="#">
			<div className="button-content-wrap">
  			<div className="button-text">Watch <b>My Showreel</b></div>
      </div>
		</a>
        </div>

      </div>
    );
  });

export default About;
