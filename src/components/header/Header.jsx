import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import Me from '../../assests/Me.jpeg'
import Zoom from 'react-reveal/Zoom';

//importing typewriter-effect
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    
    
    <header>
      <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1>Arijit Chakraborty</h1>
        <h2 className="text-light"><Typewriter
        
          
        onInit={(typewriter) => {
          setInterval(() => {
            typewriter
              .typeString("Full Stack Developer")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Video Editor")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Learner")
              .pauseFor(1000)
              .deleteAll()
              .start();
          }, 1000);
            
          }}
        /></h2>
        <CTA />
        <HeaderSocials />
        <Zoom bottom>
        <div className="me">
          <img src={Me} className="image_header" alt="me" />
        </div>
        </Zoom>

        <a href="#footer" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
    
  )
}

export default Header