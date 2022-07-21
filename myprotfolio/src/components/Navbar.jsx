import React from 'react';

import '../css/navbar.css';

const Navbar = () =>{
        
    return (
        <header className='header'>
        <nav className='headerDiv'>
        <div id='navRight'>
            <ol>
            <li style={{transitionDelay:'0ms'}} className="navLink">
                <a href="/#about">About</a>
            </li>
            <li style={{transitionDelay:'100ms'}} className="navLink">
                <a href="/#experience">Experience</a>
            </li>
            <li style={{transitionDelay:'200ms'}} className="navLink">
                <a href="/#projects">Work</a>
            </li>
            <li style={{transitionDelay:'300ms'}} className="navLink">
                <a href="/#contact">Contact</a>
            </li>
            </ol>
        </div>
        </nav>
        </header>
    );
}


export default Navbar;