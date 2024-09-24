import React  from 'react';
import Sidebar from '../Sidebar/Sidebar';
import MobileSidebar from '../Sidebar/MobileSidebar';

interface ModeProps {
  mode: string,
  handleMode: () => void,
};

const Menu = ({mode, handleMode}: ModeProps) => {

  return (
    <div className={`Menu ${mode === 'light' ? 'lightMode' : 'darkMode'}`}>
      <div className='menu'>
        <Sidebar mode={mode} handleMode={handleMode} />
      </div>
      <div className='menuMobile'>
        <MobileSidebar mode={mode} handleMode={handleMode} />
      </div>
    </div>
  )
}

export default Menu