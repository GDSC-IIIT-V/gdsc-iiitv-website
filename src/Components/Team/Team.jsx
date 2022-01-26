import React from "react";
import "./Team.scss";
import lamp from "../../assets/images/Teams/Lamp.svg";
import insideLight from "../../assets/images/Teams/LightInside.svg"
import outsideLight from "../../assets/images/Teams/LightOutside.svg"
import table from "../../assets/images/Teams/Table.svg";
import rectangle from "../../assets/images/Teams/Rectangle.svg";
import cmt1 from "../../assets/images/Teams/cmt-1.svg";
import cmt2 from "../../assets/images/Teams/cmt-2.svg";
import cmt3 from "../../assets/images/Teams/cmt-3.svg";
import cmt4 from "../../assets/images/Teams/cmt-4.svg";

const Team = () => {
  return (
    <div>
      <h5 className="Team-header">Our Team</h5>

      <hr className="Team-hr1" />
      <hr className="Team-hr2" />
      <hr className="Team-hr3" />

      <div className="Team-content-container">
        <div className="Team-content">
          gdsc started in 2019 by weuwbvw wwgwgg and gererbefbe which them grew
          with time to be what it is today..... we had many great workshops
          etcetcetc
          <br />
          <br />
          gdsc started in 2019 by weuwbvw wwgwgg and gererbefbe which them grew
          with time to be what it is today..... we had many great workshops
          etcetcetc gdsc started in 2019 by weuwbvw wwgwgg and gererbefbe which
          them grew with time to be what it is today..... we had many great
          workshops etcetcetcgdsc started in 2019 by weuwbvw wwgwgg and
          gererbefbe which them grew with time to be what it is today..... we
          had many great workshops etcetcetc
        </div>
        <div className="Team-table-image-container">
          <img src={lamp} className="Team-image-lamp" alt="lamp" />
         <img src={insideLight} className="Team-lamp-inside" alt="insideLight" />
         <img src={outsideLight} className="Team-lamp-outside" alt="outsideLight" />
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
        <div className="Team-circle-outer-1">
          <div className="Team-circle-inner-1">Core Team</div>
        </div>
        <div className="Team-circle-outer-2">
          <div className="Team-circle-inner-2">Alumini</div>
        </div>
        <div className="Team-circle-outer-3">
          <div className="Team-circle-inner-3">Mentors</div>
        </div>
        <div className="Team-circle-outer-4">
          <div className="Team-circle-inner-4">Volunteers</div>
        </div>
      </div>
    </div>
  );
};

export default Team;
