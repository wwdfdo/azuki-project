import React from "react";
// import worldbg from "../images/world1.mp4";
// import horsebg from "../images/horsebg.png";
import { menuButtons } from "../arrays/menuButtons";
import { Link } from "react-router-dom";

function Worldbg() {
  return (
    <div className="relative bg-horse-bg w-full h-screen bg-cover flex  items-center xl-items-center max-w-[3000px]">
      {/* <video loop autoPlay muted className="w-full h-screen object-cover">
        <source src={worldbg} type="video/mp4" />
      </video> */}

      <div className="  w-full flex pl-[20%]     ">
        <div className="  flex flex-col gap-5 justify-start ">
          <h2 className="text-[4.4rem] xl-text-[4.6rem]  ">
            Embark on a Journey with <br /> Abigail Marston in <br />
            The Outlaw's Last Ride
          </h2>
          <h2 className="text-xl ">
            Discover the Untold Story of the Wild West as You Track Down <br />
            Your Former Gang and Make a Final Stand
          </h2>
        </div>
      </div>
      <ul className="flex flex-col gap-5 items-center absolute right-5 bottom-10">
        <div className="h-32 w-[1px] bg-white"></div>
        {menuButtons.map((menuButton) => (
          <Link
            key={menuButton.id}
            to={menuButton.url}
            className="tracking-[.1825rem] font-bold text-[0.8rem] px-3 h-7 text-center rounded-md flex items-center cursor-pointer uppercase "
          >
            <li> {menuButton.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Worldbg;
