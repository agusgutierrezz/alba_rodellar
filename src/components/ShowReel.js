import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import classNames from "classnames"

const Showreel = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const handleOpen=()=>{
    setIsVideoOpen(!isVideoOpen)

  }
  const conditionalStyle = classNames ("showreel-page", {
    "visible" : isVideoOpen,
    "" : !isVideoOpen
  })
    return (
      <div>
        <div className="showreel-btn">
          <a href="#" onClick={handleOpen}> My <b>Showreel</b></a>
        </div>
        <div onClick={handleOpen} className={conditionalStyle}></div>
      </div>
   
    );
  };

export default Showreel;
