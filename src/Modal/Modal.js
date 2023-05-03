import React from "react";
import "./Modal.css";
const Modal = ({ onClose }) => {
  return (
    <div className="Modalapp">
      <div className="modal-content">
        {/* <button className="close-btn" onClick={onClose}>
          Close
        </button> */}
        <div className="ModalMain">
          <h2>
            Ready to embark on a transformative product engineering journey?
          </h2>
          <h3>Full Name</h3>
          <input placeholder="Enter your full name"></input>
          <h3>Email Address</h3>
          <input placeholder="Enter Your email address"></input>
          <h3>Organization</h3>
          <input placeholder="Enter your organziation name"></input>
          <h3>Message(Optional)</h3>
          <input placeholder="Enter your message"></input>
          <div className="btnModalll">
            <button className="Section5BannerButton2" onClick={onClose}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal