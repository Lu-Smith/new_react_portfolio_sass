import React from 'react';
import { Link } from 'react-router-dom';
import FuturedComponents from './FuturedComponents';

interface ModeProps {
  mode: string,
  handleMode: () => void,
};

const Hero = ({ mode, handleMode }: ModeProps) => {
  return (
    <div className={`Hero ${mode === 'light' ? 'lightMode' : 'darkMode'}`}>
      <div className="futuredContainer">
        <div className="futuredProjects">
          <FuturedComponents />
        </div>
        <div className="recentProjects">
          <Link to="/projects"><h2>Recent Projects</h2></Link>
        </div>
      </div>
      <div className="messageContainer">
        <div className='mainInfo'>
          <Link to='/about'>
            <h2>A Web Developer with a Brushstroke of Excellence!</h2>
            <span>I'm an artist weaving creativity into every line of code. With a palette of 100+ successful projects, I bring a unique blend of technical prowess and artistic finesse to the digital realm. Let's transform your ideas into web wonders!</span>
          </Link>
        </div>
        <div>
            <a 
            href="https://luartgallery.com/"
            target='_blank'
            rel="noreferrer"
            aria-label='LuArt Gallery' >
              <h2>Check my art gallery</h2>
            </a>
        </div>
        <div>
          <Link to='/contact'>
              <h2>Contact me</h2>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero