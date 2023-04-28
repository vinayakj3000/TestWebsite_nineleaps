import React from "react";
import "./Section0Mobile.css";
import section0back from "../Assets/section0back.png";
import section0Laptop from "../Assets/section0Laptop.png";
import Section0shadow from "../Assets/Section0shadow.png";
import { section0Constants } from "../Constants/Constants";

function Section0TabPart2() {
  return (
    <div className="Section0MobileMain2">
      <div
        className="Section0Right"
        style={{
          backgroundImage: `url(${section0back})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "94%",
          height: "19.6rem",
          backgroundPosition: "right center",
          padding: "2vw 28.19vw 2vw 28.19vw",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="Section0RigdhtMobile">
          <img
            src={section0Laptop}
            alt="laptop"
            className="laptopTransitionMobile"
          ></img>
          <img
            src={Section0shadow}
            alt="laptop"
            className="image2Sec1Mobile"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Section0TabPart2;
