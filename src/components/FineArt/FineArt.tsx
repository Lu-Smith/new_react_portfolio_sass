import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import paintings from '../../assets/content/fineart';
import MobileSidebar from '../Sidebar/MobileSidebar';
import ArtExhibition from './ArtExhibition/ArtExhibition';
import { motion } from 'framer-motion';
import { LiaExternalLinkAltSolid } from 'react-icons/lia';

interface ModeProps {
  mode: string,
  handleMode: () => void,
};

const FineArt = ({mode, handleMode}: ModeProps) => {

  return (
    <div className={`FineArt ${mode === 'light' ? 'lightMode' : 'darkMode'}`}>
         <div className='menu'>
        <Sidebar mode={mode} handleMode={handleMode} />
      </div>
      <div className='menuMobile'>
        <MobileSidebar mode={mode} handleMode={handleMode} />
      </div>
      <div className="componentContainer">
        <h2>Fine Art</h2>
        <div className="artShow">
          <ArtExhibition />
        </div>
        <div className="paintingsContainer">
          {paintings.map((painting, index) => {
            return <div className='paintingsCollection' key={index}>
              <h3>{painting.title}</h3>
              <div className="paintingContainer">
                  {painting.project.map((item, index) => {
                    return <a key={index} className='painting' href={item.link} target='_blank' rel='noreferrer'>
                      <motion.div className="imageContainer"
                      initial={{scale: 0.9}}
                      whileHover={{scale: 1.3}}
                      transition={{ duration: 0.5}}>
                        <img src={item.src} alt={item.title} />
                      </motion.div>
                      <h3>{item.title}</h3>
                    </a>
                  })}
              </div>
            </div>
          })}
           <a 
           href="https://luartgallery.com/" 
           target='_blank'
           rel="noreferrer"
           className='moreArtButton'>More Art <LiaExternalLinkAltSolid /></a>
        </div>
      </div>
    </div>
  )
}

export default FineArt