import React from "react";
// import worldbg from "../images/world1.mp4";
import horsebg from "../images/horsebg.png";

function Worldbg() {
  return (
    <div className="relative bg-horse-bg w-full h-screen bg-cover">
      {/* <video loop autoPlay muted className="w-full h-screen object-cover">
        <source src={worldbg} type="video/mp4" />
      </video> */}

      <div className="  w-[1/3] mx-auto pl-[20%] flex    pt-40 xl-pt-48  ">
        <div className="  flex flex-col gap-5 justify-start ">
          <h2 className="text-[4.5rem] xl-text-[5.2rem]  ">
            Embark on a Journey with <br /> Abigail Marston in <br />
            The Outlaw's Last Ride
          </h2>
          <h2 className="text-xl ">
            Discover the Untold Story of the Wild West as You Track Down <br />
            Your Former Gang and Make a Final Stand
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Worldbg;
