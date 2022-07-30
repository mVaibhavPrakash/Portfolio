import Navbar from './Navbar';
import '../css/app.css'
import Intro from './Intro';
import About from './About';
import Experience from './Experience';
import LeftSideNav from './LeftSideNav'
import RightSideNav from './RightSideNav';
import Skils from './Skils';
import ('../js/observer.js')

function App() {
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
      </div>
    </div>
  );
}

export default App;
