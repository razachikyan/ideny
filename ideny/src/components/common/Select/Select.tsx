import React, { useState } from "react";
import "./select.css";
import { nanoid } from "nanoid";

export function Select() {
    const [isOpen, setOpen] = useState(false);
    const [selected, setSelected] = useState("24H");
    const [options, setOptions] = useState(['70', "30D", "ALL"]);
    return (
        <div className="select">
            <div className="select__first" onClick={() => {
                setOpen(prev => !prev);          
            }}>
                {selected}
            </div>
            {isOpen && 
                <ul className="select__options">
                    {options.map(option => 
                        <li onClick={(ev) => {
                            setOptions(options.map(op => {
                                if(op === ev.currentTarget.textContent) {
                                    op = selected;
                                }
                                return op;
                            }))
                            setSelected(String(ev.currentTarget.textContent));
                            }
                        } className="option__item" key={nanoid()}>{option}</li>
                    )}
                </ul>
            }
        </div>
    )
}