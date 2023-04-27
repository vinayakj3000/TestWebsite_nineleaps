import React from "react";
import "./Footer.css";
import logo from "../Assets/NineleapsLogo2.png";

function FooterMobile(showComponent) {
  console.log("f",showComponent.showComponent);
  return (
    <footer className="footerMobile">
      <div className="FooterMobileP1">
        <img src={logo} alt="Logo" />
      </div>
      <div className="FooterMobileP2">
        <div className="footerMobilecol">
          <h3>Company</h3>
          <ul>
            <li>About us</li>
            <li>Blog</li>
            <li>Contact us</li>
            <li>Pricing</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <div className="footerMobilecol">
          <h3>Support</h3>
          <ul>
            <li>Help center</li>
            <li>Terms of service</li>
            <li>Legal</li>
            <li>Privacy policy</li>
            <li>Status</li>
          </ul>
        </div>
        {showComponent.showComponent && (
          <div className="footerMobilecol">
            <h3>Stay up to date</h3>
            <input placeholder="Your email address"></input>
          </div>
        )}
      </div>

      <hr className="hrTag" />
      <div className="FooterMobileP3">
        <li>All rights reserved</li>
      </div>
    </footer>
  );
}

export default FooterMobile;
