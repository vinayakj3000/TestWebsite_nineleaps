import React from "react";
import "./Footer.css";
import logo from "../Assets/NineleapsLogo2.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-col">
        <img src={logo} alt="Logo" />

        <ul>
          <li>Copyright © 2020 Landify UI Kit.</li>
          <li>All rights reserved</li>
        </ul>
      </div>

      <div className="footer-col" style={{ marginLeft: "10vw" }}>
        <h3>Company</h3>
        <ul>
          <li>About us</li>
          <li>Blog</li>
          <li>Contact us</li>
          <li>Pricing</li>
          <li>Testimonials</li>
        </ul>
      </div>
      <div className="footer-col">
        <h3>Support</h3>
        <ul>
          <li>Help center</li>
          <li>Terms of service</li>
          <li>Legal</li>
          <li>Privacy policy</li>
          <li>Status</li>
        </ul>
      </div>
      <div className="footer-col">
        <h3>Stay up to date</h3>
        <input placeholder="Your email address"></input>
      </div>
    </footer>
  );
}

export default Footer;
