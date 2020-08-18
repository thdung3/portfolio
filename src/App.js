import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import NavBar from './components/NavBar.js'
import HomePage from './containers/HomePage.js'
import EducationPage from './containers/EducationPage'
import AboutPage from './containers/AboutPage'
import SkillPage from './containers/SkillPage'
import ExperiencePage from './containers/ExperiencePage'
import PortfolioPage from './containers/PortfolioPage'

function App() {
  return (
    <body className="App">
      <NavBar />
      <HomePage />
      <AboutPage />
      <EducationPage />
      <ExperiencePage />
      <SkillPage />
      <PortfolioPage />
    </body>
  );
}

export default App;
