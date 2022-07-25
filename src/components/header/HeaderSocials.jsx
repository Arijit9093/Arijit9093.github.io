import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiHackerrank} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/arijit-chakraborty-b244a01a6" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Arijit9093" target="_blank"><FaGithub/></a>
        <a href="https://www.hackerrank.com/aarijit02042001" target="_blank"><SiHackerrank/></a>
    </div>
  )
}

export default HeaderSocials