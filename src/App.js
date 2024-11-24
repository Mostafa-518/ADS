import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import {Header, Container, Footer, ProjectSection} from './sections'
import {Hero} from './component';



const App = () => {
  return (
  <>
  <Header/>
  <Container>
   <Hero/>
   <ProjectSection/>
  </Container>
  <Footer/>
  </>

  )
}

export default App
