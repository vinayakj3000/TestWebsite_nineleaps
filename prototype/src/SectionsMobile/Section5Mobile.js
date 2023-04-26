import React from "react";
import "../Sections/Section5.css";
import { section5Constants } from "../Constants/Constants";
import Carousel5 from "../Carousel/Carousel5";

function Section5Mobile() {
  return (
    <div className="Section5Main">
      <h1 className="section2Header">
        {section5Constants.headerp1}{" "}
        <span style={{ color: "#2B58A4" }}>{section5Constants.headerp2}</span>
      </h1>
      <h2 className="section2SubHeader">{section5Constants.para1}</h2>

      <Carousel5 cards={section5Constants.cards} />
    </div>
  );
}

export default Section5Mobile;
