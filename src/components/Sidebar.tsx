import React from 'react';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <Link to='/'>Home</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/fineart'>Art</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  )
}

export default Sidebar