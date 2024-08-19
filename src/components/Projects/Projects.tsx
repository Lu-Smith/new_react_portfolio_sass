import { useState } from 'react';
import projects from '../../assets/content/projects';
import Sidebar from '../Sidebar/Sidebar';
import { LiaExternalLinkAltSolid } from 'react-icons/lia';
import MobileSidebar from '../Sidebar/MobileSidebar';
import { Link } from 'react-router-dom';

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
      <div className='menuMobile'>
        <MobileSidebar mode={mode} handleMode={handleMode} />
      </div>
      <div className="componentContainer">
        <h2>Projects</h2>
        {projects.map((project, index) => {
          return <div className={project.title} key={index}>
            <div className="projectsContainer">
              <h3>{project.title}</h3>
              <div 
              className={project.title === 'Futured Projects' ? 'futured' : 
              project.title === 'Games' ? 'game' : 
              project.title === 'Vue Projects' ? 'vue' : 'project'}>
                {project.project.map((item, index) => {
                  return <a href={item.href} key={index} target='_blank' rel="noreferrer">
                        <div className="imageContainer">
                          <img src={item.src} alt={item.title} title={item.title} loading="lazy" width="auto" height="auto" />
                        </div>
                        <h4>{item.title}<LiaExternalLinkAltSolid /></h4>
                  </a>
                })}
              </div>
              {project.title === "React Projects" && <Link to="/reactProjects" className='moreGameButton'>More React Projects<LiaExternalLinkAltSolid /></Link>}
              {project.title === "JavaScript Projects" && <Link to="/javaScriptProjects" className='moreGameButton'>More JavaScript Projects<LiaExternalLinkAltSolid /></Link>}
              {project.title === "Games" && <Link to="/games" className='moreGameButton'>More Games<LiaExternalLinkAltSolid /></Link>}
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Projects