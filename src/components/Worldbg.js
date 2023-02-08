import React from "react";
// import worldbg from "../images/world1.mp4";
import horsebg from "../images/horsebg.png";

function Worldbg() {
  return (
    <div className="relative">
      {/* <video loop autoPlay muted className="w-full h-screen object-cover">
        <source src={worldbg} type="video/mp4" />
      </video> */}

      <img src={horsebg} className="w-full h-screen object-cover" alt="" />
    </div>
  );
}

export default Worldbg;
