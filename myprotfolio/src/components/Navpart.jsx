import {FaWalking,FaTools,FaBook,FaUserTie} from "react-icons/fa";


const Navpart = (props) =>{
    return (
        <span className="link-li">
            {props.ico==='FaUserTie' ?<FaUserTie className="icon"  />:props.ico==='FaTools'?<FaTools className="icon" />:props.ico==='FaWalking'?<FaWalking className="icon"  />:<FaBook className="icon" />}
            <a className="navLink" href={props.href}>{props.text}</a>
        </span>
    );
}


export default Navpart;