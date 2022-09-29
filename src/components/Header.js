import React from "react";
import logo from "../images/Azuki Logo White.svg";
import { menus } from "../arrays/menus";

function Header() {
  return (
    <div className="w-full flex justify-center">
      <div className=" fixed flex justify-between min-h-[80px] items-center w-[98%] mx-auto z-10  ">
        <div className="p-2 bg-red-500 rounded-md">
          <img className="w-16 " src={logo} alt="" />
        </div>
        <ul className="flex gap-5 items-center">
          {menus.map((menu) => (
            <li className=" font-semibold text-sm px-3 h-7 text-center rounded-md flex items-center cursor-pointer bg-gray-300 bg-opacity-40 hover:bg-opacity-80">
              {menu.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
