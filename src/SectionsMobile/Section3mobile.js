import React, { useState } from "react";
import "./Section3mobile.css";
import { section3Constants } from "../Constants/Constants";

function Section3mobile() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (count == 5) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  return (
    <>
      <div className="Section3mobileMain2">
        <h2 className="Section4Header">
          {section3Constants.headerp1}{" "}
          <span style={{ color: "#2B58A4" }}>{section3Constants.headerp2}</span>
        </h2>
      <p1 className="Section4SubHeader">{section3Constants.para1}</p1>

      </div>


      <div className="Section3mobileMain" onWheel={handleClick}>
        <img src={section3Constants.cards[count].enlargedImage}></img>
        <div className="Section3mobileMainWrapper">
          <div className="Section3mobileMainHeader">
            {section3Constants.cards[count].index}.
            {section3Constants.cards[count].header}
          </div>
          <div className="Section3mobileMainText">
            {section3Constants.cards[count].text}
          </div>
        </div>
      </div>
    </>
  );
}

export default Section3mobile;
