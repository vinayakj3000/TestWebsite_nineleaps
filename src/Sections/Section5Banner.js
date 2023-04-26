import React from "react";
import "./Section3.css";
import Banner5 from "./../Assets/Section5Banner.png";
import { section5BannerConstants } from "../Constants/Constants";

function Section5Banner() {
  return (
    <div className="Section3BannerWrapper">
      <div
        style={{
          backgroundImage: `url(${Banner5})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          height: "20vw",
        }}
      >
        <div className="Section5BannerMain">
          <h1 className="Section5BannerText">
            {section5BannerConstants.headerp1}
            <br /> {section5BannerConstants.headerp2}
          </h1>
          <button className="Section5BannerButton">
            {section5BannerConstants.button}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section5Banner;
