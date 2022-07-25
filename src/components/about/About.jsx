import React from 'react'
import './about.css'
import ME from '../../assests/about_me.jpeg'
import {FaAward} from 'react-icons/fa'

import {GrCertificate} from 'react-icons/gr'
import {AiFillFolderOpen} from 'react-icons/ai'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="about image"/>
          </div>
        </div>
        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years working</small>
            </article>
            <article className='about__card'>
              <GrCertificate className='about__icon'/>
              <h5>Certificates</h5>
              <small>5+</small>
            </article>
            <article className='about__card'>
              <AiFillFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>3+ completed</small>
            </article>
          </div>
          <p>
          Knowledgeable and performance-driven IT (Information Technology) student who excels at Software development. Proven ability in optimizing web functionalities that improve data retrieval and workflow efficiency.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About