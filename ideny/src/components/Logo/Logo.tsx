import React from "react";
// import "./logo.css";

interface ILogoProps {
  classname?: string;
}

export function Logo({ classname }: ILogoProps) {
  return (
    <div
      className={`w-[117px] h-[81.5px] ml-[60px] ${classname ? classname : ""}`}
    >
      <h1 className="font-bold text-[47.0452px] leading-[55px]">IDENY</h1>
    </div>
  );
}
