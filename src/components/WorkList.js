import React, { forwardRef, useRef, useEffect, useState } from "react";
import { workData } from "../data";
import { Link } from "react-router-dom";

const WorkList = () => {
  const products = workData.map((data, key) => {
    return (
      <div className="project-teaser" key={key}>
     
          <Link to={`/works/${data.id}`}>
            <div className="teaser-container" >
              <img src={data.image_header} />
              <div className="info">
                <ul className="services">
                 {data.services.map((service, key) => {
                  return (
                    <div key={key}>
                      {service}
                    </div>
                  );
                })}
                </ul>
                <p className="name">{data.name}</p>
              </div>
            </div>
          </Link>
   
      </div>
    );
  });

  return (
    <div className= "c-works-list container">
      
      {products}
    </div>
  );
};


export default WorkList;