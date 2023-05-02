import React from "react";
import "./Section0.css";
import section0back from "../Assets/section0back.png";
import section0Laptop from "../Assets/section0Laptop.png";
import Section0shadow from "../Assets/Section0shadow.png";
import { section0Constants } from "../Constants/Constants";

function Section0() {
  return (
    <div className="Section0Main">
      {/* <div className="Section0Left"></div> */}
      <div
        className="Section0Right"
        style={{
          backgroundImage: `url(${section0back})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "59%",
          height: "29.6rem",
          backgroundPosition: "100% 74%",
          padding: "2vw 8.19vw 2vw 8.19vw",
          display: "flex",
        }}
      >
        <div className="Section0Left">
          <p1 className="Section0SubHeader2">
            Home {">"} Services {">"}{" "}
            <span style={{ fontWeight: "bold" }}> Data Engineering</span>
          </p1>

          <h1 className="Section0Header">{section0Constants.headerp1} </h1>
          <p1 className="Section0SubHeader">{section0Constants.para1}</p1>
          <button className="Section0Button">{section0Constants.button}</button>
        </div>

        <div className="Section0Rigdht">
          <img
            src={section0Laptop}
            alt="laptop"
            className="laptopTransition"
          ></img>
          <img src={Section0shadow} alt="laptop" className="image2Sec1"></img>
        </div>
      </div>
    </div>
  );
}

export default Section0;
