import React from 'react';
import './styles/app.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//elements
import Home from './pages';
import Projects from './pages/projects';
import Contact from './pages/contact';
import About from './pages/about';
import WebDesigns from './pages/webdesigns';
import Games from './pages/games';
import FineArt from './pages/fineart';
import DigitalArt from './pages/digitalart';

function App() {
  
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/webdesings" element={<WebDesigns />} />
          <Route path="/games" element={<Games />} />
          <Route path="/fineart" element={<FineArt />} />
          <Route path="/digitalart" element={<DigitalArt />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
