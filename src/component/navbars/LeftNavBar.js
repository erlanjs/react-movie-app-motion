import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import { navs } from "./models";

export default function LeftNavBar() {
  return (
    <div className="border-solid border-r-2 border-blue-[#C4CCD4] h-[100%] w-[200px] fixed left-[0]">
      <div className="flex items-center mt-3 ml-11 gap-2 cursor-pointer">
        <MDBIcon far icon="video" className="text-xl" />
        <h5 className="mt-[8px] font-semibold">MOVIE</h5>
      </div>
      <div className="mt-3 overflow-y-scroll max-h-[80%] ">
        {navs.map((nav) => (
          <>
            <div>
              <h5 className="px-4 text-lg text-[#A0ADBA]">{nav.title}</h5>
              <div>
                {nav.navs.map(({ icon, title }) => (
                  <div className="px-4 py-2 flex gap-2 border-5 border-solid border-r-white hover:border-r-[#D93095] border-t-white border-l-white border-b-white hover:bg-[#D0D6DD] cursor-pointer">
                    {icon}
                    <span>{title}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
