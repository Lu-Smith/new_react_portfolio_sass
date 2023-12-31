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
    <div>
        <h2>About</h2>
        <div className="bioContainer">
          <div className="imageContainer">
            <img src={BioImage} alt="Luna Smith" />
          </div>
          <div className="bio">
            <p>I am a professional artist and web developer from Edinburgh, Scotland, deeply rooted in the rich culture and landscapes of my homeland. Since my early years, a profound love for nature and art has guided my creative journey. Winning my first art competition in primary school ignited a passion that has withstood challenges and obstacles, shaping my distinctive artistic style.</p>
            <p>My artistic evolution has been influenced by diverse experiences living in various countries, exposing me to different languages, cultures, customs, architecture, and natural environments. Specializing in oil painting, I am captivated by the medium's thick texture, using vigorous brushstrokes and expressive finger-work to not only capture the surface but also the soul of my subjects.</p>
            <p>With two permanent exhibitions in Italy and China, and a solo exhibition in Edinburgh, my vibrant and energy-infused paintings are sought after by collectors worldwide. Beyond art, I have a profound interest in coding, Norse Mythology, and Celtic culture, finding inspiration in their stories and symbols, which often manifest in the themes and motifs of my work.</p>
            <p>Through my art, I express a deep connection to life, nature, and cultural traditions. My legacy as a talented Scottish painter with a unique perspective is a testament to my enduring passion for capturing the essence of the world around me.</p>
          </div>
          <button onClick={handleEvents}>Events</button>
          {displayEvents && <Events mode={mode} />}
        </div>
    </div>
  )
}

export default Bio