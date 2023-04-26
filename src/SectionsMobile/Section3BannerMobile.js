import React from "react";
import "./Section3BannerMobile.css";
import { section3BannerConstants } from "../Constants/Constants";

function Section3BannerMobile() {
  return (
    <div className="Section3BannerMobileMain">
      <div className="Section3BannerMobileText">{section3BannerConstants.header}</div>
      <button className="Section3BannerMobileButton">Know More</button>
    </div>
  );
}

export default Section3BannerMobile;
