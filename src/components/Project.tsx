import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import '../css/project.css'
import type { RefObject } from 'react';

interface ProjectProps {
  img: string;
  shade: RefObject<HTMLDivElement | null>;
  icon: RefObject<HTMLDivElement | null>;
  clas: string;
}

const Project = ({img,shade,icon,clas}: ProjectProps) => {
  return (
      <div className='project-box'>
        <img className='project-img' src={img} alt="imgi" loading='lazy'/>
        <div ref={icon} className='icons' onMouseEnter={(e) =>{if (shade.current && icon.current) { shade.current.style.display='none';icon.current.style.display='flex'; }}} onMouseLeave={(e) =>{if (shade.current && icon.current) { shade.current.style.display='block';icon.current.style.display='none'; }}}>
          <a href='https://github.com/mvaibhavprakash/' target='__blank' className={`iconn ${clas}`} ><FontAwesomeIcon icon={faUpRightFromSquare}/></a>
          <a href='https://github.com/mvaibhavprakash/' target='__blank' className={`iconn ${clas}`} ><FontAwesomeIcon icon={faGithub}/></a>
        </div>
      <div ref={shade} className="shade" onMouseEnter={(e) =>{if (shade.current && icon.current) { shade.current.style.display='none';icon.current.style.display='flex'; }}} onMouseLeave={(e) =>{if (shade.current && icon.current) { shade.current.style.display='block';icon.current.style.display='none'; }}}></div>
      </div>
  )
}

export default Project

