import React from 'react';
import n from './NavBar.module.css'


const NavBar = () => {
    return (
        <nav className={n.navBar}>
          <div className={`${n.item} ${n.active}`}><a href="/profile">Profile</a></div>
          <div><a href="/dialogs">Dialogs</a></div>
          <div><a href="">News</a></div>
          <div><a href="">Music</a></div>

        </nav>
    );
};

export default NavBar;