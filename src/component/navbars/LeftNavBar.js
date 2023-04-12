import React from "react";
import { navs } from "./models";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function LeftNavBar() {
  return (
    <div className="border-solid border-r-2 border-blue-[#C4CCD4] h-[100%] bg-white w-[200px] fixed z-20 left-[0]">
      <div className="flex items-center mt-3 ml-11 gap-2 cursor-pointer">
        <h5 className="mt-[8px] font-semibold">MyTube</h5>
      </div>
      <div className="mt-3 overflow-y-scroll max-h-[80%] ">
        {navs.map((nav) => (
          <>
            <div>
              <h5 className="px-4 text-lg text-[#A0ADBA]">{nav.title}</h5>
              <div className="nav-links">
                {nav.navs.map(({ icon, title, link }) => (
                  <NavLink
                    to={link}
                    className="px-4 py-2 flex gap-2 border-5 border-solid border-r-white hover:border-r-[#26567E] border-t-white border-l-white border-b-white hover:bg-[#D0D6DD] cursor-pointer"
                  >
                    {icon}
                    <span>{title}</span>
                  </NavLink>
                ))}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
