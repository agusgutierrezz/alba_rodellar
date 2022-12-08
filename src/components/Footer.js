import React, { forwardRef, useRef, useEffect, useState } from "react";
import MarqueeCustom from "./Marquee";
import logoblanco from "./../assets/logo-blanco.svg";
import icoinstagram from "./../assets/ico-instagram.svg";
import icoyoutube from "./../assets/ico-youtube.svg";



const Footer = () => {

  return (
    <div className="footer">
       <div className="header container">
       <div className="logo">
       <img src={logoblanco}/>
       <p><span>alba</span><span>rodellar</span></p>
       </div>
         <div className="mail"><span>Alba Rodellar</span>
       <a href="mailto:albarodellar@gmail.com">albarodellar@gmail.com</a>  
       </div>

       </div>
        <MarqueeCustom text={"Let's talk about new things"} gradient={false} direction={"right"} speed={50}/>
       <div className="bottom container">
         <div className="social">
           <div className="social-item">
             <div className="text">
               <p>Instagram</p>
               <a href="#">@iam_ardd</a>
             </div>
             <div className="icon">
               <img src={icoinstagram} alt=""/>
             </div>

           </div>
                 <div className="social-item">
             <div className="text">
               <p>YouTube</p>
               <a href="#">@alba_rodellar</a>
             </div>
             <div className="icon">
               <img src={icoyoutube} alt=""/>
             </div>

           </div>
         </div>
         <div className="showreel">
         <a className="btn-primary">
         <div className="button-content-wrap">
        <div className="button-text"><b>My Showreel</b></div>
      </div>
      </a>
         </div>
       </div>
      </div>
  )
};

export default Footer;