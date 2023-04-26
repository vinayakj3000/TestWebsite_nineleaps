import React, { useState } from "react";
import "./Section3.css";

function Section3() {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: "Card 1",
      text: "Text for Card 1",
    },
    {
      id: 2,
      title: "Card 2",
      text: "Text for Card 2",
    },
    {
      id: 3,
      title: "Card 3",
      text: "Text for Card 3",
    },
    {
      id: 4,
      title: "Card 4",
      text: "Text for Card 4",
    },
    {
      id: 5,
      title: "Card 5",
      text: "Text for Card 5",
    },
    {
      id: 6,
      title: "Card 6",
      text: "Text for Card 6",
    },
  ];

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
  };

  return (
    <div className="diamond-cards-container">
      {cards.map((card) => (
        <>
          {card.id !== 1 && <div>........</div>}
          <div
            key={card.id}
            className={`diamond-card${
              selectedCard === card.id ? " selected" : ""
            }`}
            onClick={() => handleCardClick(card.id)}
          >
            {/* <span className="dot" /> */}

            <div className="diamond-shape">
              <span className="diamond-content">{card.title}</span>
            </div>
            {selectedCard === card.id && (
              <div className="card-text">{card.text}</div>
            )}
          </div>
        </>
      ))}
    </div>
  );
}

export default Section3;
