import React, { useState } from 'react';
import './App.scss';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import { Switch, Route } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import ProjectsPage from './Pages/ProjectsPage';
import ContactPage from './Pages/ContactPage';
import BlogsPage from './Pages/BlogsPage';
import PortfolioPage from './Pages/PortfolioPage';
import ExperiencesPage from './Pages/ExperiencesPage';


const App = (props) => {
  const [navToggle, setNavToggle] = useState(false);
  const navClick = () => {
    setNavToggle(!navToggle)
  }
  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle' : ''}`}>
        <Navbar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">

        <div className="content">
          <Switch>
            <Route exact path="/"><HomePage /></Route>
            <Route exact path="/MyPortFolio"><HomePage /></Route>
            <Route exact path="/about"><AboutPage /></Route>
            <Route exact path="/portfolios"><PortfolioPage /></Route>
            <Route exact path="/projects"><ProjectsPage /></Route>
            <Route exact path="/blogs"><BlogsPage /></Route>
            <Route exact path="/contact"><ContactPage /></Route>
            <Route exact path="/experiences"><ExperiencesPage /></Route>
          </Switch>
        </div>
      </div>
    </div>
  )

}

export default App

