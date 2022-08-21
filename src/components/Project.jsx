import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import '../css/project.css'

const Project = ({img,shade,icon}) => {
  return (
      <div className='project-box'>
        <img className='project-img' src={img} alt="imgi" loading='lazy'/>
        <div ref={icon} className='icons' onMouseEnter={(e) =>{shade.current.style.display='none';icon.current.style.display='flex'}} onMouseLeave={(e) =>{shade.current.style.display='block';icon.current.style.display='none'}}>
          <a href='https://github.com/mvaibhavprakash/' target='__blank' className='iconn' ><FontAwesomeIcon icon={faUpRightFromSquare}/></a>
          <a href='https://github.com/mvaibhavprakash/' target='__blank' className='iconn' ><FontAwesomeIcon icon={faGithub}/></a>
        </div>
      <div ref={shade} className="shade" onMouseEnter={(e) =>{shade.current.style.display='none';icon.current.style.display='flex'}} onMouseLeave={(e) =>{shade.current.style.display='block';icon.current.style.display='none'}}></div>
      </div>
  )
}

export default Project