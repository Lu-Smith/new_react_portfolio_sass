import React from 'react';
import projects from '../assets/content/projects';

const Projects = () => {
  return (
    <div className='Projects'>
      <h2>Projects</h2>
      {projects.map((project, index) => {
        return <div className={project.title} key={index}>
          <h2>{project.title}</h2>
          <div className="projectsContainer">
            {project.project.map((item, index) => {
              return <div key={index}>
                <div className="project">
                  <a href={item.href}>
                    <h3>{item.title}</h3>
                    <img src={item.src} alt={item.title} />
                  </a>
                </div>
              </div>
            })}
          </div>
        </div>
      })}

    </div>
  )
}

export default Projects