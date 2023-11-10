import React, { useState } from 'react';

const MobileSidebar = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen((prev) => !prev);
    }

  return (
    <div className='MobileSidebar'>
        {open && <div className="closeMobileSidebar" onClick={handleOpen}>
            <span></span>
            <span></span>
            <span></span>
        </div>}
        {!open && <div className="openMobileSidebar">
            Open
        </div>}
    </div>
  )
}

export default MobileSidebar