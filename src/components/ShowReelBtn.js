import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import classNames from "classnames"

const Showreel = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const videoElm = useRef(null);
  const handleOpen=()=>{
    setIsVideoOpen(!isVideoOpen)
    videoElm.current.pause()
  }
  const conditionalStyle = classNames ("showreel-page", {
    "visible" : isVideoOpen,
    "" : !isVideoOpen
  })
    return (
      <div>
        <div className="showreel-btn">
          {!isVideoOpen &&
          <a href="#" onClick={handleOpen}> My <b>Showreel</b></a>
          }
          {isVideoOpen &&
          <a href="#" className="close-btn" onClick={handleOpen}> <b>Close</b></a>
          }
          </div>
        <div  className={conditionalStyle}>
        <video ref={videoElm} src={require("./../assets/showreel_2022.mp4") } loop muted controls autoPlay>
          Tu navegador no admite el elemento <code>video</code>.
       </video>
        </div>
      </div>
   
    );
  };

export default Showreel;
