import React from "react";
import "./button.css";

interface IButtonProps {
  value: string;
  classname?: string;
}

export function Button({ value, classname }: IButtonProps) {
  return (
    <button
      className={`
        bg-[#C91DF4] py-[19px] px-[36px] text-white
        font-semibold text-[20px] leading-[23px] text-center
        outline-0 transition-all hover:bg-[#8c12aa] focus:bg-[#6d1184] ${
          classname ? classname : ""
        }`}
    >
      {value}
    </button>
  );
}
