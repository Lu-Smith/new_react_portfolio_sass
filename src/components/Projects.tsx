import React from 'react'
import projects from '../assets/content/projects';


const Projects = () => {
  return (
    <div className='Projects'>
      <h2>Projects</h2>
      {projects.map((project, index) => {
        return <div className={project.title} key={index}>
          {project.project.map((item, index) => {
            return <div key={index}>{item.title}</div>
          })}
        </div>
      })}

    </div>
  )
}

export default Projects