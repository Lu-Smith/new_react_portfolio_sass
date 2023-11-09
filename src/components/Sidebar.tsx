import React from 'react';
import { Link } from 'react-router-dom';
import ProfileImage from '../assets/Luna_Smith.jpg';

const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <div className="titleContainer">
        <div className="imageContainer">
          <img src={ProfileImage} alt="Luna Smith's profile" />
        </div>
        <h2>Bridging <strong>Art</strong> and <strong>Web Development</strong></h2>
      </div>
      <div className="linkContainer">
        <Link to='/'>Home</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/fineart'>Art</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
      <div className="box">
          Futured Projects
      </div>
    </div>
  )
}

export default Sidebar