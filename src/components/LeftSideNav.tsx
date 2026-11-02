import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin,faMedium,faQuora,faTwitter } from '@fortawesome/free-brands-svg-icons'

import '../css/sidenav.css'

const LeftSideNav = () => {
  return (
    <div id='leftSideNav' className='sidenav'>
      <a target="_blank" href="https://github.com/mVaibhavPrakash"><FontAwesomeIcon className='icon' icon={faGithub}/></a>
      <a target="_blank" href="https://www.linkedin.com/in/mvaibhavprakash/"><FontAwesomeIcon className='icon' icon={faLinkedin}/></a>
      <a target="_blank" href="https://x.com/mVaibhavPrakash"><FontAwesomeIcon className='icon' icon={faTwitter}/></a>
      <a target="_blank" href="https://medium.com/@imvaibhavprakash"><FontAwesomeIcon className='icon' icon={faMedium}/></a>
    </div>
  )
}

export default LeftSideNav
