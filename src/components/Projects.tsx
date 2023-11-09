import React, { useState } from 'react';
import projects from '../assets/content/projects';
import Sidebar from './Sidebar';

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
              {project.project.map((item, index) => {
                return <div className="project" key={index}>
                    {/* <a href={item.href}>
                      <div className="imageContainer">
                        <img src={item.src} alt={item.title} />
                      </div>
                      <h3>{item.title}</h3>
                    </a> */}
                </div>
              })}
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Projects