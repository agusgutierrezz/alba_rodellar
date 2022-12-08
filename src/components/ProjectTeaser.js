import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const ProjectTeaser = () => {

  return (
    <div
      className="contenedor relative w-screen mt-8 py-4 bg-green-600 text-gray-200 flex overflow-hidden items-center"
      style={{ minHeight: "110px" }}
    >
      {renderMarqueeElements()}
    </div>
  );
};

export default ProjectTeaser;
