import React from "react";
import "./Section3.css";
import banner2 from "./../Assets/banner2.png";
import { section3BannerConstants } from "../Constants/Constants";

function Section3Banner() {
  return (
    <div className="Section3BannerWrapper">
      <div
        style={{
          backgroundImage: `url(${banner2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          height:"20vw",
        
        }}
      >
        <div className="Section3BannerMain">
        <h1 className="Section3BannerText">{section3BannerConstants.header}</h1>
        <button className="Section3BannerButton">Know more</button>
        </div>
      </div>
    </div>
  );
}

export default Section3Banner;
