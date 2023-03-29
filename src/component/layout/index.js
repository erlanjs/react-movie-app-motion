import React from "react";
import LeftNavBar from "../navbars/LeftNavBar";
import RightNavBar from "../navbars/RightNavBar";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <LeftNavBar />
      <div className="ml-[210px] mr-[310px]">{children}</div>
      <RightNavBar />
    </div>
  );
}
