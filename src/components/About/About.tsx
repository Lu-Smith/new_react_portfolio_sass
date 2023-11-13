import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import MobileSidebar from '../Sidebar/MobileSidebar';
import Bio from './Bio';
import Work from './Work';

const About = () => {
  const [mode, setMode] = useState('dark');

  const handleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`About ${mode === 'light' ? 'lightMode' : 'darkMode'}`}>
          <div className='menu'>
        <Sidebar mode={mode} handleMode={handleMode} />
      </div>
      <div className='menuMobile'>
        <MobileSidebar mode={mode} handleMode={handleMode} />
      </div>
      <div className="componentContainer">
        <section>
          <Bio mode={mode} />
        </section>
        <section>
          <Work />
        </section>
      </div>
    </div>
  )
}

export default About