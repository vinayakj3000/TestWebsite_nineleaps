import React, { useState, useEffect } from "react";
import "../Sections/Section8.css";


const Carousel4 = ({ cards }) => {
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
    <div className="carousel" style={{height:"fixed"}}>
      {/* <button onClick={goToPrevSlide}>Prev</button> */}
      <div className="card-container">
        <div className="grid-card6">
          <div className="grid-card">
            <h1 className="section4CardHeader">{cards[currentIndex].header}</h1>
            <p1 className="section4CardText">{cards[currentIndex].text}</p1>
          </div>
        </div>
      </div>
      {/* <button onClick={goToNextSlide}>Next</button> */}
    </div>
  );
};

export default Carousel4;
