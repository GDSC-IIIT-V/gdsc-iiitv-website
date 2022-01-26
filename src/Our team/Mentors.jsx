import React from "react";
import "./Hero.css";
import github from "../assets/images/github.svg";
import linkedin from "../assets/images/linkedin.svg";
import { Mentors } from "./util/Mentors";
import Navbar from "./Navbar";


function Mentor() {
  return (
    <>
    <Navbar/>
    <div className="leads-container" id='team'>
      <div className="leads-title">Mentors</div>
      <div className="leads-content-wrapper">
       


          {Mentors.map(( men, index) => (
            <div className="leads-content-container" key={index}>
              <div className="imagee">
                <img className="leads-image" id={men.index} src={men.imgurl} alt={men.name} />
  
                <div
                  className="afterhover"
                >
                    <div className="icons">
                  <div className="icon">
                    <a href={men.githublink} >
                      <img src={github} alt='github' className="iconimg"/>
                    </a>
                  </div>
                  <div className="icon" >
                    <a href={men.linkedinlink}>
                      <img src={linkedin} alt='linkedin' className="iconimg"/>
                    </a>
                  </div>
                  </div>
                </div>
              </div>
  
              <div className="leads-name"> {men.name} </div>
              <div className="leads-position"> {men.position} </div>
            </div>
          ))}
        
        
      </div>
    </div>
    </>
  )
}

export default Mentor
