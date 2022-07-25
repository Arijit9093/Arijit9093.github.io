import React from 'react'
import './footer.css'
import {ImFacebook} from 'react-icons/im';
import {BsInstagram} from 'react-icons/bs';
const Footer = () => {
  return (
      <footer id='footer'>
        <a href='#' className='footer__logo'>TOP</a>
        <ul className='permalinks'>
          <li><a href='#'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#experience'>Experience</a></li>
          <li><a href='#services'>Internship</a></li>
          <li><a href='#portfolio'>Project</a></li>
          <li><a href='#testimonials'>Certificate</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
        <div className="footer__socials">
          <a href="https://www.facebook.com/arijit.chakraborty.9235199"><ImFacebook/></a>
          <a href="https://www.instagram.com/arijit___chakraborty/"><BsInstagram/></a>
        </div>
        <div className='footer__copyright'>
          <small>&copy; Arijit Chakraborty. All rights reserved</small>
        </div>
      </footer>
  )
}

export default Footer