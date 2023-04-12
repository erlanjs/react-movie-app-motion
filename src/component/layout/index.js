import React from "react";
import LeftNavBar from "../navbars/LeftNavBar";
import RightNavBar from "../navbars/RightNavBar";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <LeftNavBar />
      <div className="ml-[200px] mr-[250px] flex w-full h-full">{children}</div>
      <RightNavBar />
    </div>
  );
}
