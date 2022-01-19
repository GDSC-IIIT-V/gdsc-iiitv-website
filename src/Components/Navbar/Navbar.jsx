import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/Logo.svg";

const Navbar = () => {
  return (
    <div className="containerr">
      <div className="part1">
        <div className="logo">
          <div>
            <img src={logo} alt="" className="logoimg" />
          </div>

          <div className="logotext">
            <p className="linktext txtebold">
              GDSC 
            </p>
            {" "}
            <p className="linktext">
             IIITV
            </p>
          </div>
        </div>

        <div>
          <a href="#team" className="linktext txtbold">
            Team
          </a>
        </div>

        <div>
          <a href="#about" className="linktext txtbold">
            About Us
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
          <a href="#videos" className="linktext">
            Videos
          </a>
        </div>
        <div>
          <a href="#contactUs" className="linktext">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
