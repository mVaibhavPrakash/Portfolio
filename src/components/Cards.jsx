import '../css/cards.css'

const Cards = () => {
  return (
    <div className='skills-cards'> 
        <div className='skills-card'>
            <p className='skills-card-h3'>Software Engineering</p>
            <p className='skills-card-p'>Experienced in both <span>Developing and Maintaining</span> frontend and backend of large Enterprise Application.</p>
        </div><div className='skills-card'>
            <p className='skills-card-h3'>Frontend Dev</p>
            <p className='skills-card-p'>Skilled in building client-side applications with modern features like SPA. Use modern tech such as <span>React.JS and Redux.</span> </p>
        </div><div className='skills-card'>
            <p className='skills-card-h3'>Backend Dev</p>
            <p className='skills-card-p'>Skilled in building scalable and maintainable server applications using modern technology like <span>Node.js, Express, PostgreSQL and MongoDB.</span></p>
        </div>
        <div className='skills-card'>
            <p className='skills-card-h3'>Performance Optimising</p>
            <p className='skills-card-p'>I love building highly performant web application using <span>Microservices</span> and various other optimising techniques. </p>
        </div>
    </div>
  )
}

export default Cards