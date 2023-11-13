import React from 'react';
import { Link } from 'react-router-dom';
import { PiCoffee } from 'react-icons/pi';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { TfiEmail, TfiInfoAlt } from 'react-icons/tfi';
import { LuPalette } from 'react-icons/lu';
import { RiHomeSmileLine, RiChatSmileLine } from 'react-icons/ri';
import { FaRegSmileBeam, FaHeartbeat } from 'react-icons/fa';
import { MdWorkOutline } from 'react-icons/md';
import { motion } from 'framer-motion';

const linkVariants = {
  initial: {
      x: -500,
      opacity: 0,
  },
  animate: {
      x: -25,
      opacity: 1,
      transition: {
          duration: 1,
          staggerChildren: 0.1,
      }
  },
}

const iconsVariantsShow = {
  initial: {
      opacity: 0,
  },
  animate: {
      opacity: 1,
      transition: {
          duration: 1,
          staggerChildren: 0.1,
      }
  },
}

const iconsVariantsDisapear = {
  initial: {
      opacity: 1,
  },
  animate: {
      opacity: 0,
      transition: {
          duration: 1,
          staggerChildren: 0.1,
      }
  },
}

const Links = () => {
  return (
    <motion.div className="linkContainer"  
    variants={linkVariants}
    initial="initial"
    animate="animate">
    <Link to='/' >
      <motion.div  
      initial="initial"
      whileHover="animate">
        <div>
          <motion.span variants={iconsVariantsDisapear} className='mainIcon'><PiCoffee /></motion.span>
          <motion.span variants={iconsVariantsShow}><RiHomeSmileLine /></motion.span>
        </div>
        <h4>Home</h4>
      </motion.div>
      </Link>
    <Link to='/projects'>
      <motion.div
       initial="initial"
       whileHover="animate">
        <div>
        <motion.span variants={iconsVariantsDisapear} className='mainIcon'><AiOutlineFundProjectionScreen /></motion.span>
        <motion.span variants={iconsVariantsShow}><MdWorkOutline /></motion.span>
        </div>
        <h4>Projects</h4>
      </motion.div>
    </Link>
    <Link to='/fineart'>
      <motion.div
      initial="initial"
      whileHover="animate">
        <div>
        <motion.span variants={iconsVariantsDisapear} className='mainIcon'><LuPalette /></motion.span>
        <motion.span variants={iconsVariantsShow}><FaHeartbeat /></motion.span>
        </div>
        <h4>Art</h4>
      </motion.div>
    </Link>
    <Link to='/about'>
      <motion.div
      initial="initial"
      whileHover="animate">
        <div>
        <motion.span variants={iconsVariantsDisapear} className='mainIcon'><TfiInfoAlt /></motion.span>
        <motion.span variants={iconsVariantsShow}><FaRegSmileBeam /></motion.span>
        </div>
        <h4>About</h4>
      </motion.div>
    </Link>
    <Link to='/contact'>
      <motion.div
      initial="initial"
      whileHover="animate">
        <div>
        <motion.span variants={iconsVariantsDisapear} className='mainIcon'><TfiEmail /></motion.span>
        <motion.span variants={iconsVariantsShow}><RiChatSmileLine /></motion.span>
        </div>
       <h4>Contact</h4>
      </motion.div>
    </Link>
  </motion.div>
  )
}

export default Links