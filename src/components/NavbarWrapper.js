import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context";
// import components
import Admission from "./Admission";
import Navbar from "./Navbar";

const NavbarWrapper = () => {
  const { navOpen } = useGlobalContext();

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (prevScrollPos > currentScrollPos) {
        // Scrolling up, show navbar
        setIsVisible(true);
      } else {
        // Scrolling down, hide navbar
        setIsVisible(false);
      }

      prevScrollPos = currentScrollPos;
    };
    if (!navOpen) {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [navOpen]);

  return (
    <div className={isVisible ? "nav-wrapper" : "nav-wrapper nav-hidden"}>
      <Admission />
      <Navbar />
    </div>
  );
};

export default NavbarWrapper;
