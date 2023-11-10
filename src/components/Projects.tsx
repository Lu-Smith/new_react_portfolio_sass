import React, { useState } from 'react';
import projects from '../assets/content/projects';
import Sidebar from './Sidebar';
import { LiaExternalLinkAltSolid } from 'react-icons/lia';

const Projects = () => {

  const [mode, setMode] = useState('dark');

  const handleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`Projects ${mode === 'light' ? 'lightMode' : 'darkMode'}`}>
      <div className='menu'>
        <Sidebar mode={mode} handleMode={handleMode} />
      </div>
      <div className="componentContainer">
        <h2>Projects</h2>
        {projects.map((project, index) => {
          return <div className={project.title} key={index}>
            <div className="projectsContainer">
              <h3>{project.title}</h3>
              <div 
              className={project.title === 'Futured Projects' ? 'futured' : 
              project.title === 'Games' ? 'game' : 'project'}>
                {project.project.map((item, index) => {
                  return <a href={item.href} key={index} target='_blank' rel="noreferrer">
                        <div className="imageContainer">
                          <img src={item.src} alt={item.title} />
                        </div>
                        <h4>{item.title}<LiaExternalLinkAltSolid /></h4>
                  </a>
                })}
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Projects