import React from "react";
import "./AboutUs.css";

// importing all svgs
import sphere from "../../assets/images/pipes and spheres/sphere.svg";
import sphere2 from "../../assets/images/pipes and spheres/sphere2.svg";
import sphere3 from "../../assets/images/pipes and spheres/sphere3.svg";
import sphere4 from "../../assets/images/pipes and spheres/sphere4.svg";

// Pipe imports
import BlueWholePipe from "../../assets/images/pipes and spheres/BlueWholePipe.svg";
import RedWholePipe from "../../assets/images/pipes and spheres/RedwholePipe.svg";
import GreenWholePipe from "../../assets/images/pipes and spheres/GreenWholePipe.svg";
import yellowPipe from "../../assets/images/pipes and spheres/YellowPipe.svg";

// Red and Yellow Extensions for greater screen sized
import redExt from "../../assets/images/pipes and spheres/redExtension.svg";
import yellExt from "../../assets/images/pipes and spheres/yellowExtension.svg";

import Line33 from "../../assets/images/Line 33.svg";
import Line34 from "../../assets/images/Line 34.svg";
import Line35 from "../../assets/images/Line 35.svg";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

export default function AboutUs() {
  const [inView, setInView] = useState("");
  const mainRef = useRef(null);
  const observerCallBack = (entries) => {
    const [entry] = entries;
    setInView(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallBack);
    if (mainRef.current) observer.observe(mainRef.current);

    return () => {
      if (mainRef.current) observer.unobserve(mainRef.current);
    };
  }, [mainRef]);

  return (
    <div className="main" id="aboutUs" ref={mainRef}>
      {/* Top Div */}
      <div class="topCont">
        <img
          src={sphere}
          alt="sphere"
          id="sphere"
          className={inView ? "anim" : ""}
        />
        <img src={redExt} alt="red-extension-1880" id="redExt" />
        <img src={RedWholePipe} alt="redWholePipe" id="redWholePipe" />
        <img
          src={sphere3}
          alt="sphere"
          id="sphere3"
          className={inView ? "anim" : ""}
        />
        <img src={GreenWholePipe} alt="green-whole-pipe" id="greenWholePipe" />
      </div>

      {/* Mid Div containing three boxes and all animations */}
      <div className="mainCont">
        <div className={"box1 " + inView ? "anim" : ""}>
          <h4>Concept of GDSC</h4>
          <p style={{ fontSize: "18px" }}>
            It is a globally recognised developers program for university based
            students by Google. It focuses on bringing people from all
            backgrounds together based on their interests in many of the
            numerous technologies. GDSC helps in creating awareness regarding
            the several current technologies.
          </p>
        </div>
        <div className={"box2 " + inView ? "anim" : ""}>
          <h4>Why GDSC?</h4>
          <p style={{ fontSize: "18px" }}>
            You get access to all development resources and opportunities. If
            you are passionate about creating remarkable impact on community,
            GDSC is just the place for you. We empower students to excel in
            their professional and personal lives.
          </p>
        </div>
        <div className={"box3 " + inView ? "anim" : ""}>
          <h4>Target Audience</h4>
          <p style={{ fontSize: "18px" }}>
            All students from graduate or undergraduate programs. It doesn't
            matter if you are an absolute beginner or a brilliant expert, as
            long as you are willing to learn you can join us. GDSC is not just
            about 'technology', it is also about connecting with people and
            making a difference.
          </p>
        </div>
      </div>

      {/* Bottom div for design */}
      <div className="bottomCont">
        <img
          src={sphere2}
          alt="sphere"
          id="sphere2"
          className={inView ? "anim" : ""}
        />
        <img
          src={sphere4}
          alt="sphere"
          id="sphere4"
          className={inView ? "anim" : ""}
        />

        <img src={yellowPipe} alt="yellowpipe" id="yellowPipe" />
        <img src={yellExt} alt="yellow-extension-1880" id="yellExt" />

        <img src={BlueWholePipe} alt="blueWholePipe" id="blueWholePipe" />

        <img src={Line33} alt="line-33" id="line33" />
        <img src={Line34} alt="line-34" id="line34" />
        <img src={Line35} alt="line-35" id="line35" />
      </div>
    </div>
  );
}
