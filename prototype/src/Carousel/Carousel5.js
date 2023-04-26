import React, { useState, useEffect } from "react";
import "../Sections/Section8.css";
const Carousel5 = ({ cards }) => {
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
        <div className="grid-card5" key={cards[currentIndex].image}>
          <img
            src={cards[currentIndex].image}
            alt={cards[currentIndex].title}
            style={{ height: "30vw" }}
          />
          <h2 className="Section5CardHeader">{cards[currentIndex].header}</h2>
          <p className="Section5CardText">{cards[currentIndex].text}</p>
        </div>
        {/* <img
          src={cards[currentIndex].image}
          alt={cards[currentIndex].title}
          style={{ width: "100%" }}
        />
        <h2>{cards[currentIndex].title}</h2>
        <p>{cards[currentIndex].text}</p> */}
      </div>
      {/* <button onClick={goToNextSlide}>Next</button> */}
    </div>
  );
};

export default Carousel5;
