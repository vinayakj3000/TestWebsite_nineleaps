import React, { useState } from "react";
import "./Section3.css";
import Banner5 from "./../Assets/Section5Banner.png";
import { section5BannerConstants } from "../Constants/Constants";
import Modal from "../Modal/Modal";

function Section5Banner() {
  const [showModal, setShowModal] = useState(false);
console.log("showModal",showModal);
  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="Section5BannerWrapper">
      <div
        style={{
          backgroundImage: `url(${Banner5})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          height: "20vw",
        }}
      >
        <div className="Section5BannerMain">
          <h1 className="Section5BannerText">
            {section5BannerConstants.headerp1}
            <br /> {section5BannerConstants.headerp2}
          </h1>
          <button className="Section5BannerButton" onClick={handleButtonClick}>
            {section5BannerConstants.button}
          </button>
          {showModal && <Modal onClose={handleCloseModal} />}
        </div>
      </div>
    </div>
  );
}

export default Section5Banner;
