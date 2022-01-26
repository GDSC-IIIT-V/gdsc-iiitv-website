import React from "react";
import "./Hero.css";
import github from "../assets/images/github.svg";
import linkedin from "../assets/images/linkedin.svg";

import Navbar from "./Navbar";
import { Volunteers } from "./util/Volunteers";

function Volunteer() {
  return (
    <div className="leads-container" id='team'>
      <div className="leads-title">Volunteers</div>
      <div className="leads-content-wrapper">
       


          {Volunteers.map(( vol, index) => (
            <div className="leads-content-container" key={index}>
              <div className="imagee">
                <img className="leads-image" id={vol.index} src={vol.imgurl} alt={vol.name} />
  
                <div
                  className="afterhover"
                >
                    <div className="icons">
                  <div className="icon">
                    <a href={vol.githublink} >
                      <img src={github} alt='github' className="iconimg"/>
                    </a>
                  </div>
                  <div className="icon" >
                    <a href={vol.linkedinlink}>
                      <img src={linkedin} alt='linkedin' className="iconimg"/>
                    </a>
                  </div>
                  </div>
                </div>
              </div>
  
              <div className="leads-name"> {vol.name} </div>
              <div className="leads-position"> {vol.position} </div>
            </div>
          ))}
        
        
      </div>
    </div>
  )
}

export default Volunteer
