import React from "react";
import "./Section6.css";
import { section6Constants } from "../Constants/Constants";
import Section6Background from "./../Assets/Section6Background.png";
import section6QuoteMark from "./../Assets/section6QuoteMark.png";

function Section6() {
  return (
    <div className="section6Main">
      <h1 className="section2Header">
        {section6Constants.headerp1}{" "}
        <span style={{ color: "#2B58A4" }}>{section6Constants.headerp2}</span>
      </h1>
      <div className="grid-container6">
        {/* <img src="section6QuoteMark" alt="section6QuoteMark"></img> */}
        {section6Constants.cards.map((card) => (
          <div
            className="grid-card6"
            key={card.id}
            style={{ backgroundImage: `url(${Section6Background})` }}
          >
            <h2 className="card-title6">{card.text}</h2>
            <div className="card-title6">
              <p className="card-description6">{card.name}</p>
              <p className="card-subdescription6">{card.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section6;
