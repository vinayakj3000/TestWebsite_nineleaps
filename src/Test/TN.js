import React, { useState, useEffect } from "react";
import "./Tn.css";
import logo from "../Assets/NineleapsLogo.png";
import logo2 from "../Assets/NineleapsLogo2.png";

function TN() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFaded, setIsFaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0 && !isScrolled) {
        setIsScrolled(true);
      } else if (scrollTop === 0 && isScrolled) {
        setIsScrolled(false);
      }
      if (scrollTop > 100 && !isFaded) {
        setIsFaded(true);
      } else if (scrollTop <= 100 && isFaded) {
        setIsFaded(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled, isFaded]);

  const navClasses = ["Navbar"];
  if (isScrolled) navClasses.push("is-scrolled");
  if (isFaded) navClasses.push("is-faded");

  return (
    <nav className={navClasses.join(" ")}>
      <div className="navbar-logo">
        <a href="/">
          <img src={isScrolled ? logo2 : logo} alt="Logo" 
          className={isScrolled ? "Nlogo" : ""}
          />
        </a>
      </div>
      <div className="navbarItems">
        <div className={isScrolled ? "navbarItems5" : "navbarItems2"}>Home</div>
        <div className={isScrolled ? "navbarItems5" : "navbarItems2"}>
          Services
        </div>
        <div className={isScrolled ? "navbarItems5" : "navbarItems2"}>
          Industries
        </div>
        <div className={isScrolled ? "navbarItems5" : "navbarItems2"}>
          Insights
        </div>
        <div className={isScrolled ? "navbarItems5" : "navbarItems2"}>
          About
        </div>
        <div>Contact Us</div>
      </div>
    </nav>
  );
}

export default TN;
