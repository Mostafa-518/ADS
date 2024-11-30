import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";

import { Container } from "component";

const Footer = () => {
  return (
    <>
      <Container>
        <hr
          style={{
            color: "black",
            opacity: "1",
            borderBlockWidth: "3px",
            margin: "30px 0",
          }}
        />
      </Container>

      <section className="footer">
        <div className="footer-wrapper">
          <div className="footer-area">
            <Container>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="single-footer-caption ">
                    <div className="footer-logo mb-25">
                      <a href="index.html">
                        <img src={logo} alt="logo" />
                      </a>
                    </div>
                    <ul className="footer-social">
                      <li>
                        <a
                          href="https://www.instagram.com/aldalaty.ads/"
                          className="ins"
                        >
                          <FaInstagram />
                        </a>
                      </li>
                      <li href="https://www.instagram.com/aldalaty.ads/">
                        <a
                          href="https://www.instagram.com/aldalaty.ads/"
                          className="ins"
                        >
                          @aldalaty.ads
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="single-footer-caption text-center">
                    <h4 className="footer-tittle">Navigation</h4>
                    <div className="links">
                      <div className="link">
                        <Link to="/" className="nav-link">
                          Home
                        </Link>
                      </div>
                      <div className="link">
                        <Link to="/Projekte" className="nav-link">
                          Projekte
                        </Link>
                      </div>
                      <div className="link">
                        <Link to="/Entwürfe" className="nav-link">
                          Entwürfe
                        </Link>
                      </div>
                      <div className="link">
                        <Link to="/Portfolio" className="nav-link">
                          Portfolio
                        </Link>
                      </div>
                      <div className="link">
                        <Link to="/Kontakt" className="nav-link">
                          Kontakt
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="single-footer-caption ">
                    <h4 className="footer-tittle">kontaktiere uns</h4>
                    <div className="links">
                      <div className="link">
                        <Link to="/" className="nav-link">
                          Parallelstr. 66 66538 Neunkirchen Germany
                        </Link>
                      </div>
                      <div className="link">
                        <Link to="/" className="nav-link">
                          +49 6821 329 4540
                        </Link>
                      </div>
                      <div className="link">
                        <Link to="/" className="nav-link">
                          +49 155 6611 7294
                        </Link>
                      </div>
                      <div className="link">
                        <Link
                          hrefLang="info@ads-aldalaty.de"
                          className="nav-link"
                        >
                          info@ads-aldalaty.de
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
          <div className="footer-bottom-area">
            <Container>
              <div className="row">
                <div className="col-12">
                  <div className="footer-copy-right">
                    <p>© ADS|Aldalaty Design Studio</p>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
