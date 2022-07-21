import Navbar from './Navbar';
import '../css/app.css'
import Intro from './Intro';
import About from './About';
import Experience from './Experience';
import ('../js/observer.js')

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='content'>
      <Intro/>
      <About/>
      <Experience/>
      </div>
    </div>
  );
}

export default App;
