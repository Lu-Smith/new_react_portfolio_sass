import React  from 'react';
import Sidebar from '../Sidebar/Sidebar';
import MobileSidebar from '../Sidebar/MobileSidebar';
import Bio from './Bio';
import Work from './Work';

interface ModeProps {
  mode: string,
  handleMode: () => void,
};

const About = ({mode, handleMode}: ModeProps) => {

  return (
    <div className={`About ${mode === 'light' ? 'lightMode' : 'darkMode'}`}>
          <div className='menu'>
        <Sidebar mode={mode} handleMode={handleMode} />
      </div>
      <div className='menuMobile'>
        <MobileSidebar mode={mode} handleMode={handleMode} />
      </div>
      <div className="componentContainer">
          <Bio mode={mode} />
      </div>
    </div>
  )
}

export default About