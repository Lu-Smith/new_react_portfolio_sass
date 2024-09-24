import Bio from './Bio';
import CanvasBackground from './CanvasBackground';
import Menu from '../Menu/Menu';

interface ModeProps {
  mode: string,
  handleMode: () => void,
};

const About = ({mode, handleMode}: ModeProps) => {

  return (
    <div className={`About ${mode === 'light' ? 'lightMode' : 'darkMode'}`}>
      <Menu mode={mode} handleMode={handleMode} />
      <div className="componentContainer">
          <CanvasBackground mode={mode} />
          <Bio mode={mode} />
      </div>
    </div>
  )
}

export default About