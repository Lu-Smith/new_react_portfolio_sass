import React from 'react';
import { Link } from 'react-router-dom';
import ProfileImage from '../assets/Luna_Smith.jpg';
import { PiCoffee } from 'react-icons/pi';
import { GrProjects } from 'react-icons/gr';
import { TfiEmail, TfiInfoAlt } from 'react-icons/tfi';
import { LuPalette } from 'react-icons/lu';

const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <div className="titleContainer">
        <Link to="/">
          <div className="imageContainer">
            <img src={ProfileImage} alt="Luna Smith's profile" />
          </div>
          <h2><span>L</span>una <span>S</span>mith</h2>
        </Link>
      </div>
      <div className="linkContainer">
        <Link to='/'><PiCoffee />Home</Link>
        <Link to='/projects'><GrProjects />Projects</Link>
        <Link to='/fineart'><LuPalette />Art</Link>
        <Link to='/about'><TfiInfoAlt />About</Link>
        <Link to='/contact'><TfiEmail />Contact</Link>
      </div>
      <div className="box">
        <div className="container">
        Futured Projects
        </div>  
      </div>
    </div>
  )
}

export default Sidebar