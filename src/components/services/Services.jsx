import React from 'react'
import './services.css'
import internship from '../../assests/internship.png'
import Bounce from 'react-reveal/Bounce';
import Flip from 'react-reveal/Flip';
const Services = () => {
  return (
    <section id='services'>
      <Bounce bottom>
      <h5>My Recent Work</h5>
      <h2>Internship</h2>
      <div className="container services__container">
        <article className='services__item'>
          <Flip left>
          <div className="services__item-image">
            <img src={internship} alt="" />
          </div>
          </Flip>
          <h3 className='internship_title'>Internship at Celebrare Technology Pvt Ltd.</h3>
          <div className='services__item-cta'>
          {/* <a href='https://github.com' className='btn'>Github</a> */}
          <a href='https://celebrare.in/share.html' className='btn btn-primary'>The webpage</a>
          </div>
        </article>
        
      </div>
      </Bounce>
    </section>
  )
}

export default Services