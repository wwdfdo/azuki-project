import React from "react";
import "./Roadmap.css";

function Roadmap() {
  return (
    <div className="w-[95%] mx-auto pt-[5rem]">
      <div className=" flex flex-col">
        <h1 className="text-[8.75rem] font-extrabold">
          ROAD<span className="text-blue-700">MAP*</span>
        </h1>
        <p className="text-[1.3rem] font-semibold ">
          Our vision is to underpromise & overdeliver - after all, this is how
          we succeeded so far.
          <br /> We will be announcing shifts to next phases, when we believe
          it’s the right time to do so.
        </p>
      </div>
      <div className="grid grid-cols-5 mt-12 ">
        <div className="bg-blue-500 w-[302px] h-[480px] survivors relative">
          <svg class="clips">
            <clipPath id="survivors-clip" clipPathUnits="objectBoundingBox">
              <path d="M0,0.042 C0,0.019,0.03,0,0.066,0 H0.934 C0.973,0,1,0.022,1,0.046 L0.839,0.963 C0.836,0.984,0.807,1,0.774,1 H0.066 C0.03,1,0,0.981,0,0.958 V0.042"></path>
            </clipPath>
          </svg>
          <span className="text-4xl font-bold absolute top-0">1</span>
        </div>
        <div className="relative w-[293px]">
          <div className="bg-red-500 item-parishoot w-[314px] h-[283px]">
            <svg class="clips">
              <clipPath id="what-clip" clipPathUnits="objectBoundingBox">
                <path d="M0.089,0.063 C0.092,0.027,0.12,0,0.153,0 H0.887 C0.921,0,0.949,0.029,0.951,0.066 L1,0.819 C1,0.857,0.979,0.891,0.944,0.895 L0.074,1 C0.032,1,-0.002,0.966,0.002,0.921 L0.089,0.063"></path>
              </clipPath>
            </svg>
            <span className="text-6xl top-10 absolute left-10">2</span>
          </div>
          <div className="bottle bg-black w-[353px] h-[215px] absolute -left-[1.2rem] -bottom-[3px]">
            <svg class="clips">
              <clipPath id="atsui-clip" clipPathUnits="objectBoundingBox">
                <path d="M0.048,0.225 C0.051,0.181,0.072,0.147,0.099,0.142 L0.9,0.001 C0.932,-0.005,0.961,0.034,0.963,0.087 L1,0.899 C1,0.954,0.977,1,0.944,1 H0.058 C0.024,1,-0.002,0.952,0.001,0.896 L0.048,0.225"></path>
              </clipPath>
            </svg>
          </div>
        </div>
        <div className="bg-blue-400 w-[277px] h-[480px] relative fourth-card ml-8">
          <svg class="clips">
            <clipPath id="enter-clip" clipPathUnits="objectBoundingBox">
              <path d="M0.002,0.045 C-0.001,0.021,0.033,0,0.075,0 H0.867 C0.906,0,0.939,0.018,0.94,0.04 L1,0.957 C1,0.98,0.97,1,0.929,1 H0.195 C0.157,1,0.125,0.983,0.123,0.961 L0.002,0.045"></path>
            </clipPath>
          </svg>
        </div>
        <div className="bg-blue-400  h-[480px] relative fifth-card ml-8">
          <svg class="clips">
            <clipPath id="summit-clip" clipPathUnits="objectBoundingBox">
              <path d="M0.003,0.043 C0.001,0.02,0.035,0,0.077,0 H0.928 C0.972,0,1,0.021,1,0.046 L0.832,0.963 C0.828,0.984,0.796,1,0.758,1 H0.133 C0.093,1,0.06,0.982,0.059,0.96 L0.003,0.043"></path>
            </clipPath>
          </svg>
        </div>
        <div className="bg-blue-400 w-[283px] h-[480px] relative sixth-card -ml-4">
          <svg class="clips">
            <clipPath id="partner-clip" clipPathUnits="objectBoundingBox">
              <path d="M0.176,0.037 C0.18,0.016,0.21,0,0.246,0 H0.932 C0.971,0,1,0.019,1,0.042 V0.5 V0.958 C1,0.981,0.971,1,0.932,1 H0.074 C0.032,1,-0.001,0.978,0.003,0.954 L0.176,0.037"></path>
            </clipPath>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
