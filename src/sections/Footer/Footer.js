import React from "react";
import './Footer.css'

import { NavItem } from "component";

const Footer = () => {
  return (
    <>
    <hr style={{border: "2px solid black", margin:"0", opacity:"black"}}/>
    <div className="navbar navbar-expand-md">
      <div className="container text-align-center justify-content-center">
        
          <ul className="w-50 navbar-nav justify-content-around">
            <NavItem>
              <a href="#hero" className="nav-link nav-footer">
              Projekte
              </a>
            </NavItem>
            <NavItem>
              <a href="#features" className="nav-link nav-footer">
              Instagram
              </a>
            </NavItem>
            <NavItem>
              <a href="#faq" className="nav-link nav-footer">
              Impressum
              </a>
            </NavItem>
          </ul>
        </div>
      </div>
    </>
    
  );
};

export default Footer;
