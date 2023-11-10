import React from 'react';
import { Link } from 'react-router-dom';

const FuturedComponents = () => {
  return (
    <div className='FutureComponents'>
         <Link to='/projects' className="boxContainer">
          <h2>100+</h2>
          <span>Completed Projects</span>
        </Link>
        <Link to='/projects' className="boxContainer">
          <h2>React</h2>
          <h2>Expert</h2>
        </Link>
        <Link to='/fineart' className="boxContainer">
          <h2>Fine Art</h2>
          <span>Painter</span>
        </Link>
        <Link to='/about' className="boxContainer">
            <h2>Years</h2>
          <span>of Experience</span>
        </Link>
    </div>
  )
}

export default FuturedComponents