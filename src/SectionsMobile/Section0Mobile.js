import React from "react";
import { section0Constants } from "../Constants/Constants";
import "./Section0Mobile.css";

function Section0Mobile() {
  return (
    <div className="Section0MobileMain">
      {" "}
      <p1 className="Section0SubHeader2">
        Home {">"} Services {">"}
        <span style={{ fontWeight: "bold" }}> Data Engineering</span>

      </p1>
      <h1 className="Section0HeaderMobile">{section0Constants.headerp1} </h1>
      <p1 className="Section0SubHeaderMobile">{section0Constants.para1}</p1>
      <button className="Section0ButtonMobile">
        {section0Constants.button}
      </button>
    </div>
  );
}

export default Section0Mobile;
