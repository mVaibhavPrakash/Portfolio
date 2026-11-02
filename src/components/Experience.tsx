import { useState } from 'react'
import { TCS } from './TCS'
import '../css/experience.css'
import { Cimpress } from './Cimpress';

const Experience = () => {
  return (
    <section id='experience' className='experience'>
        <h2>Exeprience</h2>
        <div className='exp-content'>
          {
            <div>
              <div className='sidena'></div>
                <Cimpress/>
              <div className='sidena'></div>
                <TCS/>
            </div>
          }
        </div>
    </section>
  )
}

export default Experience