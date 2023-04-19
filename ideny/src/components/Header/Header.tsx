import React from "react";
import "./header.css";
import { Search } from "../common/Search/Search";
import { Button } from "../common/Button/Button";
import { SocialList } from "../SocialList/SocialList";
import { Logo } from "../Logo/Logo";

export function Header() {
    return (
        <header className="header">
            <Logo classname="mobile__logo" />
            <Search forHead={true} classname="header__search" placeholder="SEARCH" />
            <SocialList classname="header__social" />
            <Button value={"Connect Wallet"} classname="header__button"/>
        </header>
    )
}