import React, { forwardRef, useRef, useEffect, useState } from "react";
import { workData } from "../data";
import {useParams} from "react-router-dom"

const WorkDetail = () => {

 let { workId } = useParams()
 var thisWork = workData.find(work=>work.id === Number(workId))

const [hasImages,setHasImages] = useState(thisWork.assets.length > 1 ? true : false);
const [hasVideo,setHasVideo] = useState(thisWork.video ? true : false);




 const listItems = thisWork.services.map((number,key) =>
    <li className="category-tag" key={key}>{number}</li>
  );




 

  return (
    <div className="b-work-detail">
      <div className="header-img">
        <img src={thisWork.image_header} alt="" />
      </div>
      <div className="info-wrapper container">
        <div className="col-left">
           <h1>{thisWork.name}</h1>
           <p>{thisWork.description}</p>
        </div>
        <div className="col-right">
          <div className="row">
            <span>Client</span>
            <p>{thisWork.company}</p>
          </div>
          <div className="row">
            <span>Services</span>
            <ul className="categories">{listItems}</ul>
          </div>
          <div className="row">
            <span>Link</span>
            <a href={thisWork.link.url}>
              <p>{thisWork.link.text}</p>
            </a>
          </div>
          </div>
      </div>
      <div className="bottom container">
      { hasVideo &&
       <video src={require("./../assets/" + thisWork.video) } loop muted autoPlay>
        Tu navegador no admite el elemento <code>video</code>.
      </video>
     }
      { hasImages &&
       thisWork.assets.map((url,key) =>
        <img key={key} src={require("./../assets/" + url) }  />
        ) 
     }
      </div>
    </div>
  );
};


export default WorkDetail;