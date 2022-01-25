import React from "react";
import "./Team.css";
import github from "../../assets/images/github.svg";
import linkedin from "../../assets/images/linkedin.svg";


import { Leads } from "./util/LeadsData";

const Team = () => {
  return (
    <div className="leads-container" id='team'>
      <div className="leads-title">Our Team</div>
      <div className="leads-content-wrapper">
        {Leads.map((lead, index) => (
          <div className="leads-content-container" key={index}>
            <div className="imagee">
              <img className="leads-image" id={lead.index} src={lead.imgurl} alt={lead.name} />

              <div
                className="afterhover"
              >
                  <div className="icons">
                <div className="icon">
                  <a href={lead.githublink} >
                    <img src={github} alt='github' className="iconimg"/>
                  </a>
                </div>
                <div className="icon" >
                  <a href={lead.linkedinlink}>
                    <img src={linkedin} alt='linkedin' className="iconimg"/>
                  </a>
                </div>
                </div>
              </div>
            </div>

            <div className="leads-name"> {lead.name} </div>
            <div className="leads-position"> {lead.position} </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
