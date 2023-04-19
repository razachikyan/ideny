import React from "react";
import "./main.css";
import { Table } from "../Table/Table";
import { General } from "../General/General";

export function Main() {
  return (
    <main className="max-w-[1670px] ml-[auto]">
      <div
        className={`my-0 mx-[auto] pt-[253px] pb-[34px]
      flex flex-col items-center`}
      >
        <General />
      </div>
    </main>
  );
}
