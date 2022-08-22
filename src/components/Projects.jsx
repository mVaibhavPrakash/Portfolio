
import { useRef } from 'react'
import img2 from '../img/editor.webp'
import img1 from '../img/newgen.webp'
import img3 from '../img/protfolio.webp'
import Project from './Project'
import '../css/projects.css'

const Projects = () => {
  const shade1= useRef(null)
  const icon1 = useRef(null)
  const shade2= useRef(null)
  const icon2 = useRef(null)
  const shade3= useRef(null)
  const icon3 = useRef(null)
  return ( 
  <section id='projects' className='projects'>
      <h2>Projects</h2>

    <div id='one'>
      <Project img={img1} icon={icon1} shade={shade1} clas='oneIco'/>
      <div className='project'>
          <p className='project-title'>
            <a href="http://github.com/mvaibhavprakash/" target="_blank" rel="noopener noreferrer">NewGen</a>
          </p>
          <p className='project-desc'>A Blogging Website.Based on <span>Microservice Architecture</span>. User can <span>Signup, login, create-update profile</span>. User can ceate blog using a very modern <span>Markdown Editor( Neu Editor)</span>. User Authorized using <span>JWT</span>.</p>
          <p className='project-tech'>
          <span>React</span>
          <span>Microservices</span>
          <span>React Markdown</span>
          <span>Redux</span>
          <span>Ngnix</span>
          <span>Hooks</span>
          <span>JWT</span>
          </p>
      </div>
    </div>

    <div id='two'>
      <Project img={img2} icon={icon2} shade={shade2} clas='twoIco'/>
      <div className='project'>
          <p className='project-title'>
            <a href="http://github.com/mvaibhavprakash/" target="_blank" rel="noopener noreferrer">Neu Editor</a>
          </p>
          <p className='project-desc'>A <span>Markdown Editor</span>, with features like <span>live preview, draft saving, resive option</span> etc.</p>
          <p className='project-tech'>
          <span>React</span>
          <span>React Markdown</span>
          <span>CSS</span>
          <span>Hooks</span>
          <span>Debounce</span>
          </p>
      </div>
    </div>

    <div id='three'>
      <Project img={img3} icon={icon3} shade={shade3} clas='threeIco'/>
      <div className='project'>
          <p className='project-title'>
            <a href="http://github.com/mvaibhavprakash/" target="_blank" rel="noopener noreferrer">NewGen</a>
          </p>
          <p className='project-desc'>My Protfolio Website</p>
          <p className='project-tech'>
            <span>React</span>
            <span>CSS</span>
          </p>
      </div>
    </div>
  </section>
  )
}

export default Projects