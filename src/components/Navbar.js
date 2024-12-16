import React from "react";
import { useGlobalContext } from "../context";

// import images
import shape14 from "../images/shape-14.png";

const Navbar = () => {
  const { navOpen, setNavOpen } = useGlobalContext();
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <nav className={navOpen ? "navbar wrapper open" : "navbar wrapper"}>
        <div className="navbar__logo">
          <img src={shape14} alt="little learners logo" />
          <p>Little learners</p>
        </div>
        <div className="navbar__desctop-links">
          <a href="/" onClick={toggleNav}>
            Home
          </a>
          <a href="/" onClick={toggleNav}>
            About Us
          </a>
          <a href="/" onClick={toggleNav}>
            Academics
          </a>
          <a href="/" onClick={toggleNav}>
            Admisssions
          </a>
          <a href="/" onClick={toggleNav}>
            Student Life
          </a>
          <a href="/" onClick={toggleNav}>
            Contacts
          </a>
        </div>
        <div
          className={navOpen ? "navbar__hamburger open" : "navbar__hamburger"}
          onClick={toggleNav}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <nav className={navOpen ? "nav-mobile nav-mobile-open" : "nav-mobile"}>
        <a href="/" onClick={toggleNav}>
          Home
        </a>
        <a href="/" onClick={toggleNav}>
          About Us
        </a>
        <a href="/" onClick={toggleNav}>
          Academics
        </a>
        <a href="/" onClick={toggleNav}>
          Admisssions
        </a>
        <a href="/" onClick={toggleNav}>
          Student Life
        </a>
        <a href="/" onClick={toggleNav}>
          Contacts
        </a>
      </nav>
    </>
  );
};

export default Navbar;
