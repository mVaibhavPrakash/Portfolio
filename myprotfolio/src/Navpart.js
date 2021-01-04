import React from 'react';
import {FaWalking,FaTools,FaBook,FaUserTie} from "react-icons/fa";


function Navpart(props){
    return (
        <span className="navLinkSpan" id={props.id}>
            {props.id==='navLink1'?<FaUserTie color='grey' size='20px' />:props.id==='navLink2'?<FaTools color='grey' size='20px' />:props.id==='navLink3'?<FaWalking color='grey' size='20px' />:<FaBook color='grey' size='20px' />}
            <a className="navLink" href={props.href}>{props.text}</a>
        </span>
    );
}


export default Navpart;