import React from "react";
import logo from "../images/outlawlogo.png";
import { menus } from "../arrays/menus";
import { Link } from "react-router-dom";
import { menuButtons } from "../arrays/menuButtons";

function Header() {
  return (
    <div className="w-full flex justify-center">
      <div className=" fixed flex justify-around min-h-[100px] items-center w-[95%]  z-10 ">
        <div className="p-2  rounded-md">
          <Link to="/">
            {" "}
            <img className="w-[60px] " src={logo} alt="" />
            {/* <p className="text-white uppercase font-extrabold text-sm">
              The Outlaw's Last Ride
            </p> */}
          </Link>
        </div>
        <ul className="flex gap-5 items-center">
          {menus.map((menu) => (
            <Link
              to={menu.url}
              className="focus:underline focus:bg-opacity-80 hover:bg-opacity-80   bg-opacity-40  tracking-[.1825rem] font-bold text-[0.8rem] px-3 h-7 text-center rounded-md flex items-center cursor-pointer uppercase "
            >
              <li> {menu.name}</li>
            </Link>
          ))}
        </ul>

        <ul className="flex gap-5 items-center">
          {menuButtons.map((menuButton) => (
            <Link
              to={menuButton.url}
              className="focus:underline focus:bg-opacity-80 hover:bg-opacity-80   bg-opacity-40  tracking-[.1825rem] font-bold text-[0.8rem] px-3 h-7 text-center rounded-md flex items-center cursor-pointer uppercase "
            >
              <li> {menuButton.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
