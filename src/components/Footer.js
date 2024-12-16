import React from "react";
// import images
import logo from "../images/shape-14.png";
import letter from "../images/letter-Icon.png";
import phone from "../images/phone-Icon.png";
import location from "../images/location-Icon.png";

const Footer = () => {
  return (
    <footer className="footer wrapper">
      <div className="footer__contacts-header">
        <img src={logo} alt="" width="30px" height="30px" />

        <h3>Little Learners</h3>
      </div>
      <div className="footer__contacts-contact">
        <img src={letter} alt="" />
        <p>hello@littlelearners.com</p>
      </div>
      <div className="footer__contacts-contact">
        <img src={phone} alt="" />
        <p>+91 91813 23 2309</p>
      </div>
      <div className="footer__contacts-contact">
        <img src={location} alt="" />
        <p>Somewhere in the World</p>
      </div>
    </footer>
  );
};

export default Footer;
