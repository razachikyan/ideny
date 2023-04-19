import React from "react";
import { Logo } from "../Logo/Logo";
import { nanoid } from "nanoid";

const sideList = [
  "Personal Page",
  "Domains",
  "Web3 Name",
  "Following",
  "Messager",
];

export function SideBar() {
  return (
    <div
      className={`
        fixed left-0 top-0 w-[250px] bottom-0 border
        border-[hsl(0, 0%, 100%)] border-l-[inherit]
        border-bottom-[inherit] py-[56px] px-0 flex
        flex-col gap-[177px] z-[10000] bg-black`}
    >
      <Logo />
      <ul className="sidebar__list">
        {sideList.map((item) => {
          return (
            <li key={nanoid()}>
              <button
                className={`
                relative py-[25px] pr-[70px] pl-[55px]
                font-medium text-[18px] leading-[21px]
                border border-solid border-[#222] w-[100%]
                outline-0 transition-all hover:bg-[#111]
                focus:bg-[#222]`}
              >
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
