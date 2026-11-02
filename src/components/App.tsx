import Navbar from './Navbar';
import '../css/app.css'
import Intro from './Intro';
import About from './About';
import Experience from './Experience';
import LeftSideNav from './LeftSideNav'
import RightSideNav from './RightSideNav';
import Skills from './Skills';
import Projects from './Projects';
import { useEffect } from 'react';
import observeSections from '../js/observer';

function App() {
  useEffect(observeSections, []);
  return (
    <div className="App">
      <Navbar />
      <div className='content'>
      <Intro/>
      <About/>
      <Experience/>
      <Skills/>
      <Projects/>
      <div className='sideBar'>
        <LeftSideNav/>
        <RightSideNav/>
      </div>
      </div>
    </div>
  );
}

export default App;
