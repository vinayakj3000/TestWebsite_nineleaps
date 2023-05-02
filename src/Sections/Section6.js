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
      <div
        className="grid-container6"
        style={{
          backgroundImage: `url(${Section6Background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          // opacity:0.5,
        }}
      >
        {/* <img src="section6QuoteMark" alt="section6QuoteMark"></img> */}
        {section6Constants.cards.map((card) => (
          <div className="grid-card6" key={card.id}>
            <div className="grid-card6Part1">
              <img src={section6QuoteMark} style={{ marginTop: "15px" }}></img>
            </div>
            <div className="grid-card6Part2">
              <h2 className="card-title6WebMain">{card.text}</h2>
              <div className="card-title6Web">
                <div className="card-description6Web">
                  {card.name}
                  <br />
                  <h1 className="card-subdescription6Web">{card.title}</h1>
                </div>
                {/* <div className="card-subdescription6Web">{card.title}</div> */}
              </div>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section6;
