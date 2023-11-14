import React, { useState } from 'react';
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

  const [mode, setMode] = useState('dark');

  const handleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };
  
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/" element={<Home mode={mode} handleMode={handleMode} />} />
          <Route path="/contact" element={<Contact mode={mode} handleMode={handleMode} />} />
          <Route path="/about" element={<About mode={mode} handleMode={handleMode} />} />
          <Route path="/projects" element={<Projects mode={mode} handleMode={handleMode} />} />
          <Route path="/games" element={<Games mode={mode} handleMode={handleMode} />} />
          <Route path="/fineart" element={<FineArt mode={mode} handleMode={handleMode} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
