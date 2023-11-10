import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Events from './Events';
import BioImage from '../assets/media/BioImage.jpg';

const About = () => {
  const [mode, setMode] = useState('dark');
  const [displayEvents, setDisplayEvents] = useState(false);

  const handleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const handleEvents = () => {
    setDisplayEvents(prevEvents => !prevEvents);
  };

  return (
    <div className={`About ${mode === 'light' ? 'lightMode' : 'darkMode'}`}>
      <div className='menu'>
        <Sidebar mode={mode} handleMode={handleMode} />
      </div>
      <div className="componentContainer">
        <h2>About</h2>
        <div className="imageContainer">
          <img src={BioImage} alt="Luna Smith" />
        </div>
        <button onClick={handleEvents}>Events</button>
        {displayEvents && <Events />}
      </div>
    </div>
  )
}

export default About