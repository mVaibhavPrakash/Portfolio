import React from 'react';

import '../css/navbar.css';

const Navbar = () =>{
        
    return (
        <header className='header'>
        <nav className='headerDiv'>
        <div id='navRight'>
            <ol>
            <li  className="navLink">
                <a href="/#about">About</a>
            </li>
            <li className="navLink">
                <a href="/#experience">Experience</a>
            </li>
            <li className="navLink">
                <a href="/#projects">Work</a>
            </li>
            <li className="navLink">
                <a href="/#contact">Contact</a>
            </li>
            </ol>
        </div>
        </nav>
        </header>
    );
}


export default Navbar;