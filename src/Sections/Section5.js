import React from "react";
import "./Section5.css";
import { section5Constants } from "../Constants/Constants";

function Section5() {
  return (
    <div className="Section5Main">
      <h1 className="section2Header">
        {section5Constants.headerp1}{" "}
        <span style={{ color: "#2B58A4" }}>{section5Constants.headerp2}</span>
      </h1>
      <h2 className="section2SubHeader">{section5Constants.para1}</h2>

      {/* <div className="Section5CardsWrapper">
        {section5Constants.cards.map((item) => (
          <div>
            <img src={item.image} alt={item.image} />
            <h1 className="Section5CardHeader">{item.header}</h1>
            <p1 className="Section5CardText">{item.text}</p1>
          </div>
        ))}
      </div> */}

      <div className="grid-container5">
        {section5Constants.cards.map((card) => (
          <div className="grid-card5" key={card.image}>
            <img src={card.image} alt={card.title} />
            <div className="Section5CardHeader">{card.header}</div>
            <p className="Section5CardText">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section5;
