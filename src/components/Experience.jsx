import { useState } from 'react'
import { TCS } from './TCS'
import '../css/experience.css'

const Experience = () => {
  const [state,setState] = useState('tcs')
  return (
    <section id='experience' className='experience'>
        <h2>Exeprience</h2>
        <div className='exp-content'>
          <div className='sidena'>
              <button id='btn-tcs' className='exp-btn' onClick={e =>{e.preventDefault();setState('tcs')}}
              onFocus={(e) =>{e.currentTarget.style.borderLeft='4px solid var(--green)';e.currentTarget.style.color='var(--green)';e.currentTarget.style.backgroundColor='var(--light-navy)'}}>TCS</button>
          </div>
          {
            state ==='tcs' ? <TCS/> :''
          }
        </div>
    </section>
  )
}

export default Experience