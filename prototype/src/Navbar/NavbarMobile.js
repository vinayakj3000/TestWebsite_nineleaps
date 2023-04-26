import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/NineleapsLogo.png";

function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo2">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className="navbarItems3">---</div>
    </nav>
  );
}

export default NavbarMobile;
