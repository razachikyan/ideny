import React from "react";
import "./footer.css";
import { Search } from "../common/Search/Search";
import { Button } from "../common/Button/Button";

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__controls">
                    <div className="controls__message">
                        <Search forHead={false} placeholder="Enter your email" classname={"footer__search"} />
                        <Button classname={"footer__button"} value="GET NEWS" />
                    </div>
                    <Button classname={"android__button"} value="Android" />
                </div>
                <span className="footer__bottom">
                    Ideny © 2023, All Rights Reserved by ideny
                </span>
            </div>
        </footer>
    )
}