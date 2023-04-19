import React from "react";

interface ISearchProps {
    handleClick: () => void;
}

export function SearchIcon({handleClick}: ISearchProps) {
    return (
        <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <rect x="16.1211" y="15" width="10.6652" height="3" transform="rotate(45 16.1211 15)" fill="white"/>
            <circle cx="10" cy="10" r="8.5" stroke="white" strokeWidth="3"/>
        </svg>
    )
}