import React, { useState } from "react";
import "./Carousel.css";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// import { cards } from "./cards"; // assuming you have imported the `cards` constant

export const Carousel8Tab = ({ cards }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => prev - 2);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => prev + 2);
  };

  return (
    <div className="Carousel8Tab">
      <div className="Carousel8Tabwrapper">
        {cards.slice(currentSlide, currentSlide + 2).map((card, index) => (
          <div key={index} className="carousel-card">
            <img src={card.image} alt={card.title} style={{ width: "100%" }} />
            <div className="carousel8CardTitle">{card.title}</div>
            <div className="carousel8Cardsecription">{card.text}</div>
            <div className="ReadMore">Read more {">"} </div>
          </div>
        ))}
      </div>
      <div className="carousel-buttons">
        {/* <button onClick={prevSlide} disabled={currentSlide === 0}>
          <FaAngleLeft />
        </button>
        <button onClick={nextSlide} disabled={currentSlide >= cards.length - 2}>
          <FaAngleRight />
        </button> */}
      </div>
    </div>
  );
};
