import { LAYOUT_IMG } from "app/images";
import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`header ${scrollY >= 50 ? "blur-class" : ""}`}>
      <div className="container-fluid">
        <div className="navigation_bar">
          <Link onClick={() => setChecked(false)} to="/">
            <img src={LAYOUT_IMG.headerLogo} alt="logo" className="logo" />
          </Link>
          <input
            type="checkbox"
            id="check"
            onClick={() => setChecked(!checked)}
          />
          <label htmlFor="check" className="icons overlay">
            <div className="bx bx-menu" id="menu-icon">
              {!checked ? <Menu /> : <X />}
            </div>
            <div className="bx bx-x" id="close-icon"></div>
          </label>
          <div className={`navbar ${checked ? "nav-active" : ""}`}>
            <Link
              onClick={() => setChecked(false)}
              to="/"
              className="nav-item"
              style={{ "--i": "0" }}
            >
              Home
            </Link>
            <Link
              onClick={() => setChecked(false)}
              to="/about"
              className="nav-item"
              style={{ "--i": "1" }}
            >
              About
            </Link>
            <Link
              onClick={() => setChecked(false)}
              to="/services"
              className="nav-item"
              style={{ "--i": "2" }}
            >
              Services
            </Link>
            <Link
              onClick={() => setChecked(false)}
              to="/contact-us"
              className="nav-item"
              style={{ "--i": "3" }}
            >
              Contact
            </Link>
            <Link
              onClick={() => setChecked(false)}
              target={"_blank"}
              to={"https://clients.nubinity.com"}
              className="nav-button"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
