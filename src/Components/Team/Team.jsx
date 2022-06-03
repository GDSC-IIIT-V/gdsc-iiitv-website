import React from "react";
import "./Team.scss";
import lamp from "../../assets/images/Teams/Lamp.svg";
import insideLight from "../../assets/images/Teams/LightInside.svg";
import outsideLight from "../../assets/images/Teams/LightOutside.svg";
import table from "../../assets/images/Teams/Table.svg";
import rectangle from "../../assets/images/Teams/Rectangle.svg";
import cmt1 from "../../assets/images/Teams/cmt-1.svg";
import cmt2 from "../../assets/images/Teams/cmt-2.svg";
import cmt3 from "../../assets/images/Teams/cmt-3.svg";
import cmt4 from "../../assets/images/Teams/cmt-4.svg";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div id="team">
      <h5 className="Team-header">Our Team</h5>

      <hr className="Team-hr1" />
      <hr className="Team-hr2" />
      <hr className="Team-hr3" />
      <div className="Team">
        <div className="Team-content-container">
          <div className="Team-content">
            At GDSC we work with a positive outlook and persistent dedication to
            create an atmosphere that is inclusive and illuminating. We hold
            many workshops regarding various development fields, study jams,
            hackathons, educative sessions and informative seminars. Our team
            consists of our lead, core members, mentors, volunteers and alumni.
            Our members are innovative, driven and creative individuals who are
            always willing to help each other learn and grow together. Under our
            lead with guidance from our mentors, support from our volunteers and
            assistance from our core team we strive to transform our community
            for a better cause!
          </div>
          <div className="Team-table-image-container">
            <img src={lamp} className="Team-image-lamp" alt="lamp" />
            <img
              src={insideLight}
              className="Team-lamp-inside"
              alt="insideLight"
            />
            <img
              src={outsideLight}
              className="Team-lamp-outside"
              alt="outsideLight"
            />
            <div className="Team-cmt-container">
              <img src={cmt1} alt="cmt1" className="Team-cmt1" />
              <img src={cmt2} alt="cmt2" className="Team-cmt2" />
              <img src={cmt3} alt="cmt3" className="Team-cmt3" />
              <img src={cmt4} alt="cmt4" className="Team-cmt4" />
            </div>
            <img className="Team-table-image" src={table} alt="table" />
            <img
              src={rectangle}
              alt="rectangle"
              className="Team-table-rectangle"
            />
          </div>
        </div>
        <div className="Team-circle-container">
          <div className="Team-circle-1 c">
            <div className="Team-circle-outer-1">
              <Link to="/Coreteam">
                {" "}
                <div className="Team-circle-inner-1 linktxt">Core Team</div>
              </Link>
            </div>
          </div>

          <div className="Team-circle-2 c">
            <div className="Team-circle-outer-2">
              <Link to="/Alumini">
                {" "}
                <div className="Team-circle-inner-2 linktxt">Alumni</div>
              </Link>
            </div>
          </div>

          <div className="Team-circle-3 c">
            <div className="Team-circle-outer-3">
              <Link to="/Mentors">
                {" "}
                <div className="Team-circle-inner-3 linktxt">Mentors</div>
              </Link>
            </div>
          </div>

          <div className="Team-circle-4 c">
            <div className="Team-circle-outer-4">
              <Link to="/Volunteers">
                {" "}
                <div className="Team-circle-inner-4 linktxt">Volunteers</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
