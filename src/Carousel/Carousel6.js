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
    }, 1000);
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
          style={{ backgroundImage: `url(${Section6Background})` }}
        >
          <h2 className="card-title6">{cards[currentIndex].text}</h2>
          <div className="card-title6">
            <p className="card-description6">{cards[currentIndex].name}</p>
            <p className="card-subdescription6">{cards[currentIndex].title}</p>
          </div>
        </div>
      </div>
      {/* <button onClick={goToNextSlide}>Next</button> */}
    </div>
  );
};

export default Carousel6;
