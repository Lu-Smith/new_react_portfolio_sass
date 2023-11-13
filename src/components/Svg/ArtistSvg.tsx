import React from 'react';
import { motion } from 'framer-motion';

const ArtistSvg = () => {
  const text = "Artist";

  const letterVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="artistSvg"
      initial={{ opacity: 0.8 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3, duration: 2 }}
    >
      <svg
        height="400px"
        width="400px"
        version="1.1"
        strokeWidth="2"
        id="_x32_"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        {text.split('').map((letter, index) => (
          <motion.text
            key={index}
            initial="hidden"
            animate="visible"
            variants={letterVariants}
            transition={{ delay: 0.2 * index, duration: 1 }}
            style={{ fill: 'rgb(27, 24, 29)', 
            stroke: 'rgb(231, 226, 233)', 
            fontSize: '100px', 
            fontFamily: 'Ariel' }}
            x={90 + index * 60}
            y="50%"
          >
            {letter}
          </motion.text>
        ))}
      </svg>
    </motion.div>
  );
};

export default ArtistSvg;







