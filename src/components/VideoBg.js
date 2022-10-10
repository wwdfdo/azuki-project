import React from "react";
import Branz from "../images/beanz2.mp4";
import Rock from "../images/rock.png";
import { MdKeyboardArrowRight } from "react-icons/md";

function VideoBg() {
  return (
    <div className="relative">
      <video loop autoPlay muted className="w-full h-screen object-cover">
        <source src={Branz} type="video/mp4" />
      </video>
      <div className="flex absolute w-1/2 bg-red-800 h-24 z-20 bottom-4 right-5 items-center justify-between rounded-md shadow-lg">
        <img src={Rock} className="w-20 absolute left-2 bottom-1" alt="" />
        <div className="relative ml-28 text-white font-semibold">
          <p>THE WORD OF</p>
          <h2>AZUKI //</h2>
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
