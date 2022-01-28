import React from 'react'
import gdsc from '../../assets/images/gdsc-image.svg'
import iiitv from '../../assets/images/IIITV.svg'
import './ContactUs.css'
import linkedin from '../../assets/images/LinkedIn.png'
import discord from '../../assets/images/discord.png'
import twitter from '../../assets/images/twitter.png'
import contactusdot from '../../assets/images/contactusdot.png'
import Dot from './Dot'
import Footer from '../Footer/Footer'

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
        <img src={contactusdot} alt="dot" className='dot'/>
      </div>

      <Footer/>
    </div>
  )
}

export default ContactUs
