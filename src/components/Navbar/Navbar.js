import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { CgMenuMotion } from "react-icons/cg";



function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
            <div className="menu__bars">
                <CgMenuMotion className="menu__bars__icon" onClick={showSidebar} 
                style={sidebar ? {color: "var(--color-11)"} : {color: 'var(--color-7)'}} />
            </div>
        </div>
        <nav className={sidebar ? 'nav__menu active' : 'nav__menu'}>
          <ul className='nav__menu__items' onClick={showSidebar}>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                    <Link to={item.link} smooth={true} duration={1000} onClick={showSidebar}>
                      <span>{item.title}</span>
                    </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;