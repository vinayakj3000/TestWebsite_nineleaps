import React, { useState, useEffect } from "react";
import "../Sections/Section8.css";
import Section6Background from "./../Assets/Section6Background.png";
import section6QuoteMark from "./../Assets/section6QuoteMark.png";
import { section6Constants } from "../Constants/Constants";
const Carousel6 = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNextSlide = () => {
    const nextIndex = (currentIndex + 1) % cards.length;
    setCurrentIndex(nextIndex);
  };

  const goToPrevSlide = () => {
    const prevIndex = currentIndex === 0 ? cards.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="carousel">
      {/* <button onClick={goToPrevSlide}>Prev</button> */}
      <div className="card-container">
        <div
          className="grid-card6"
          style={{
            backgroundImage: `url(${Section6Background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <div className="grid-card6Part1">
            <img src={section6QuoteMark} style={{ marginTop: "-10px" }}></img>
          </div>
          <div className="grid-card6Part2">
            <h2 className="card-title6">{cards[currentIndex].text}</h2>
            <div className="card-title6N">
              <div className="card-description6">{cards[currentIndex].name}</div>
              <div className="card-subdescription6">
                {cards[currentIndex].title}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <button onClick={goToNextSlide}>Next</button> */}
    </div>
  );
};

export default Carousel6;
