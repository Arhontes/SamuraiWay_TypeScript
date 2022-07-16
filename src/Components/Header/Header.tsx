import React from 'react';
import h from './Header.module.css'
import {NavLink} from "react-router-dom";
type HeaderPropsType = {
    isAuth:boolean
}
const Header = (props:HeaderPropsType) => {
    return (
        <header className={h.header} >
            <img src="https://w7.pngwing.com/pngs/803/598/png-transparent-phoenix-logo-phoenix-red-bird-illustration-leaf-photography-mirror.png" alt=""/>
            <div className={h.loginBlock}>
                {props.isAuth?<NavLink to={"/logout"}>Logout</NavLink>:<NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;