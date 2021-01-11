import React from 'react';
import './Navbar.css';
import {FaAlignJustify} from 'react-icons/fa';
import Navpart from './Navpart';
class Navbar extends React.Component{
    constructor(props){
        super(props);
        if(window.innerWidth <=768){
            this.state={link:"navLinkSpanSmall"};
        }
        else{
            this.state={link:"navLinkSpan"};
        }
        this.fun=this.fun.bind(this);
        this.funt=this.funt.bind(this);
    }
    
    fun(){
        if(document.getElementById("navLink2").className==="navLinkSpanSmall"){
            this.setState({link:"navLinkSpanSmallToggle"});
        }
        else if(document.getElementById("navLink2").className==="navLinkSpanSmallToggle"){
            this.setState({link:"navLinkSpanSmall"});
        }
        else{
            this.setState({link:"navLinkSpan"});
        }
    }

    funt(){
        let x=window.innerWidth;
        if(x<=768){
            this.setState({link:"navLinkSpanSmall"});
        }
        else{
            this.setState({link:"navLinkSpan"})
        }
    }

    componentDidMount() {
        window.addEventListener('resize',this.funt);
    }
    componentWillUnmount() {
        window.removeEventListener('resize',this.funt);
    }
    render(){
        
            return (
            <nav className="nav">
                <Navpart class={this.state.link} id="navLink1" href="#" text="About Me" />
                <Navpart class={this.state.link} id="navLink2" href="#" text="My Skills" />
                <Navpart class={this.state.link} id="navLink3" href="#" text="My Experience" />
                <Navpart class={this.state.link} id="navLink4" href="#" text="My Projecs" />
                <span id="navIcon" onClick={this.fun}><FaAlignJustify color='grey' size='30px' /></span>
            </nav>
        );
    }
}

export default Navbar;