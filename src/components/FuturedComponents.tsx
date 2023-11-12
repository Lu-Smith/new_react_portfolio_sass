import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ModeProps {
  mode: string,
};

const futuredVariants = {
  initial: {
      y: -500,
      opacity: 0,
  },
  animate: {
      y: 0,
      opacity: 1,
      transition: {
          duration: 1,
          staggerChildren: 0.1,
      }
  },
}

const FuturedComponents = ({ mode }: ModeProps) => {
  return (
    <motion.div 
    className={`FuturedComponents 
    ${mode === 'light' ? 'lightMode' : 'darkMode'}`}
    variants={futuredVariants}
    initial="initial"
    animate="animate">
         <Link to='/projects' className="boxContainer">
          <h2>100+</h2>
          <span>Completed Projects</span>
        </Link>
        <Link to='/projects' className="boxContainer">
          <h2>React</h2>
          <h2>Expert</h2>
        </Link>
        <Link to='/fineart' className="boxContainer">
          <h2>Fine Art</h2>
          <span>Painter</span>
        </Link>
        <Link to='/about' className="boxContainer">
            <h2>Years</h2>
          <span>of Experience</span>
        </Link>
    </motion.div>
  )
}

export default FuturedComponents