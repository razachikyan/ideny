import React from "react";
import "./sociallist.css";
import { Telegram } from "../icons/Telegram";
import { Discord } from "../icons/Discord";
import { Twitter } from "../icons/Twitter";

interface ISocialListProps {
  classname?: string;
}

export function SocialList({ classname }: ISocialListProps) {
  return (
    <ul
      className={`h-[100%] flex gap-[20px] items-center ${
        classname ? classname : ""
      }`}
    >
      <li>
        <button className="outline-0">
          <Telegram />
        </button>
      </li>
      <li>
        <button className="outline-0">
          <Discord />
        </button>
      </li>
      <li>
        <button className="outline-0">
          <Twitter />
        </button>
      </li>
    </ul>
  );
}
