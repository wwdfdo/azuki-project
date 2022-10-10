import React from "react";
// import "./Modal.css";
import { GrUserManager } from "react-icons/gr";
import { BiFace } from "react-icons/bi";
import { GiLoincloth } from "react-icons/gi";
import { CgSmileMouthOpen } from "react-icons/cg";
import { AiFillEye } from "react-icons/ai";
import { GiBackgammon } from "react-icons/gi";
import { IoIosHand } from "react-icons/io";

function Modal(props) {
  const { bgcolor, modalImg, modalSrialNo, modalobj } = props;

  return (
    <div className="flex justify-center items-center relative">
      <div
        className={` w-4/5 ${bgcolor} flex justify-between items-center fixed top-[20%] z-50 rounded-xl gap-20 p-10`}
      >
        <img src={modalImg} className="w-1/3 ml-10" alt="" />
        <div className="w-2/3 flex flex-col gap-5">
          <div className="w-full  flex items-center bg-black bg-opacity-10 py-2 px-3 gap-3 rounded-xl text-white font-semibold">
            <span className=" text-4xl opacity-30">#</span>
            <div className=" flex flex-col">
              <span className="text-sm opacity-30">AZUKI</span>
              <span className="text-xl font-bold">
                {modalSrialNo} <span className=" opacity-30">//</span>
              </span>
            </div>
          </div>
          <div className=" grid grid-cols-2 grid-rows-4 gap-4 text-[0.725rem] font-bold text-black">
            <div className=" bg-white bg-opacity-10 rounded-lg p-2 flex items-center gap-2">
              <div>
                <GrUserManager size={24} />
              </div>
              <div className="flex flex-col">
                <span className="opacity-30">TYPE:</span>
                <span>{modalobj.type}</span>
              </div>
            </div>
            <div className=" bg-white bg-opacity-10 rounded-lg p-2 flex items-center gap-2">
              <div>
                <GiLoincloth size={24} />
              </div>
              <div className="flex flex-col">
                <span className="opacity-30">CLOTHING:</span>
                <span>{modalobj.clothing}</span>
              </div>
            </div>
            <div className=" bg-white bg-opacity-10 rounded-lg p-2 flex items-center gap-2">
              <div>
                <BiFace size={24} />
              </div>
              <div className="flex flex-col">
                <span className="opacity-30">HAIR:</span>
                <span>{modalobj.hair}</span>
              </div>
            </div>
            <div className=" bg-white bg-opacity-10 rounded-lg p-2 flex items-center gap-2">
              <div>
                <AiFillEye size={24} />
              </div>
              <div className="flex flex-col">
                <span className="opacity-30">EYES:</span>
                <span>{modalobj.eyes}</span>
              </div>
            </div>
            <div className=" bg-white bg-opacity-10 rounded-lg p-2 flex items-center gap-2">
              <div>
                <CgSmileMouthOpen size={24} />
              </div>
              <div className="flex flex-col">
                <span className="opacity-30">MOUTH:</span>
                <span>{modalobj.mouth}</span>
              </div>
            </div>
            <div className=" bg-white bg-opacity-10 rounded-lg p-2 flex items-center gap-2">
              <div>
                <IoIosHand size={24} />
              </div>
              <div className="flex flex-col">
                <span className="opacity-30">OFFHAND:</span>
                <span>{modalobj.offhand}</span>
              </div>
            </div>
            <div className=" bg-white bg-opacity-10 rounded-lg p-2 flex items-center gap-2">
              <div>
                <GiBackgammon size={24} />
              </div>
              <div className="flex flex-col">
                <span className="opacity-30">BACKGROUND:</span>
                <span>{modalobj.background}</span>
              </div>
            </div>
          </div>
          <div className="w-full  flex justify-between items-center bg-black bg-opacity-10 p-2 gap-5 rounded-xl text-white ">
            <div>view on :</div>
            <div className="flex gap-2">
              <div>
                <AiFillEye size={24} />
              </div>
              <div>
                <BiFace size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
