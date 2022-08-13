
import { useRef } from 'react'
import img1 from '../img/EditorWeb.webp'
import img2 from '../img/NewGen.webp'
import img3 from '../img/ProtfolioWeb.webp'
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
      <h2>My Personal Projects</h2>
    <Project img={img1} icon={icon1} shade={shade1}/>
    <Project img={img2} icon={icon2} shade={shade2}/>
    <Project img={img3} icon={icon3} shade={shade3}/>
  </section>
  )
}

export default Projects