import React from 'react'
import gdsc from '../../assets/images/GDSC IIITV.png'
import './ContactUs.css'
import linkedin from '../../assets/images/LinkedIn.png'
import discord from '../../assets/images/discord.png'
import twitter from '../../assets/images/twitter.png'
// import contactusdot from '../../assets/images/contactusdot.png'
import Dot from './Dot'
import Footer from '../Footer/Footer'


function ContactUs() {
  return (
    <div classname='contactUs'>
      
      <div className='gdsc-image'>
        <img src={gdsc} alt='gdsc' />
      </div> 
       

      <div className='contactus-button'>
        {/* <img src={contactusdot} alt="dot" className='dot-background'/> */}
        
        
        <button className='button'> Contact Us</button>
        <div className='socialmedia'>
          <a href='https://www.youtube.com/' target='_blank' rel="noreferrer">
            <img src={linkedin} alt='LinkedIn' className='iconimg' />
          </a>

          <a href='https://www.youtube.com/' target='_blank' rel="noreferrer">
            <img src={twitter} alt='twitter' className='iconimg' />
          </a>

          <a href='https://www.youtube.com/' target='_blank' rel="noreferrer">
            <img src={discord} alt='discord' className='iconimg' />
          </a>
        </div>
      </div>
      <Dot/>
      <Footer/>
    </div>
  )
}

export default ContactUs
