import "./Navbar.css";
import React from "react";
import { useState } from "react";
import logo from "../../../assets/images/Logo.svg";
import drawer from "../../../assets/images/drawer.svg";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="burger-menu">
      <div className="burger-menu-logo">
        <div className="logo-burger">
          <div>
            <img src={logo} alt="" className="logoimg-burger" />
          </div>

          <div className="logotext-burger">
            <p className="linktext-burger txtebold">GDSC</p>{" "}
            <p className="linktext-burger">IIITV</p>
          </div>
        </div>
        <div className="drawer-main">
          {!open && (
            <i className="drawer" onClick={() => setOpen(true)}>
              <img src={drawer} alt="drawer" />
            </i>
          )}
          {open && (
            <i className="drawer" onClick={() => setOpen(false)}>
              <img src={drawer} alt="drawer" />
            </i>
          )}
        </div>
      </div>
      <ul className={(open ? "show-burger-menu" : "") + " burger-menu-item"}>
        <li>
          <a href="#team" className="linktext">Team</a>
        </li>
        <li>
          <a href="#aboutUs" className="linktext">About Us</a>
        </li>
        <li>
          <a href="#events" className="linktext">Events</a>
        </li>
        <li>
          <a href="#video" className="linktext">Video</a>
        </li>
        <li>
          <a href="#contactUs" className="linktext"> Contact Us</a>
        </li>
      </ul>
    </div>
  );
};

export default BurgerMenu;
