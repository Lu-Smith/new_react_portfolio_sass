import React from 'react'
import { motion } from 'framer-motion'
import InteractiveBackground from '../Animations/InteractiveBackground'
import TopBackground from '../Animations/TopBackground'
import AnimatedCircle from '../Animations/AnimatedCircle'

interface PageProps {
  artwork: string[]
}

const PageTwo: React.FC<PageProps> = ({ artwork }) => {
  
  const imageVariants = {
    hover: { scale: 1.1, x: 30, transition: { duration: 0.3 } },
  };

  return (
    <div className='Page'>
      <div className="backgroundContainer">
        <div className="frontBackground">
          <TopBackground />
        </div>
        <div className="backBackground">
          <InteractiveBackground />
        </div>
        <div className="paintings">
        <div className='animatedCircle'>
            <AnimatedCircle />
        </div>
          {artwork.map((art: string, index:number) => {
            return <motion.div 
            key={index}
            className="imageContainer "
            whileHover="hover"
            variants={imageVariants}
            initial="initial" 
            transition={{
              duration: 2,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
              }
            }}>
              <img src={art} alt="An original artwork, created by a Scottish painter, Luna Smith" /> 
            </motion.div>
          })}
          <div className='animatedCircle'>
          <AnimatedCircle />
          <AnimatedCircle />
          </div>
 
        </div>
      </div> 
    </div>
  )
}

export default PageTwo