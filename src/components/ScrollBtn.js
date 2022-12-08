import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const ScrollBtn =({ resultRef }) => {
    const clickHandle = (e) => {
        e.preventDefault();
        resultRef.current.scrollIntoView({ behavior: "smooth" });
      };
  return (
    <div   className="scroll-btn-container container ">
        <a href="/" onClick={clickHandle} className="scroll-btn">
        <div className="outside" >
<div className="inside">
        </div>

        </div>
        </a>
       
    </div>
    
  );
};

export default ScrollBtn;
