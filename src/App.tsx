import React from 'react';
import './styles/app.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//elements
import Home from './pages';
import Projects from './pages/projects';
import Contact from './pages/contact';
import About from './pages/about';
import Games from './pages/games';
import FineArt from './pages/fineart';

function App() {
  
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/games" element={<Games />} />
          <Route path="/fineart" element={<FineArt />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
