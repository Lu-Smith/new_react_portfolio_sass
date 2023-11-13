import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import paintings from '../../assets/content/fineart';
import MobileSidebar from '../Sidebar/MobileSidebar';

const FineArt = () => {
  const [mode, setMode] = useState('dark');

  const handleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

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
        <div className="paintingsContainer">
          {paintings.map((painting, index) => {
            return <div className='paintingsCollection' key={index}>
              <h3>{painting.title}</h3>
              <div className="paintingContainer">
                  {painting.project.map((item, index) => {
                    return <div key={index} className='painting'>
                      <div className="imageContainer">
                        <img src={item.src} alt={item.title} />
                      </div>
                    </div>
                  })}
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default FineArt