import React from 'react';
import './Navbar.css';
import {FaAlignJustify} from 'react-icons/fa';
import Navpart from './Navpart';
class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Link:fun(){
                if(document.getElementById("navLink2").className==="navLinkSpanSmall"){
                    return "navLinkSpanSmallToggle";
                }
                else if(document.getElementById("navLink2").className==="navLinkSpanSmallToggle"){
                    return "navLinkSpanSmall";
                }
                else{
                    return "navLinkSpan";
                }
            }
        };
    }
    
    componentDidMount() {
        let x=window.innerWidth;
        if(x<=768){
            this.setState({
                Link:"navLinkSpanSmall"
            });
        }
        else{
            this.setState({
                Link:"navLinkSpan"
            });
        }
    }
    
    render(){
        
            return (
            <nav className="nav">
                <Navpart class={this.state.Link} id="navLink1" href="#" text="About Me" />
                <Navpart id="navLink2" href="#" text="My Skills" />
                <Navpart id="navLink3" href="#" text="My Experience" />
                <Navpart id="navLink4" href="#" text="My Projecs" />
                <button id="navIcon" onClick={this.state.fun}><FaAlignJustify color='grey' size='20px' /></button>
            </nav>
        );
    }
}

export default Navbar;