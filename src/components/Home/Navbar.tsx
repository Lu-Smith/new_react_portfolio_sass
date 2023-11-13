import React from 'react';
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

interface ModeProps {
  mode: string,
};

const Navbar = ({ mode }: ModeProps) => {
  return (
    <div className={`Navbar ${mode === 'light' ? 'lightMode' : 'darkMode'}`}>
      <h1>Bridging <strong>Art</strong> and <strong>Web Development</strong></h1>
      <div className="socialLinks">
      <a   
        href="//www.linkedin.com/in/luna-smith/"
        target="_blank"
        aria-label="LinkedIn page"
        rel="noreferrer">    
           <FaLinkedin />
        </a>
        <a   
        href="//twitter.com/LunaSmithArt"
        target="_blank"
        aria-label="Twitter page"
        rel="noreferrer">    
          <FaTwitter />
        </a>
        <a   
        href="//www.instagram.com/lunasmithart/"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram page">    
          <FaInstagram />
        </a>
        <a   
        href="//www.facebook.com/artlunasmith"
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook page">    
          <FaFacebook />
        </a>
        <a   
        href="https://youtu.be/iZUBQPXnQac?si=Eefl2X11pGkrky06"
        target="_blank"
        aria-label="YouTube page"
        rel="noreferrer">    
          <FaYoutube />
        </a>
      </div>

    </div>
  )
}

export default Navbar