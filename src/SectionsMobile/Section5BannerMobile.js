import React from "react";
import "./Section5BannerMobile.css";
import bannerSection5Mobile from '../Assets/bannerSection5Mobile.png'
import { section5BannerConstants } from "../Constants/Constants";

function Section5BannerMobile() {
  return (
    <div className="Section5BannerMobileMain"
    style={{
      backgroundImage:`url(${bannerSection5Mobile})`
    }}>
      <div className="Section5BannerMobileText">
        {section5BannerConstants.headerp1}<br/>
        {section5BannerConstants.headerp2}
      </div>
      <button className="Section5BannerMobileButton">{section5BannerConstants.button}</button>
    </div>
  );
}

export default Section5BannerMobile;
