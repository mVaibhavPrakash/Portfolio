import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin,faQuora,faTwitter } from '@fortawesome/free-brands-svg-icons'

import '../css/sidenav.css'

const LeftSideNav = () => {
  return (
    <div id='leftSideNav' className='sidenav'>
      <FontAwesomeIcon className='icon' icon={faGithub}/>
      <FontAwesomeIcon className='icon' icon={faLinkedin}/>
      <FontAwesomeIcon className='icon' icon={faTwitter}/>
      <FontAwesomeIcon className='icon' icon={faQuora}/>
    </div>
  )
}

export default LeftSideNav
