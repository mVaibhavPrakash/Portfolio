import React from 'react';
import './Navbar.css';
import Navpart from './Navpart';

function Navbar() {
    return (
        <nav className="nav">
            <Navpart id="navLink1" href="#" text="About Me" />
            <Navpart id="navLink2" href="#" text="My Skills" />
            <Navpart id="navLink3" href="#" text="My Experience" />
            <Navpart id="navLink4" href="#" text="My Projecs" />
        </nav>
    );
}

export default Navbar;