import React, { useState } from 'react';
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "./Navbar";
import Hero from "./Hero";
import MobileSidebar from '../Sidebar/MobileSidebar';

const Home = () => {

  const [mode, setMode] = useState('dark');

  const handleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`Home ${mode === 'light' ? 'lightMode' : 'darkMode'}`}>
        <MobileSidebar mode={mode} handleMode={handleMode} />
        <Sidebar mode={mode} handleMode={handleMode} />
        <div className="mainContainer">
            <Navbar mode={mode} />
            <Hero mode={mode} />
        </div>
    </div>
  )
}

export default Home