import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import { Header, Footer } from "./sections";
import { Container } from "./component";
import { Home,ProjectPage,Kontakt,Entwürfe,Portfolio } from "./pages";



const App = () => {




  return (
    <>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<ProjectPage/>} />
            <Route path="/Kontakt" element={<Kontakt/>} />
            <Route path="/Entwürfe" element={<Entwürfe/>} />
            <Route path="/Portfolio" element={<Portfolio/>} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  );
};

export default App;
