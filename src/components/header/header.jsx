import React from "react";
import HeaderLi from "./headerLi";

function Header(){
    return(
        <header className="header">
        <p className="header-p">Soluciones Informáticas</p>
        <h1>Keytecnica</h1>
        <nav className="header-nav">
            <ul className="header-nav-ul">
                <HeaderLi />
            </ul>
        </nav>
    </header>
    );
}

export default Header;