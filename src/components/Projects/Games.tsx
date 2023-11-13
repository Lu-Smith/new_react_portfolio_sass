import React, { useState } from 'react';
import projects from '../../assets/content/projects';
import Sidebar from '../Sidebar/Sidebar';
import { LiaExternalLinkAltSolid } from 'react-icons/lia';
import MobileSidebar from '../Sidebar/MobileSidebar';

const Games = () => {
  const [mode, setMode] = useState('dark');

  const handleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`Games ${mode === 'light' ? 'lightMode' : 'darkMode'}`}>
            <div className='menu'>
        <Sidebar mode={mode} handleMode={handleMode} />
      </div>
      <div className='menuMobile'>
        <MobileSidebar mode={mode} handleMode={handleMode} />
      </div>
        <div className="componentContainer">
          <h2>Games</h2>
          {projects.map((project, index) => {
          return <div key={index}>
            {project.title === 'Games' && 
            <div className="projectsContainer">
              <div 
              className='game'>
                {project.project.map((item, index) => {
                  return <a href={item.href} key={index} target='_blank' rel="noreferrer">
                        <div className="imageContainer">
                          <img src={item.src} alt={item.title} />
                        </div>
                        <h4>{item.title}<LiaExternalLinkAltSolid /></h4>
                  </a>
                })}
              </div>
            </div>}
          </div>
        })}
        </div>
    </div>
  )
}

export default Games