import React from "react";
import "../Sections/Section8.css";
import { section8Constants } from "../Constants/Constants";
import Carousel8 from "../Carousel/Carousel8";

function Section8Mobile() {
  return (
    <div className="Section8Main">
      <h1 className="section2Header">
        {section8Constants.headerp1}{" "}
        <span style={{ color: "#2B58A4" }}>{section8Constants.headerp2}</span>
      </h1>
      <h2 className="Section8SubHeader">{section8Constants.para1}</h2>
      <Carousel8 cards={section8Constants.cards} />
    </div>
  );
}

export default Section8Mobile;
