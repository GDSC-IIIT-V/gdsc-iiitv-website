import React from 'react'
import gdsc from '../../assets/images/gdsc-image.svg'
import iiitv from '../../assets/images/IIITV.svg'
import './ContactUs.css'
import linkedin from '../../assets/images/LinkedIn.png'
import discord from '../../assets/images/discord.png'
import twitter from '../../assets/images/twitter.png'
import contactusdot from '../../assets/images/contactusdot.png'


function ContactUs() {
  return (
    <div classname='contactUs'>
      <div className='gdsc-image'>
        <img src={gdsc} alt='gdsc' id = "gdsc-image-img"/>
        <img src={iiitv} alt='iiitv' id = "iiitv-image-img"/>
      </div>
      <div className='contactus-button'>

        <button className='button-contact'> Contact Us</button>
        
        <div className='socialmedia'>
          <a href='https://www.youtube.com/' target='_blank' rel='noreferrer'>
            <img src={linkedin} alt='LinkedIn' className='iconimg' />
          </a>

          <a href='https://www.youtube.com/' target='_blank' rel='noreferrer'>
            <img src={twitter} alt='twitter' className='iconimg' />
          </a>

          <a href='https://www.youtube.com/' target='_blank' rel='noreferrer'>
            <img src={discord} alt='discord' className='iconimg' />
          </a>
        </div>
        
        <div className="footer">
      <span className='names'>
          Made with ❤️ by <a href="https://www.linkedin.com/in/madhur-gupta-07408320b/" target="_blank" rel="noreferrer" className='footer-links'>Madhur Gupta</a>, <a href="https://www.linkedin.com/in/dhruv1201/" target="_blank" rel="noreferrer" className='footer-links'>Dhruv Dave</a>,<a href="https://www.linkedin.com/in/dhruv-rashiya-6164791b8/" target="_blank" rel="noreferrer" className='footer-links'>Dhruv Rashiya</a>,<a href="https://www.linkedin.com/in/riya-parikh-27b345196/" target="_blank" rel="noreferrer" className='footer-links'>Riya Parikh</a>,<a href="https://www.linkedin.com/in/parth-chandravadiya-0379a0227/" target="_blank" rel="noreferrer" className='footer-links'>Parth Chandravadiya</a>,<a href="https://www.linkedin.com/in/kewal-delhiwala-a4ba24201" target="_blank" rel="noreferrer" className='footer-links'>Kewal Delhiwala</a>
      </span>
    </div>
    </div>
        <img src={contactusdot} alt="dot" className='dot'/>
      </div>

      
  )
}

export default ContactUs
