import React from 'react';
import { Link } from 'react-router-dom';
import Art from '../../assets/media/DropletsbyLunaSmith.jpg';
import OwlSvg from '../Svg/OwlSvg';
import { motion } from 'framer-motion';
import ArtistSvg from '../Svg/ArtistSvg';
import WebDevelopeSvg from '../Svg/WebDevelopeSvg';

const artVariants = {
    initial: {
        x: 200,
        y: 200,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 3,
        }
    },
}

const Work = () => {

  return (
    <div className='Work'>
        <div className='owl'>
            <Link to='/projects'>
                    <OwlSvg />
            </Link>
        </div>
        <div>  
            <Link to='/projects'>
                    <WebDevelopeSvg />
            </Link>
        </div>
        <div className='artTitle'>  
            <Link to='/fineart'>
                    <ArtistSvg />
            </Link>
        </div>
        <div className='art'>
            <Link to='/fineart'>
                <div className="imageContainer">
                    <motion.img 
                    src={Art} 
                    alt="Fine art - Life Architect by Luna Smith"
                    animate="animate"
                    initial="initial"
                    variants={artVariants} />
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Work