import React from "react";
import Section1Image from "./../Assets/Section1Image.png";
import Section1ImageTab from "./../Assets/Section1ImageTab.png";
import Section1Image1 from "./../Assets/Section1Image1.png";
import Section1Image2 from "./../Assets/Section1Image2.png";
import Section1Image3 from "./../Assets/Section1Image3.png";
import Section1Image4 from "./../Assets/Section1Image4.png";

import { section1Constants } from "./../Constants/Constants";

function Section1(showComponent) {
  return (
    <div className="Section1">
      <div className="Section1Left">
        {showComponent.showComponent ? (
          <img
            src={Section1ImageTab}
            alt="Section1Image"
            className="Section1Image"
          ></img>
        ) : (
          <img
            src={Section1Image}
            alt="Section1Image"
            className="Section1Image"
          ></img>
        )}
      </div>
      <div className="Section1Right">
        <div className="Section1RightHeader">
          {section1Constants.headerp1}{" "}
          <span style={{ color: "#2B58A4" }}>{section1Constants.headerp2}</span>
        </div>
        <div className="section1ParaMobile">
          <p1 className="section1Para">{section1Constants.para1}</p1>
        </div>

        <div className="Section1PointsWrapper">
          <img
            src={Section1Image1}
            alt="icon"
            className="Section1ImageMobile"
          ></img>
          <p1 className="section1Points"> {section1Constants.point1}</p1>
        </div>

        <div className="Section1PointsWrapper">
          <img
            src={Section1Image2}
            alt="icon"
            className="Section1ImageMobile"
          ></img>
          <p1 className="section1Points"> {section1Constants.point2}</p1>
        </div>

        <div className="Section1PointsWrapper">
          <img
            src={Section1Image3}
            alt="icon"
            className="Section1ImageMobile"
          ></img>
          <p1 className="section1Points"> {section1Constants.point3}</p1>
        </div>

        <div className="Section1PointsWrapper">
          <img
            src={Section1Image4}
            alt="icon"
            className="Section1ImageMobile"
          ></img>
          <p1 className="section1Points"> {section1Constants.point4}</p1>
        </div>
      </div>
    </div>
  );
}

export default Section1;
