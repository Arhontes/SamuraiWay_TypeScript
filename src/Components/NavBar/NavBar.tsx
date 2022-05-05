import React from 'react';
import {NavLink} from 'react-router-dom';
import n from './NavBar.module.css'


const NavBar = () => {
    return (
        <nav className={n.nav_bar}>
            <div><NavLink className={navData => navData.isActive ? n.active : n.item} to="/profile">Profile</NavLink></div>
            <div><NavLink className={navData => navData.isActive ? n.active : n.item} to="/dialogs">Dialogs</NavLink></div>
            <div><NavLink className={navData => navData.isActive ? n.active : n.item} to="news">News</NavLink></div>
            <div><NavLink className={navData => navData.isActive ? n.active : n.item} to="music">Music</NavLink></div>
            <div><NavLink className={navData => navData.isActive ? n.active : n.item} to="settings">Settings</NavLink></div>

        </nav>
    );
};

export default NavBar;