import React from 'react';
import { Link } from 'react-router-dom';
import ProfileImage from '../../assets/media/Luna_Smith.jpg';
import { FaRegLightbulb, FaMoon } from 'react-icons/fa';
import Links from './Links';

interface ModeProps {
  mode: string,
  handleMode: () => void,
};

const Sidebar = ({ mode, handleMode }: ModeProps) => {

  return (
    <div className={`Sidebar ${mode === 'light' ? 'lightMode' : 'darkMode'}`}>
      <div className="titleContainer">
        <Link to="/">
          <div className="imageContainer">
            <img src={ProfileImage} alt="Luna Smith's profile" title="Luna Smith's profile" loading="lazy" width="auto" height="auto" />
          </div>
          <h2><span>L</span>una <span>S</span>mith</h2>
        </Link>
      </div>
      <Links /> 
      <div className="mode">
        <button className="container" onClick={handleMode}>
        {mode === 'light' && <span><FaRegLightbulb /></span>}
        {mode === 'dark' && <span><FaMoon /></span>}
        Mode
        </button>  
      </div>
      <div className="box">
        <Link to='/games'>
          <div className="container">
              Games
          </div> 
        </Link> 
      </div>
    </div>
  )
}

export default Sidebar