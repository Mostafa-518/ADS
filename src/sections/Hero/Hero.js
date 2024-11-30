import "./Hero.css";
import React from "react";
import HeroData from "../../Data/HeroData";


const Hero = () => {
  const HeroCards = HeroData.map((project) => {
    return (
      <div key={project.id} className="col-lg-3 col-md-6 col-sm-12 Square">
        <img src={project.imgSrc} alt={project.alt} />
      </div>
    );
  });

  return (
    <>
      <div className="hero-main">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12  Square">
            <div className="hero-text">
              <h4 className="hero-title">ADS | Aldalaty Design Studio</h4>
              <p className="hero-subtitle">
                Architektur Kreativität und trifft Design Funktionalität
                <br /> <br />Ihr Partner für innovative Architektur <br /><br />
                Effiziente Planung, Beratung und Bauleitung für alle Bautyben
                Spezialiert auf Wohnbauten und Bestandsentwicklung LPH 1-4
              </p>
            </div>
          </div>
          {HeroCards}
        </div>
      </div>
    </>
  );
};

export default Hero;
