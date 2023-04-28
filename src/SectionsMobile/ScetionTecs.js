import React, { useState, useEffect } from 'react';
import './ScetionTecs.css';
import Section3Small1 from "../Assets/section3/Section3Small1.png";
import Section3Small2 from "../Assets/section3/Section3Small2.png";
import Section3Small3 from "../Assets/section3/Section3Small3.png";
import Section3Small4 from "../Assets/section3/Section3Small4.png";
import Section3Small5 from "../Assets/section3/Section3Small5.png";
import Section3Small6 from "../Assets/section3/Section3Small6.png";
import Section3Large1 from "../Assets/section3/Section3Large1.png";
import Section3Large2 from "../Assets/section3/Section3Large2.png";
import Section3Large3 from "../Assets/section3/Section3Large3.png";
import Section3Large4 from "../Assets/section3/Section3Large4.png";
import Section3Large5 from "../Assets/section3/Section3Large5.png";
import Section3Large6 from "../Assets/section3/Section3Large6.png";


function Card({ index, image, enlargedImage, header, text, isActive, onSlide }) {
  const handleClick = () => {
    onSlide(index);
  };

  return (
    <div
      className={`card ${isActive ? "active" : "inactive"}`}
      onClick={handleClick}
    >
      <div className="card-image">
        <img src={isActive ? enlargedImage : image} alt={header} />
      </div>
      <div className="card-header">{header}</div>
      <div className="card-text">{text}</div>
    </div>
  );
}

function ScetionTecs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlide = (index) => {
    setActiveIndex(index);
  };

  const cards = [
    {
      index: 1,
      image: Section3Small1,
      enlargedImage: Section3Large1,
      header: "Assess",
      text: "Understand your business objectives, data landscape, and pain points.",
    },
    {
      index: 2,
      image: Section3Small2,
      enlargedImage: Section3Large2,
      header: "Strategize",
      text: "Develop a customized data strategy that aligns with your goals and vision.",
    },
    {
      index: 3,
      image: Section3Small3,
      enlargedImage: Section3Large3,
      header: "Analyse",
      text: "In-depth analysis of existing and potential data sources",
    },
    {
      index: 4,
      image: Section3Small4,
      enlargedImage: Section3Large4,
      header: "Build",
      text: "Create a robust data architecture and pipeline design that meets your requirements.",
    },
    {
      index: 5,
      image: Section3Small5,
      enlargedImage: Section3Large5,
      header: "Execute",
      text: "Deploy tailored data solutions that optimize performance with the right DataOps Strategy.",
    },
    {
      index: 6,
      image: Section3Small6,
      enlargedImage: Section3Large6,
      header: "Maintain",
      text: "Provide ongoing support & maintenance to ensure the continued success of your data initiatives.",
    },
  ];

  return (
    <div className="card-slider">
      {cards.map((card, index) => (
        <Card
          key={card.index}
          index={card.index}
          image={card.image}
          enlargedImage={card.enlargedImage}
          header={card.header}
          text={card.text}
          isActive={activeIndex === index}
          onSlide={handleSlide}
        />
      ))}
    </div>
  );
}

export default ScetionTecs;

