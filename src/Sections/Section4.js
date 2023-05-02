import React from "react";
import "./Section4.css";
import section4Image from "../Assets/Section4Image.png";
import { section4Constants } from "../Constants/Constants";
import section4ImageTab from "../Assets/section4ImageTab.png";

function Section4(showComponent) {
  return (
    <div className="section4Main">
      <div className="Section4Left">
        <h2 className="Section4Header">
          {section4Constants.headerp1}{" "}
          <span style={{ color: "#2B58A4" }}>{section4Constants.headerp2}</span>
        </h2>
        <p1 className="Section4SubHeader">{section4Constants.para1}</p1>

        <div className="Section4Cards">
          <div className="grid-container">
            {section4Constants.cards.map((item) => (
              <div className="grid-row">
                <div className="grid-card">
                  <div className="section4CardHeader">{item.headerp1}</div>
                  <div className="section4CardHeader2">{item.headerp2}</div>
                  <p1 className="section4CardText">{item.text}</p1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="Section4Right">
        {!showComponent.showComponent ? (
          <img src={section4ImageTab} alt="section4ImageTab" className="section4ImageTab"></img>
        ) : (
          <img src={section4Image} alt="section4Image"></img>
        )}
      </div>
    </div>
  );
}

export default Section4;
