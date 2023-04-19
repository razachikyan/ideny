import React from "react";
import block from "../../assets/images/block.png";
import { Arrow } from "../icons/Arrow";

export function General() {
  return (
    <div
      className={`
        flex justify-between w-[100%] pr-[32px] pl-[38px]`}
    >
      <img src={block} alt="icon" />
      <div className={`flex flex-col gap-[17px]`}>
        <h2 className={`uppercase leading-[47px] text-[40px] font-bold`}>
          .bnb Name Service
        </h2>
        <div>
          <div className={`border border-[#222] border-solid`}>
            <img src="" alt="" />
            <span>.eth</span>
            <Arrow />
          </div>
          <div className={`border border-[#222] border-solid`}>
            <img src="" alt="" />
            <span>.arb</span>
            <Arrow />
          </div>
        </div>
      </div>
    </div>
  );
}
