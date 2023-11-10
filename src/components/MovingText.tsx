import React from 'react';
import { motion } from 'framer-motion';

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            duration: 30,
            repeat: Infinity,                
        }
    },
}

const MovingText = () => {
  return (
    <motion.div 
    className="slidingTextContainer" 
    variants={sliderVariants}
    initial="initial"
    animate="animate">
        Creator of code-based masterpieces and fine art.
    </motion.div>
  )
}

export default MovingText