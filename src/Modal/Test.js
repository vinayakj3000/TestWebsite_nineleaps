import React, { useState } from "react";
import Modal from "./Modal";

const Test = () => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="Modalapp">
      <button className="open-modal-btn" onClick={handleButtonClick}>
        Open Modal
      </button>
      {showModal && <Modal onClose={handleCloseModal} />}
    </div>
  );
};

export default Test;
