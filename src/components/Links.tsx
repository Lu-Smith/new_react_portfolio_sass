import React from 'react';
import { Link } from 'react-router-dom';
import { PiCoffee } from 'react-icons/pi';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { TfiEmail, TfiInfoAlt } from 'react-icons/tfi';
import { LuPalette } from 'react-icons/lu';

const Links = () => {
  return (
    <div className="linkContainer">
    <Link to='/'><span><PiCoffee /></span>Home</Link>
    <Link to='/projects'><span><AiOutlineFundProjectionScreen /></span>Projects</Link>
    <Link to='/fineart'><span><LuPalette /></span>Art</Link>
    <Link to='/about'><span><TfiInfoAlt /></span>About</Link>
    <Link to='/contact'><span><TfiEmail /></span>Contact</Link>
  </div>
  )
}

export default Links