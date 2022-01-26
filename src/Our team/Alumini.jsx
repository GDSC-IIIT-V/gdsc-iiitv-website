import React from "react";
import "./Hero.css";
import github from "../assets/images/github.svg";
import linkedin from "../assets/images/linkedin.svg";
import { Alumini } from "./util/Alumini";
import Navbar from "./Navbar";

function Alumina() {
  return (
    <>
    <Navbar/>
    <div className="leads-container" id='team'>
    <div className="leads-title">Alumini</div>
    <div className="leads-content-wrapper">
     


        {Alumini.map(( Alumini, index) => (
          <div className="leads-content-container" key={index}>
            <div className="imagee">
              <img className="leads-image" id={Alumini.index} src={Alumini.imgurl} alt={Alumini.name} />

              <div
                className="afterhover"
              >
                  <div className="icons">
                <div className="icon">
                  <a href={Alumini.githublink} >
                    <img src={github} alt='github' className="iconimg"/>
                  </a>
                </div>
                <div className="icon" >
                  <a href={Alumini.linkedinlink}>
                    <img src={linkedin} alt='linkedin' className="iconimg"/>
                  </a>
                </div>
                </div>
              </div>
            </div>

            <div className="leads-name"> {Alumini.name} </div>
            <div className="leads-position"> {Alumini.position} </div>
          </div>
        ))}
      
      
    </div>
  </div>
  </>
  )
}

export default Alumina
