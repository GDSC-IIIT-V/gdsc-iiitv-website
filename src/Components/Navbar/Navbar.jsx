import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/Logo.svg";
import BurgerMenu from './BurgerMenu/Navbar';

const Navbar = () => {
  return (
    <>
    <BurgerMenu/>
    <div className="containerr">
      <div className="part1">
        <div className="logo">
          <div>
            <img src={logo} alt="" className="logoimg" />
          </div>

          <div className="logotext">
            <div>
              <p className="linktext txtebold">
                GDSC 
              </p>
            </div>
            <div>
              <p className="linktext">
              IIIT-V
              </p>
            </div>
          </div>
        </div>

        <div>
          <a href="#aboutUs" className="linktext txtbold">
            About Us
          </a>
        </div>
        
        <div>
          <a href="#team" className="linktext txtbold">
            Team
          </a>
        </div>
      </div>

      <div className="part2">
        <div>
          <a href="#events" className="linktext">
            Events
          </a>
        </div>
        <div>
          <a href="#video" className="linktext">
            Video
          </a>
        </div>
        <div>
          <a href="#contactUs" className="linktext">
            Contact Us
          </a>
        </div>
        <div className="join__us__button">
          <a href="https://gdsc.community.dev/indian-institute-of-information-technology-vadodara/" className="join__us">
            Join Us
          </a>
        </div>
      </div>
    </div>
    </>
  );
};
export default Navbar;
