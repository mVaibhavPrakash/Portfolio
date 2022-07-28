import { useState } from 'react';
import click from '../js/click';
import '../css/navbar.css'
import Image from '../img/vaibhav.png'



const Navbar = () => {
    const [toggle,setToggle] = useState('');

    return (
        <nav className='lpage-nav'>
            <div className="lpage-logo lpage-navbarLeft">
                <img id="lpage-navbarCompanyLogo" src={Image} alt='Img'/>
            </div>
            <div className={`lpage-navbarRight${toggle}`}>
                <a href='#intro' className='lpage-a' id="lpage-home" >Home</a>
                <a href='#about' className='lpage-a' id="lpage-about">About</a>
                <a href='#experience' className='lpage-a' id="lpage-login">Experience</a> 
            </div>
            <div className="lpage-navbarButton"  onClick={e=>{click(e,toggle,setToggle)}}>
                <span id='lpage-span1'></span>
                <span id='lpage-span2'></span>
                <span id='lpage-span3'></span>
            </div>
        </nav>
    )
}

export default Navbar;
