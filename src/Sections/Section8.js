import React from "react";
import "./Section8.css";
import { section8Constants } from "../Constants/Constants";


function Section8() {
  return (
    <div className="Section8Main">
      <h1 className="section2Header">
        {section8Constants.headerp1}{" "}
        <span style={{ color: "#2B58A4" }}>{section8Constants.headerp2}</span>
      </h1>
      <h2 className="Section8SubHeader">{section8Constants.para1}</h2>

      <div className="grid-container8">
      {section8Constants.cards.map((card) => (
        <div className="grid-card8" key={card.image}>
          <img src={card.image} alt={card.title} />
          <h2 className="card-title8">{card.title}</h2>
          <p className="card-description8">{card.text}</p>
          <a href="/">Read more {">"} </a>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Section8;
