import React from "react";
import './Header.css'
import logo from "../../assets/images/logo.jpg";
import { NavItem } from "component";

const Header = () => {
  return (
    <>
      <div className="navbar navbar-expand-md mb-2 py-2">
        <div className="container">
          <a href="#" className="navbar-brand">
            <img style={{ maxWidth: 180 }} src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainmenu">
            <ul className="navbar-nav ms-auto">
              
                <NavItem>
                <a href="#hero" className="nav-link">
                  Home
                </a>
                </NavItem>
              <NavItem>
              <a href="#features" className="nav-link">
                  Projekte
                </a>
              </NavItem>
              <NavItem>
              <a href="#faq" className="nav-link">
                  Entwürfe
                </a>
              </NavItem>
              <NavItem>
              <a href="#faq" className="nav-link">
                  Portfolio
                </a>
              </NavItem>
              <NavItem>
              <a href="./index-ar.html" className="nav-link">
                  Kontakt
                </a>
              </NavItem>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
