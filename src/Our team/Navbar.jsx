import React from "react";
import "./Navbar.css";
import logo from "../assets/images/Logo.svg";
import home from "../assets/images/home.svg";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="containerr-team">
      <div className="part1-team">
        <div className="logo-team">
          <div>
            <img src={logo} alt="" className="logoimg-team" />
          </div>

          <div className="logotext">
            <p className="linktext-team txtebold">GDSC</p>
            <p className="linktext-team">IIIT-V</p>
          </div>
        </div>
        </div>
        <div className="part2-team">
          <Link to="/">
            <img src={home} alt=" " className="homeimg" />
          </Link>
        </div>
      
    </div>
  );
};
export default Navbar;
