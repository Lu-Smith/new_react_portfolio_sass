import React from 'react';
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='Navbar'>
      <h1>Luna Smith</h1>
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
         href="//www.youtube.com/watch?v=5aBwg6IMwGo"
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