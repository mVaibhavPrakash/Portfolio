import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import Navbar from './Navbar';
import '../css/app.css'
import Intro from './Intro';
import About from './About';
import Experience from './Experience';
import LeftSideNav from './LeftSideNav'
import RightSideNav from './RightSideNav';
import Skils from './Skils';
import img1 from '../img/EditorWeb.png'
import img2 from '../img/NewGen.png'
import img3 from '../img/ProtfolioWeb.png'
import { useRef } from 'react';
import ('../js/observer.js')

function App() {
  const icon1 = useRef(null)
  const icon2 = useRef(null)
  return (
    <div className="App">
      <Navbar />
      <div className='content'>
      <Intro/>
      <About/>
      <Experience/>
      <Skils/>
      <div className='sideBar'>
        <LeftSideNav/>
        <RightSideNav/>
      </div>
      <div className='project-box'>
        <img className='project-img' src={img1}  alt="imgi"/>
        <div className='content'></div>
        <div className="shade"></div>
      </div>
      <div className='project-box'>
        <img className='project-img' src={img2} alt="imgi" />
        <div className='content'></div>
        <div ref={icon2} className='icons'>
          <FontAwesomeIcon className='icon' icon={faLinkedin}/>
          <FontAwesomeIcon className='icon' icon={faGithub}/>
        </div>
        <div className="shade"onMouseEnter={(e) =>{console.log(icon2);icon2.current.style.opacity='1'}} onMouseLeave={(e) =>{icon2.current.style.opacity='0'}}></div>
      </div>
      <div className='project-box'>
        <img className='project-img' src={img3} alt="imgi"/>
        <div className='content'></div>
        <div className="shade"></div> 
      </div>
      </div>
    </div>
  );
}

export default App;
