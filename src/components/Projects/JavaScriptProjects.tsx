import projects from '../../assets/content/javascript';
import { LiaExternalLinkAltSolid } from 'react-icons/lia';
import Sidebar from '../Sidebar/Sidebar';
import MobileSidebar from '../Sidebar/MobileSidebar';

interface ModeProps {
  mode: string,
  handleMode: () => void,
};

const JavaScriptProjects = ( {mode, handleMode}: ModeProps ) => {

  return (
    <div className={`Games ${mode === 'light' ? 'lightMode' : 'darkMode'}`}>
      <div className='menu'>
        <Sidebar mode={mode} handleMode={handleMode} />
      </div>
      <div className='menuMobile'>
        <MobileSidebar mode={mode} handleMode={handleMode} />
      </div>
        <div className="componentContainer">
          <h2>JavaScript Projects</h2>
          {projects.map((project, index) => {
          return <div key={index}>
            {project.title === 'JavaScript Projects' && 
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

export default JavaScriptProjects