import React from "react";
import "./Hero.css";
import github from "../assets/images/github.svg";
import linkedin from "../assets/images/linkedin.svg";

import { Coreteam } from "./util/Coreteam";

import Navbar from "./Navbar";


function Coreteama() {
  return (
    <>
    <Navbar/>
    <div className="leads-container" id='team'>
    <div className="leads-title">Coreteam</div>
    <div className="leads-content-wrapper">
     


        {Coreteam.map(( ctm, index) => (
          <div className="leads-content-container" key={index}>
            <div className="imagee">
              <img className="leads-image" id={ctm.index} src={ctm.imgurl} alt={ctm.name} />

              <div
                className="afterhover"
              >
                  <div className="icons">
                <div className="icon">
                  <a href={ctm.githublink} >
                    <img src={github} alt='github' className="iconimg"/>
                  </a>
                </div>
                <div className="icon" >
                  <a href={ctm.linkedinlink}>
                    <img src={linkedin} alt='linkedin' className="iconimg"/>
                  </a>
                </div>
                </div>
              </div>
            </div>

            <div className="leads-name"> {ctm.name} </div>
            <div className="leads-position"> {ctm.position} </div>
          </div>
        ))}
      
      
    </div>
  </div>
  </>
  )
}

export default Coreteama
