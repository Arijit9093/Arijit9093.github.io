import React from 'react'
import './portfolio.css'
import project1 from '../../assests/project1.png'
import project2 from '../../assests/project2.png'
import project3 from '../../assests/project3.png'
import LightSpeed from 'react-reveal/LightSpeed';
import Flip from 'react-reveal/Flip';
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Project</h2>
      <div className="container portfolio__container">
        <LightSpeed>
        <article className='portfolio__item'>
          <Flip left>
          <div className="portfolio__item-image">
            <img src={project1} alt="" />
          </div>
          </Flip>
          <h3>Chatting Application</h3>
          <div className='portfolio__item-cta'>
          {/* <a href='https://github.com' className='btn'>Github</a> */}
          <a href='https://arijits-chatapp.herokuapp.com/' className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        </LightSpeed>
        <LightSpeed>
        <article className='portfolio__item'>
          <Flip left>
          <div className="portfolio__item-image">
            <img src={project2} alt="" />
          </div>
          </Flip>
          <h3>Covid-19 tracker</h3>
          <div className='portfolio__item-cta'>
          {/* <a href='https://github.com' className='btn'>Github</a> */}
          <a href='http://webproarijit.herokuapp.com/' className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        </LightSpeed>
        <LightSpeed>
        <article className='portfolio__item'>
          <Flip left>
          <div className="portfolio__item-image">
            <img src={project3} alt="" />
          </div>
          </Flip>
          <h3>E-commerce website</h3>
          <div className='portfolio__item-cta'>
          {/* <a href='https://github.com' className='btn'>Github</a> */}
          <a href='http://rishavcollec.000webhostapp.com/' className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        </LightSpeed>
      </div>
    </section>
  )
}

export default Portfolio