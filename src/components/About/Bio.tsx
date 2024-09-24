import React, { useState } from 'react';
import Events from './Events';
import BioImage from '../../assets/media/BioImage.jpg';

interface ModeProps {
    mode: string,
  };

const Bio = ({ mode }: ModeProps) => {

    const [displayEvents, setDisplayEvents] = useState(false);

    const handleEvents = () => {
        setDisplayEvents(prevEvents => !prevEvents);
      };

  return (
    <div className={`Bio ${mode === 'light' ? 'lightMode' : 'darkMode'}`}>
        <h2>About</h2>
        <div className="bioContainer">
          <div className="imageContainer">
            <img src={BioImage} alt="Luna Smith" title="Luna Smith" loading="lazy" width="auto" height="auto"/>
          </div>
          <div className="bioDescription">
            <p>I am a web developer and artist from Edinburgh, Scotland, combining my creative background in fine arts with modern web technologies. My journey as a creator began with a love for nature and art, winning my first competition in primary school, which set me on a lifelong path of creativity. Over the years, I’ve developed my technical skills while staying rooted in my artistic passion, specializing in building responsive, user-friendly web applications using technologies like JavaScript, Python, React, and Vue.</p> 
            <p>Living in various countries has shaped my approach to both art and coding, exposing me to diverse cultures, languages, and environments. This global perspective influences my work, whether I’m developing sleek websites or creating oil paintings. I specialize in expressive oil painting, where I use bold brushstrokes and finger techniques to capture not just the surface but the soul of my subjects. My work has been featured in exhibitions in Edinburgh, Italy, and China, and I continue to explore new creative frontiers.</p> 
            <p>As a web developer, I thrive on solving technical challenges and merging functionality with aesthetics, recently developing a fully responsive online store for LuArt Gallery. Outside of coding and art, I’m inspired by Norse mythology and Celtic culture, weaving these ancient stories and symbols into my projects. My passion for both art and technology drives me to continuously learn and push the boundaries of what’s possible in both fields.</p>
            <p>Through my art, I express a deep connection to life, nature, and cultural traditions. My legacy as a talented Scottish painter with a unique perspective is a testament to my enduring passion for capturing the essence of the world around me.</p>
          </div>
          <button onClick={handleEvents}>Events</button>
          {displayEvents && <Events mode={mode} />}
        </div>
    </div>
  )
}

export default Bio