import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileImage from '../assets/Luna_Smith.jpg';
import { PiCoffee } from 'react-icons/pi';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { TfiEmail, TfiInfoAlt } from 'react-icons/tfi';
import { LuPalette } from 'react-icons/lu';
import { FaRegLightbulb, FaMoon } from 'react-icons/fa';

const Sidebar = () => {

  const [mode, setMode] = useState('dark');

  const handleMode = () => {
    if(mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  }

  return (
    <div className='Sidebar'>
      <div className="titleContainer">
        <Link to="/">
          <div className="imageContainer">
            <img src={ProfileImage} alt="Luna Smith's profile" />
          </div>
          <h2><span>L</span>una <span>S</span>mith</h2>
        </Link>
      </div>
      <div className="linkContainer">
        <Link to='/'><span><PiCoffee /></span>Home</Link>
        <Link to='/projects'><span><AiOutlineFundProjectionScreen /></span>Projects</Link>
        <Link to='/fineart'><span><LuPalette /></span>Art</Link>
        <Link to='/about'><span><TfiInfoAlt /></span>About</Link>
        <Link to='/contact'><span><TfiEmail /></span>Contact</Link>
      </div>
      <div className="mode">
        <button className="container" onClick={handleMode}>
        {mode === 'light' && <span><FaRegLightbulb /></span>}
        {mode === 'dark' && <span><FaMoon /></span>}
        Mode
        </button>  
      </div>
      <div className="box">
        <div className="container">
        Futured Projects
        </div>  
      </div>
    </div>
  )
}

export default Sidebar