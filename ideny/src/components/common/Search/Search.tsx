import React, { useState } from "react";
import "./search.css";
import { SearchIcon } from "../../icons/Search";
import { Burger } from "../../icons/burger";
interface ISearchProps {
  classname: string;
  placeholder?: string;
  forHead: boolean;
}

export function Search({
  classname,
  placeholder = "SEARCH",
  forHead,
}: ISearchProps) {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      <input
        type="text"
        className={`
            bg-[inherit] border border-solid border-white
            py-[18px] px-[29px] outline-0 caret-white
            ::placeholder:font-normal ${classname}`}
        placeholder={placeholder}
      />
      {forHead && (
        <div className="mob__search">
          {isOpened && (
            <input
              type="text"
              className="search mob__input"
              placeholder="SEARCH"
            />
          )}
          <SearchIcon handleClick={() => setIsOpened((prev) => !prev)} />
          <Burger />
        </div>
      )}
    </>
  );
}
