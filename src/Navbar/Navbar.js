import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/NineleapsLogo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className="navbarItems">
        <div className="navbarItems2">Home</div>
        <div className="navbarItems2">Services</div>
        <div className="navbarItems2">Industries</div>
        <div className="navbarItems2">Insights</div>
        <div className="navbarItems2">About</div>
        <div >Contact Us</div>
      </div>
    </nav>
  );
}

export default Navbar;
