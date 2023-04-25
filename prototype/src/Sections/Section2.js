import React from "react";
import { section2Constants } from "../Constants/Constants";

function Section2() {
  return (
    <div className="section2Main">
      <h1 className="section2Header">
        {section2Constants.headerp1}{" "}
        <span style={{ color: "#2B58A4" }}>{section2Constants.headerp2}</span>
      </h1>
      <h2 className="section2SubHeader">{section2Constants.para1}</h2>
      <div className="section2CardWrapper">
        {section2Constants.cards.map((item) => (
          <div className="section2CardIndividual">
            <h1 className="section2CardsHeader">{item.header}</h1>
            <p1 className="section2CardsText">{item.text}</p1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section2;
