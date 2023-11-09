import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Home = () => {

  const [mode, setMode] = useState('dark');

  const handleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`Home ${mode === 'light' ? 'lightMode' : 'darkMode'}`}>
        <Sidebar mode={mode} handleMode={handleMode} />
        <div className="mainContainer">
            <Navbar mode={mode} handleMode={handleMode} />
            <Hero mode={mode} handleMode={handleMode} />
        </div>
    </div>
  )
}

export default Home