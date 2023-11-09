import React from 'react';
import projects from '../assets/content/projects';
import Sidebar from './Sidebar';

interface ModeProps {
  mode: string,
  handleMode: () => void,
};

const Projects = ({ mode, handleMode }: ModeProps) => {
  return (
    <div className='Projects'>
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