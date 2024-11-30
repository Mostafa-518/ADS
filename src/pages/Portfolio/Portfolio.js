import React from "react";
import "./Portfolio.css";
import { Container } from "component";
import useFetch from "hooks/useFetch";
function Portfolio() {
  const { loading, error, data } = useFetch(
    `${process.env.REACT_APP_BASE_URL}/api/portfolio?populate=*`
  );
  if (loading) return <p>Loading..........</p>;
  if (error) return <p>Error..........</p>;
  
  if (data) {
    console.log(data.data.PortfolioImg.url)
    return (
      <Container>
        <div className="row">
          <div className="col-lg-6">
            <div className="Portfolio-text">
              Ich bin Architekturgestalter mit einem Master of Science von der TU
              Kaiserslautern. Meine berufliche Laufbahn hat es mir ermöglicht,
              verschiedene Bereiche der Architektur und des Bauwesens zu erkunden
              und meine Fähigkeiten in den Bereichen Design, Projektmanagement und
              Bauaufsicht zu vertiefen.
              <br />
              <br />
              Von 2020 bis 2022 war ich als Projektmitarbeiter bei Architektur +
              Raum tätig, wo ich an verschiedenen Architekturprojekten mitgewirkt
              und meine gestalterischen und technischen Fähigkeiten
              weiterentwickelt habe. 2022 habe ich als Assistent der Bauleitung
              bei Goldbeck gearbeitet und dort wertvolle praktische Erfahrungen
              auf Baustellen gesammelt sowie zur Umsetzung von Bauvorhaben
              beigetragen.
              <br />
              <br />
              Seit 2023 bin ich Mitarbeiter im öffentlichen Dienst bei der
              Bauaufsichtsbehörde in Idar-Oberstein, wo ich dafür sorge, dass
              Bauprojekte den geltenden Vorschriften entsprechen. Im Januar 2024
              habe ich ADS Aldalaty Design Studio gegründet, mit dem Ziel,
              innovative und nachhaltige Designlösungen zu schaffen, die sowohl
              funktional als auch ästhetisch überzeugen.
              <br />
              <br />
              Mit meiner Leidenschaft für architektonische Innovation und meinem
              Streben nach Exzellenz setze ich weiterhin neue Maßstäbe im Bereich
              Architektur und Design. <br />
            </div>
          </div>
          <div className="col-lg-6">
            <img src={`${process.env.REACT_APP_BASE_URL}${data.data.PortfolioImg.url}`} alt="" />
          </div>
        </div>
      </Container>
    );
  }
}

export default Portfolio;
