import React from "react";
import { Link } from "react-router-dom";
import './Header.css'
import logo from "../../assets/images/logo.jpg";
import { NavItem } from "component";

const Header = () => {
  return (
    <>
      <div className="navbar navbar-expand-md mb-2 py-2">
        <div className="container">
          <Link to="/" className="navbar-brand w-25">
            <img style={{ maxWidth: "100%", objectFit:"cover", objectPosition:"center"}} src={logo} alt="" />
          </Link>
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
                <Link to="/" className="nav-link">
                  Home
                </Link>
                </NavItem>
              <NavItem>
              <Link to="/project" className="nav-link">
                  Projekte
                </Link>
              </NavItem>
              <NavItem>
              <Link to="/Entwürfe" className="nav-link">
                  Entwürfe
                </Link>
              </NavItem>
              <NavItem>
              <Link to="/Portfolio" className="nav-link">
                  Portfolio
                </Link>
              </NavItem>
              <NavItem>
              <Link to="/Kontakt" className="nav-link">
                  Kontakt
                </Link>
              </NavItem>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
