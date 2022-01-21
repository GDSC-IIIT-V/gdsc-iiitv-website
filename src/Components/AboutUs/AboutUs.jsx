import React from 'react'
import './AboutUs.css';

// importing all svgs
import sphere from "../../assets/images/sphere.svg";
import sphere2 from "../../assets/images/sphere2.svg";
import sphere3 from "../../assets/images/sphere3.svg";
import sphere4 from "../../assets/images/sphere4.svg";

import blueLeftCurve from '../../assets/images/BlueLeftCurve.svg';
import blueRightCurve from '../../assets/images/blueRightCurve.svg';
import greenRightCurve from '../../assets/images/Group 9.svg';
import greenLeftCurve from '../../assets/images/Group 10.svg';
import redCurve from '../../assets/images/RedCurve.svg'
import yellowPipe from '../../assets/images/YellowPipe.svg';
import yellowExtension from '../../assets/images/yellowExtension.svg';

import Line33 from "../../assets/images/Line 33.svg";
import Line34 from "../../assets/images/Line 34.svg";
import Line35 from "../../assets/images/Line 35.svg";
import Rectangle14 from "../../assets/images/Rectangle 14.svg";
import Rectangle17 from "../../assets/images/Rectangle 17.svg";
import Rectangle22 from "../../assets/images/Rectangle 22.svg";



export default function AboutUs() {
    return (
        <div class = "main" id = "aboutUs">
            
            {/* Top Div */}
            <div class = "topCont">
                    <img src= {sphere} alt="sphere" id = "sphere"/>
                    <img src= {redCurve} alt="rectangle-13" id = "rect13" />
                    <img src= {Rectangle14} alt="rectangle-14" id = "rect14" />
                    <img src= {greenRightCurve} alt="rectangle-20" id = "rect20"/>
                    <img src= {sphere3} alt="sphere" id = "sphere3"/>
                    <img src= {greenLeftCurve} alt="rectangle-21" id = "rect21"/>
                    <img src= {Rectangle22} alt="rectangle-22" id = "rect22"/>
            </div>

            {/* Mid Div containing three boxes and all animations */}
            <div class="mainCont">
                <div class="box1">
                    <h4>Concept of GDSC</h4>
                    <p>The GDSC program is a grassroots channel through which Google
                        provides development skills, mobile and web development skills for students,
                        towards employablility.
                    </p>
                </div>
                <div class="box2">
                    <h4>Why GDSC?</h4>
                    <p>The GDSC program is a grassroots channel through which Google
                        provides development skills, mobile and web development skills for students,
                        towards employablility.
                    </p>
                </div>
                <div class="box3">
                    <h4>Target Audience</h4>
                    <p>The GDSC program is a grassroots channel through which Google
                        provides development skills, mobile and web development skills for students,
                        towards employablility.</p>
                </div>
            </div>

            {/* Bottom div for design */}
            <div class = "bottomCont">
                    <img src= {sphere2} alt="sphere" id = "sphere2"/>
                    <img src= {sphere4} alt="sphere" id = "sphere4"/>
                    <img src={yellowExtension} alt="yellow-extension" id="yellowExtension" />
                    <img src={yellowPipe} alt="yellowpipe" id = "yellowPipe" />

                    <img src= {Rectangle17} alt="rectangle-17" id = "rect17"/>
                    <img src= {blueLeftCurve} alt="rectangle-18" id = "rect18"/>
                    <img src={blueRightCurve} alt="rectangle-19" id = "rect19"/>

                    <img src= {Line33} alt="line-33" id = "line33"/>
                    <img src= {Line34} alt="line-34" id = "line34"/>
                    <img src= {Line35} alt="line-35" id = "line35"/>

            </div>

        </div>
    )
}

