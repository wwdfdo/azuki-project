import React from "react";
import girl from "../images/cartoon-girl.webp";
import "./RoadmapTwo.css";

function RoadmapTwo() {
  return (
    <div className="w-[95%] mx-auto pt-[5rem] ">
      <div className="grid gap-3 py-10">
        <div className=" grid grid-cols-[35%_15%_28%_20%] grid-rows-[300px] gap-3">
          <div className=" bg-black rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl rounded-br-2xl relative item2 text-white overflow-hidden border-4 border-red-700 border-opacity-0 hover:border-opacity-100 animation2">
            <div className=" text-8xl font-extrabold  number2 absolute left-10 animation2">
              01
            </div>
            <div className="flex items-center text-2xl font-semibold absolute top-[7rem] left-4 animation2 survivor-title2  ">
              <span className="animation flex items-center font-extrabold animation survivor-arrow2 opacity-0  ">
                &#62;
              </span>
              Survivors
            </div>
            <div className="absolute w-3/4 survivor-girl-two animation2 -bottom-32 right-0">
              <img src={girl} alt="" />
            </div>
          </div>
          <div className=" bg-blue-500 rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl rounded-br-2xl ">
            test
          </div>
          <div className=" bg-red-500 rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl rounded-br-2xl">
            test
          </div>
          <div className=" bg-green-500 rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl rounded-br-2xl">
            test
          </div>
        </div>
        <div className=" grid grid-cols-[28%_45%_15%_10%] grid-rows-[400px] gap-2">
          <div className=" bg-black rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl rounded-br-2xl">
            test
          </div>
          <div className=" bg-blue-500 rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl rounded-br-2xl">
            test
          </div>
          <div className=" bg-red-500 rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl rounded-br-2xl">
            test
          </div>
          <div className=" bg-green-500 rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl rounded-br-2xl">
            test
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadmapTwo;
