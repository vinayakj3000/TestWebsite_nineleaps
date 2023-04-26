import React from "react";
import "../Sections/Section4.css";
import section4Image from "../Assets/Section4ImageMobile.png";
import { section4Constants } from "../Constants/Constants";
import Carousel4 from "../Carousel/Carousel4";

function Section4Mobile() {
  return (
    <div className="section4Main">
      <div className="Section4Left" style={{ height: "110vw" }}>
        <h2 className="Section4Header">
          {section4Constants.headerp1}{" "}
          <span style={{ color: "#2B58A4" }}>{section4Constants.headerp2}</span>
        </h2>
        <p1 className="Section4SubHeader">{section4Constants.para1}</p1>

        {/* <div className="Section4Cards">
          <div className="grid-container">
            {section4Constants.cards.map((item) => (
              <div className="grid-row">
                <div className="grid-card">
                  <h1 className="section4CardHeader">{item.header}</h1>
                  <p1 className="section4CardText">{item.text}</p1>
                </div>
              </div>
            ))}
          </div>
        </div> */}
        <Carousel4 cards={section4Constants.cards} />
      </div>

      <div className="Section4Right">
        <img
          src={section4Image}
          alt="section4Image"
          style={{ width: "100%" }}
        ></img>
      </div>
    </div>
  );
}

export default Section4Mobile;
