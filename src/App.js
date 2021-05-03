import './App.scss';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import PortfliosPage from './Pages/PortfoliosPage';
import ContactPage from './Pages/ContactPage';
import SkillsPage from './Pages/SkillsPage';
import { useState } from 'react';

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () =>{
    setNavToggle(!navToggle)
  }

  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content" id="home">
        <div className="content">
          <HomePage />
        </div>
      </div>
      <div className="main-content" id="about">
        <div className="content">
          <AboutPage />
        </div>
      </div>
      <div className="main-content" id="skills">
        <div className="content">
          <SkillsPage />
        </div>
      </div>
      <div className="main-content" id="portfolio">
        <div className="content">
          <PortfliosPage />
        </div>
      </div> 
      <div className="main-content" id="contact">
        <div className="content">
          <ContactPage />
        </div>
      </div>
    </div>
  );
}

export default App;
