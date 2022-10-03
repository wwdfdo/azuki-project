import React from "react";
import { HiCollection } from "react-icons/hi";
import { TiArrowRepeat } from "react-icons/ti";
import { BsArrowRightShort } from "react-icons/bs";
import Gvideo from "../images/tbagus.mp4";
import { nfts } from "../../src/arrays/products";
import { GoSearch } from "react-icons/go";
import QsectionAccordion from "./QsectionAccordion";

function Gallery() {
  return (
    <div className="flex w-[98%] mx-auto justify-between pt-[5rem]">
      <section className="flex flex-col gap-8 mt-4">
        <h2 className="text-2xl font-bold pb-8 border-b-2 border-gray-300">
          FILTER
        </h2>
        <div className="text-yellow-500 font-bold text-xl border-b-2 border-gray-300 pb-2">
          GOLDEN MODE
        </div>

        <form className="flex items-center border-b-2 border-b-gray-200 pb-2">
          <button></button>
          <GoSearch size={24} />
          <input
            className=" pl-2 outline-none rounded-lg text-lg"
            type="search"
            id="site-search"
            name="q"
            placeholder="Search by serial..."
          />
        </form>
        <div>
          <QsectionAccordion />
        </div>
      </section>
      <section className="flex  flex-col w-[70%]">
        <div className="flex justify-between items-center border-b-2 border-gray-300 pb-8">
          <div className="flex bg-gray-300 p-2 gap-2 rounded-lg text-lg font-bold">
            <button className=" bg-gray-400 w-20 p-1 rounded-lg focus:bg-slate-200">
              AZUKI
            </button>
            <button className=" bg-gray-400 w-20 p-1 rounded-lg focus:bg-slate-200">
              BEANZ
            </button>
          </div>
          <div className="flex gap-5 items-center">
            <p className="text-4xl text-gray-400 flex items-center">1000</p>
            <div className="flex gap-4 items-center">
              <button className="bg-gray-400 flex items-center p-2 rounded-lg text-sm gap-2 font-semibold">
                {" "}
                <span>
                  <HiCollection />
                </span>{" "}
                MY COLLECTION
              </button>
              <button className="bg-gray-400 flex items-center p-2 rounded-lg">
                <TiArrowRepeat size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="flex bg-[#282733] w-full rounded-lg mt-10">
          <video
            loop="true"
            autoplay="autoplay"
            muted
            className="w-[180px]  rounded-bl-md rounded-tl-md"
          >
            <source src={Gvideo} type="video/mp4" />
          </video>

          <div className=" py-2  px-12 flex flex-col justify-center gap-2">
            <h2 className="text-4xl font-extrabold text-white">
              FIND YOUR SIDEKICK
            </h2>
            <p className="text-white font-semibold">
              You can now pair your BEANZ to your Azukis. Head over to your
              Collection, click on any Azuki, and then Pair BEANZ. Note: pairing
              does not update your metadata or change either NFT.
            </p>
            <button className="flex items-center bg-white rounded-md p-1 text-xs font-bold mt-4 w-24">
              PAIR NOW{" "}
              <span>
                <BsArrowRightShort size={24} />
              </span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-4 mt-5">
          {nfts.map((nft) => (
            <div>
              <img className=" rounded-md" src={nft.name} alt="" />
              <div className="flex flex-col items-center mt-2 text-gray-500">
                <p className="text-sm font-bold">{nft.title}</p>
                <p className="text-sm font-bold">{nft.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Gallery;
