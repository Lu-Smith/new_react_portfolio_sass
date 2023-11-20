import React from 'react'
import { motion } from 'framer-motion'
import InteractiveBackground from '../Animations/InteractiveBackground'
import TopBackground from '../Animations/TopBackground'

interface PageProps {
  artwork: string[]
}

const imageRotateVariants = {
  hover: { scale: 0.8, rotate: 3600, transition: { duration: 0.3 } },
};

const PageThree: React.FC<PageProps> = ({ artwork }) => {
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
        {artwork.map((art, index:number) => {
          return <motion.div 
          key={index}
          className="imageContainer "
          whileHover="hover"
          variants={imageRotateVariants}
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
      </div>
    </div> 
  </div>
  )
}

export default PageThree