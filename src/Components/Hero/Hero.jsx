import React from "react";
import "./Hero.css";
import logo from "../../assets/images/Logo.svg";
import poly1 from "../../assets/images/Polygon 1.svg";
import poly2 from "../../assets/images/Polygon 2.svg";
import poly3 from "../../assets/images/Polygon 3.svg";
import poly4 from "../../assets/images/Polygon 4.svg";
import heroline from "../../assets/images/hero-line.svg";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-column clm1">
          <div className="hero-text-container">
            <div className="hero-name">
              <div className="hero-logo">
                <img src={logo} alt="" className="hero-logoimg" />
              </div>
              <div className="hero-name-text">
                <div className="hero-name-text1">
                  Google Developer Student Club
                </div>
                <div className="hero-name-text2">
                  Indian Institute Of Information Technology Vadodara
                </div>
              </div>
            </div>
            <div className="hero-text">
              IIIT Vadodara's GDSC is a community platform for students
              interested in Google developer tools and technologies. GDSC aims
              at creating a supportive environment for students by helping them
              build networks, share ideas and come up with authentic solutions
              for significant problems. We welcome you to collaborate on
              different projects, get hands on experience and enhance your
              development skills. Our goal is simple - To Learn and Grow together! 
            </div>
          </div>
        </div>

        <div className="hero-column clm2">
          <div className="loader-wrapper">
            <div className="loader t1">
              <img src={poly1} className="triimg" alt="tri1"></img>
            </div>
            <div className="loader t2">
              <img src={poly2} className="triimg" alt="tri2"></img>
            </div>
            <div className="loader t3">
              <img src={poly3} className="triimg" alt="tri3"></img>
            </div>
            <div className="loader t4">
              <img src={poly4} className="triimg" alt="tri4"></img>
            </div>
          </div>
        </div>
      </div>
      <img src={heroline} alt="line" className="line-img" />
    </>
  );
};

export default Hero;
