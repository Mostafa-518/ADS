import "./Hero.css";
import React from "react";
import home01 from "../../assets/images/HomeFotos/slids2.jpg";
import home02 from "../../assets/images/HomeFotos/slids3.jpg";
import home03 from "../../assets/images/HomeFotos/slids4.jpg";
import home04 from "../../assets/images/HomeFotos/slids11.jpg";
import home05 from "../../assets/images/HomeFotos/slids10.jpg";
import home06 from "../../assets/images/HomeFotos/slids9.jpg";
import home07 from "../../assets/images/HomeFotos/slids8.jpg";

const Hero = () => {
  const HeroPages = [
    { id: 1, imgSrc: home01, alt: "Project 1" },
    { id: 2, imgSrc: home02, alt: "Project 2" },
    { id: 3, imgSrc: home03, alt: "Project 3" },
    { id: 4, imgSrc: home04, alt: "Project 4" },
    { id: 5, imgSrc: home05, alt: "Project 5" },
    { id: 6, imgSrc: home06, alt: "Project 6" },
    { id: 7, imgSrc: home07, alt: "Project 7" },
  ];

  return (
    <>
        <div className="hero-main">
      <div className="row">
        <div className="col-lg-3 col-sm-6 mb-sm-3 hero-text">
          <h4 className="hero-title mb-4">ADS | Aldalaty Design Studio</h4>
          <p className="hero-subtitle">
            Architektur Kreativität und trifft Design Funktionalität Ihr Partner
            für innovative Architektur Effiziente Planung, Beratung und
            Bauleitung für alle Bautyben Spezialiert auf Wohnbauten und
            Bestandsentwicklung LPH 1-4
          </p>
        </div>

        {HeroPages.map((project) => (
          <div  className="col-lg-3 col-sm-6 mb-sm-3">
            <div key={project.id} className="image-item">
              <img  src={project.imgSrc} alt={project.alt} />
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Hero;
