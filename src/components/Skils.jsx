import { useEffect,useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleLeft,faAngleRight} from '@fortawesome/free-solid-svg-icons'
import Carousel from '../js/carousel'
import carouselClick from '../js/carouselClick'
import '../css/skills.css'
import Cards from './Cards'

const Skils = () => {
    const windowSize = useRef(5)
    const startIndex = useRef(0)
    const InnerCarousel =useRef(null)

    useEffect(() =>{
        if(window.innerWidth <= '1450' && window.innerWidth > '1000'){
            windowSize.current=4;
        }if(window.innerWidth <='1000'){
            windowSize.current=3;
        }
        InnerCarousel.current = Carousel(windowSize.current,startIndex.current);
        const skills = document.getElementsByClassName('skills-icon');
        for(let i=startIndex.current;i<startIndex.current+windowSize.current;i++){
            skills[i].style.display='unset'
        }
    },[])

  return (
    <section id='skill' className='skill'>
    <h2>Skills</h2>
    <Cards/>
    <div className="skills-icons">
    <button id='carousel-left-btn' onClick={(e)=> carouselClick(e, -1,InnerCarousel)}><FontAwesomeIcon icon={faAngleLeft}  /></button>
        <i className="devicon-javascript-plain skills-icon"></i>
        <i className="devicon-react-original-wordmark skills-icon"></i>
        <i className="devicon-redux-original skills-icon"></i>
        <i className="devicon-nodejs-plain-wordmark skills-icon"></i>
        <i className="devicon-express-original-wordmark skills-icon"></i>
        <i className="devicon-html5-plain-wordmark skills-icon"></i>
        <i className="devicon-css3-plain-wordmark skills-icon"></i>
        <i className="devicon-postgresql-plain-wordmark skills-icon"></i>
        <i className="devicon-microsoftsqlserver-plain-wordmark skills-icon"></i>
        <i className="devicon-mongodb-plain-wordmark skills-icon"></i>
        <i className="devicon-docker-plain-wordmark skills-icon"></i>
        <i className="devicon-kubernetes-plain-wordmark skills-icon"></i>
        <i className="devicon-git-plain-wordmark skills-icon"></i>
        <i className="devicon-github-original-wordmark skills-icon"></i>
        <i className="devicon-webpack-plain skills-icon"></i>
        <i className="devicon-azure-plain-wordmark skills-icon"></i>
        <button id='carousel-right-btn' onClick={(e)=> carouselClick(e,1,InnerCarousel)}><FontAwesomeIcon icon={faAngleRight} /></button>
    </div>
    </section>
  )
}

export default Skils