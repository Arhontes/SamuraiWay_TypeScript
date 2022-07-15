import React from 'react';
import h from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={h.header} >
            <img src="https://w7.pngwing.com/pngs/803/598/png-transparent-phoenix-logo-phoenix-red-bird-illustration-leaf-photography-mirror.png" alt=""/>
            <div className={h.loginBlock}>
                <NavLink to={"/login"}>Login</NavLink>
            </div>
        </header>
    );
};

export default Header;