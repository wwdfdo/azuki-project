import React from "react";
import Branz from "../images/beanz2.mp4";
import Rock from "../images/rock.png";
import Cowgirl from "../images/maincowgirl.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./VideoBg.css";

function VideoBg() {
  return (
    <div className="relative  w-full h-screen azuki-home-bg">
      {/* <video loop autoPlay muted className="w-full h-screen object-cover">
        <source src={Branz} type="video/mp4" />
      </video> */}
      <img
        className="w-[560px] absolute top-[10%] right-[13%] "
        src={Cowgirl}
        alt=""
      />
      <div className="flex absolute w-1/2 bg-red-800 h-24 z-20 bottom-4 right-5 items-center justify-between rounded-md shadow-lg">
        <img src={Rock} className="w-20 absolute left-2 bottom-1" alt="" />
        <div className="relative ml-28 text-white font-semibold">
          <p>THE WORD OF</p>
          <h2 className=" uppercase">The Outlaw's Last Ride //</h2>
        </div>
        <button className="bg-white mr-10 px-6 py-2 flex items-center font-bold ">
          DISCOVER{" "}
          <span>
            <MdKeyboardArrowRight size={24} />
          </span>
        </button>
      </div>
    </div>
  );
}

export default VideoBg;
