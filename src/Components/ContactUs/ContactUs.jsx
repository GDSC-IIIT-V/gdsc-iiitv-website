import React from 'react'
import gdsc from '../../assets/images/gdsc-img.svg'
import iiitv from '../../assets/images/IIITV.svg'
import './ContactUs.css'
import linkedin from '../../assets/images/LinkedIn.png'
import discord from '../../assets/images/discord.png'
import twitter from '../../assets/images/twitter.png'
import contactusdot from '../../assets/images/contactusdot.png'


function ContactUs() {
  return (
    <>
      <div classname="contact-us" id="contact-us">
        <div className="gdsc-image" id="contactUs">
          <img src={gdsc} alt="gdsc" id="gdsc-image-img" />
          <img src={iiitv} alt="iiitv" id="iiitv-image-img" />
        </div>
        <div className="contactus-button">
          <p className="button-contact">Contact Us</p>

          <div className="socialmedia">
            <a
              href="https://www.linkedin.com/company/gdsciiitv"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" className="iconimg-c" />
            </a>

            <a
              href="https://twitter.com/gdsc_iiitv"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitter} alt="twitter" className="iconimg-c" />
            </a>

            <a
              href="https://discord.gg/TFDDAjDxkz"
              target="_blank"
              rel="noreferrer"
            >
              <img src={discord} alt="discord" className="iconimg-c" />
            </a>
          </div>

          <div className="footer">
            <span className="names">
              Made with ❤️ by{" "}
              <a
                href="https://www.linkedin.com/in/madhur-gupta-07408320b/"
                target="_blank"
                rel="noreferrer"
                className="footer-links"
              >
                Madhur Gupta
              </a>
              ,{" "}
              <a
                href="https://www.linkedin.com/in/dhruv1201/"
                target="_blank"
                rel="noreferrer"
                className="footer-links"
              >
                Dhruv Dave
              </a>
              ,
              <a
                href="https://www.linkedin.com/in/dhruv-rashiya-6164791b8/"
                target="_blank"
                rel="noreferrer"
                className="footer-links"
              >
                Dhruv Rashiya
              </a>
              ,
              <a
                href="https://www.linkedin.com/in/riya-parikh-27b345196/"
                target="_blank"
                rel="noreferrer"
                className="footer-links"
              >
                Riya Parikh
              </a>
              ,
              <a
                href="https://www.linkedin.com/in/parth-chandravadiya-0379a0227/"
                target="_blank"
                rel="noreferrer"
                className="footer-links"
              >
                Parth Chandravadiya
              </a>
              ,
              <a
                href="https://www.linkedin.com/in/kewal-delhiwala-a4ba24201"
                target="_blank"
                rel="noreferrer"
                className="footer-links"
              >
                Kewal Delhiwala
              </a>
            </span>
          </div>
        </div>
        <img src={contactusdot} alt="dot" className="dot" />
      </div>
    </>
  );
}

export default ContactUs
