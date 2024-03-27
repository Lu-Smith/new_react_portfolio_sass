import React from 'react';
import { Link } from 'react-router-dom';
import FuturedComponents from './FuturedComponents';
import { motion} from 'framer-motion';
import OwlSvg from '../Svg/OwlSvg';

interface ModeProps {
  mode: string,
};

const contactVariants = {
  initial: {
      x: 100,
      opacity: 0,
  },
  animate: {
      x: 0,
      opacity: 1,
      transition: {
          duration: 1,
      }
  },
}

const Hero = ({ mode }: ModeProps) => {

  return (
    <div className={`Hero ${mode === 'light' ? 'lightMode' : 'darkMode'}`}>
      <div className="futuredContainer">
        <div className="futuredProjects">
          <FuturedComponents mode={mode} />
        </div>
        <div className="recentProjects">
          <Link to="/projects">
            <OwlSvg />
            <h2>Futured Projects</h2></Link>
        </div>
      </div>
      <div className="messageContainer">
        <Link to='/about' className='mainInfo'>
          <div>
            <h2>A Web Developer with a Brushstroke of Excellence!</h2>
            <span>I'm an artist weaving creativity into every line of code. With a palette of 100+ successful projects, I bring a unique blend of technical prowess and artistic finesse to the digital realm. Let's transform your ideas into web wonders!</span>
          </div>
        </Link>
        <a 
          href="https://luartgallery.com/"
          target='_blank'
          rel="noreferrer"
          aria-label='LuArt Gallery' >
          <div>
            <h2>Check my art gallery</h2>
          </div>
        </a>
        <Link to='/contact' className='contact'>
          <motion.div 
          variants={contactVariants}
          initial="initial"
          animate="animate">
              <h2>Contact me</h2>
          </motion.div>
        </Link>
      </div>
    </div>
  )
}

export default Hero