
import '../css/intro.css'
import { useEffect } from 'react';
import animateHeading from '../js/fancy';

const Intro = () => {
  useEffect(animateHeading, []);
  return (
    <section id='intro' className='intro'>
        <h1 className='deco'>Hi,<br/>I'm Vaibhav<br/>Web Craftsman</h1>
        <p id='intro-p' className='intro-p'>I’m a Senior Software Engineer specializing in building highly performant and scalable mission critical applications. Currently, 
        I’m working as a Senior Software Engineer at <span>Cimpress</span></p>
        <button id='intro-blogs'>Blogs</button>
    </section>
  )
}

export default Intro
