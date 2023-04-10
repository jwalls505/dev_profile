import { BrowserRouter} from 'react-router-dom';

import { About, Contact, Experience,Hero, Navbar, Tech, Works, StarsCanvas } from './components';
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary bg-hero-pattern bg-cover ">
        <div className="bg-hero-patter3  bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
        </div>
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
}

export default App
