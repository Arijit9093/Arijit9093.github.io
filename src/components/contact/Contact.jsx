import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {RiWhatsappLine} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import Flip from 'react-reveal/Flip';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_12ej2a2', 'template_ay9px3z', form.current, 'Y62BzNL2vc7q6eKXw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
      <Flip left>
      <div className="contact__options">
      
        <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5 className='mail'>aarijit02042001@gmail.com</h5>
          <a href='mailto:aarijit02042001@gmail.com' target="_blank">Send a message</a>
        </article>
        <article className='contact__option'>
          <RiMessengerLine className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>Arijit Chakraborty</h5>
          <a href='https://m.me/arijit.chakraborty.9235199' target="_blank">Send a message</a>
        </article>
        <article className='contact__option'>
          <RiWhatsappLine className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          <h5>+916295464451</h5>
          <a href='https://api.whatsapp.com/send?phone=6295464451' target="_blank">Send a message</a>
        </article>
      </div>
      </Flip>
      
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Full Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder='Send Message' cols="30" rows="7" required />
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
      
      </div>
    </section>
  )
}

export default Contact