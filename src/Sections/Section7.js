import React, { useEffect, useState } from "react";
import "../Styling/Section7.css";
import { section7Constants } from "../Constants/Constants";
import Section7Image from "../Assets/Section7Image.png";
import Section7Image1 from "../Assets/Section7Image1.png";
import Section7Image2 from "../Assets/Section7Image2.png";
import Section7Image3 from "../Assets/Section7Image3.png";
import Section7Image4 from "../Assets/Section7Image4.png";

function Section7() {
  const [images, setImages] = useState([
    Section7Image1,
    Section7Image2,
    Section7Image3,
    Section7Image4,
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="Section7Main">
      <div className="Section7Left">
        <h1 className="Section7Header">
          {section7Constants.headerp1}{" "}
          <span style={{ color: "#2B58A4" }}>{section7Constants.headerp2}</span>
        </h1>
        <p className="Section7SubHeader">{section7Constants.para1}</p>
        <button className="Section7Button">{section7Constants.button}</button>
      </div>
      <div className="Section7Right">
        <div className="image-container">
          <img
            src={Section7Image}
            alt="Section7Image"
            className="bottom-image"
          ></img>
          <div>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index}`}
                className="top-image"
                style={{ display: index === currentIndex ? "block" : "none" }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section7;
