import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience, Feedbacks, 
  Hero, Navbar, Tech, Works, StarsCanvas} from './components';

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 min-h-screen overflow-hidden bg-primary">
        <div className="shader-backdrop" aria-hidden="true" />
        <div className="relative bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <div className="relative z-10">
          <About/>
          <Experience/>
          <Tech/>
          <Works/>
        </div>
        <Feedbacks/>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
