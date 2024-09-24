import Navbar from "./Navbar";
import Hero from "./Hero";
import Menu from '../Menu/Menu';

interface ModeProps {
  mode: string,
  handleMode: () => void,
};

const Home = ({mode, handleMode}: ModeProps) => {

  return (
    <div className={`Home ${mode === 'light' ? 'lightMode' : 'darkMode'}`}>
        <Menu mode={mode} handleMode={handleMode} />
        <div className="mainContainer">
            <Navbar mode={mode} />
            <Hero mode={mode} />
        </div>
    </div>
  )
}

export default Home