import React from "react";
import "./table.css";
import {nanoid} from "nanoid";
import union from "../../assets/images/union.png";
import group from "../../assets/images/group.png";
import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";
import { Select } from "../common/Select/Select";
import { Arrow } from "../icons/Arrow";

interface ITableProps {
    data: Array<Array<string>>;
    headers: Array<string>
}

export function Table({data, headers}: ITableProps) {
    return (<>
        <table className="table" cellSpacing="0">
            <thead className="table__head">
                <tr className="head__row">
                    {headers.map((title, i) => {
                        title = title.toUpperCase();
                        let td;
                        if(i === headers.length - 1) 
                             td = <th colSpan={2} key={nanoid()} className="head__item">{title}</th>
                        else td = <th key={nanoid()} className="head__item">{title}</th>
                        return td;
                    })}
                    <td><Select /></td>
                </tr>
            </thead>
            <tbody className="table__body">
                {data.map((row, j) => (
                    <tr key={nanoid()} className="table__row">
                        {row.map((cell, i) => {
                            let cellBlock;
                            if(i === row.length-1) return null;
                            if(i === 0) {
                                cellBlock = <>
                                    <img src={([icon1, icon2, icon3])[j]} alt="icon" />
                                    <span className="table__text">{cell}</span>
                                    <Arrow /></>
                            } else if(i === 3) cellBlock =  <>
                                <span className="table__text">{cell}</span>
                                <img className="table__img" src={row[5] === "union" ? union : group} alt="volume" />
                            </>
                              else cellBlock = <span className="table__text">{cell}</span>
                            return (<td key={nanoid()} className="body__item">
                                <div className="body__box">{cellBlock}</div>
                            </td>)
                         })}   
                    </tr>
                ))}
            </tbody>
        </table>
        <table className="mob__table" cellSpacing="0">
            <tbody>
                <tr className="mob__row">
                    {[icon1, icon2, icon3].map((icon, i) => {
                        return (
                            <td key={nanoid()} className="mob__cell">
                                <button className="mob__box">
                                    <img className="mob__img" src={icon} alt="icon"/>
                                    <span className="mob__text">{data.map(row => row[0])[i]}</span>    
                                </button>
                            </td>)
                        })}
                    <td className="mob__cell"><Select /></td>
                </tr>
            </tbody>
        </table>
        </>
    )
}

