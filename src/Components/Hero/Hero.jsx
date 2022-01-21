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
        <div className="hero-column">
          <div className="hero-text-container">
            <div className="hero-name">
              <div className="hero-logo">
                <img src={logo} alt="" className="hero-logoimg" />
              </div>
              <div className="hero-name-text">
                <div className="hero-name-text1">
                  Google Developer Student Clubs
                </div>
                <div className="hero-name-text2">
                  Indian Institute Of Information Technology Vadodara
                </div>
              </div>
            </div>
            <div className="hero-text">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book. It usually begins with..
            </div>
          </div>
        </div>

        <div className="hero-column clm2">
          <div class="loader-wrapper">
            <div class="loader t1">
              <img src={poly1} className="triimg" alt="tri1"></img>
            </div>
            <div class="loader t2">
              <img src={poly2}className="triimg" alt="tri2"></img>
            </div>
            <div class="loader t3">
              <img src={poly3} className="triimg" alt="tri3"></img>
            </div>
            <div class="loader t4">
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
