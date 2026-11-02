import {FaWalking,FaTools,FaBook,FaUserTie} from "react-icons/fa";


interface NavpartProps {
    ico: 'FaUserTie' | 'FaTools' | 'FaWalking' | 'FaBook';
    href: string;
    text: string;
}

const Navpart = (props: NavpartProps) =>{
    return (
        <span className="link-li">
            {props.ico==='FaUserTie' ?<FaUserTie className="icon"  />:props.ico==='FaTools'?<FaTools className="icon" />:props.ico==='FaWalking'?<FaWalking className="icon"  />:<FaBook className="icon" />}
            <a className="navLink" href={props.href}>{props.text}</a>
        </span>
    );
}


export default Navpart;
