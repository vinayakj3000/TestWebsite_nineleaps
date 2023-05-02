import React from "react";
import "./Shapes.css";
import { section3Constants } from "../Constants/Constants";
import Section3Small1 from "../Assets/section3/Section3Small1.png";

function Shapes({ id, selected, onClick, onClose }) {
 

  const handleClick = () => {
    if (selected) {
      onClose();
    } else {
      onClick(id);
    }
  };

  return (
    <div
      className={`shape ${selected ? "enlarged" : ""}`}
      onClick={handleClick}
    >
      <img
        src={
          selected
            ? section3Constants.cards[id - 1].enlargedImage
            : section3Constants.cards[id - 1].image
        }
        // onClick={handleClick}
        className={`shape ${selected ? "enlarged" : ""}`}
      ></img>

      <div className={`text ${selected ? "visible" : ""}`}>
        <div className="Section3TextHeader">
          {section3Constants.cards[id - 1].index}.
          {section3Constants.cards[id - 1].header}
        </div>
        <div className="Section3TextDescription">
          {section3Constants.cards[id - 1].text}
        </div>
      </div>
    </div>
  );
}

export default Shapes;
