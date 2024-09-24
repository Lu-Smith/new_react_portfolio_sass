import projects from '../../assets/content/react';
import { LiaExternalLinkAltSolid } from 'react-icons/lia';
import Menu from '../Menu/Menu';

interface ModeProps {
  mode: string,
  handleMode: () => void,
};

const ReactProjects = ( {mode, handleMode}: ModeProps ) => {

  return (
    <div className={`Games ${mode === 'light' ? 'lightMode' : 'darkMode'}`}>
      <Menu mode={mode} handleMode={handleMode} />
      <div className="componentContainer">
        <h2>React Projects</h2>
        {projects.map((project, index) => {
        return <div key={index}>
          {project.title === 'React Projects' && 
            <div className="projectsContainer">
              <div 
              className='game'>
                {project.project.map((item, index) => {
                  return <a href={item.href} key={index} target='_blank' rel="noreferrer">
                    <div className="imageContainer">
                      <img src={item.src} alt={item.title} title={item.title} loading="lazy" width="auto" height="auto"/>
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

export default ReactProjects