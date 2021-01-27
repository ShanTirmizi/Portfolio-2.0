import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-scroll';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { CgMenuMotion } from "react-icons/cg";
import { ImCross } from "react-icons/im";



function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

//   const navLink = document.querySelectorAll('.nav__link');   

//     function linkAction(){
//     /*Active link*/
//     navLink.forEach(n => n.classList.remove('active'));
//     this.classList.add('active');
  
//   /*Remove menu mobile*/
//     const navMenu = document.getElementById('nav-menu')
//     navMenu.classList.remove('show')
// }
//     navLink.forEach(n => n.addEventListener('click', linkAction));

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          {/* <Link  className='menu-bars'> */}
            <div className="menu-bars">
                <CgMenuMotion onClick={showSidebar} 
                style={sidebar ? {color: "var(--color-6)"} : {color: 'var(--color-7)'}} />
            </div>
          {/* </Link> */}
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle' >
              {/* <Link to='#' className='menu-bars'> */}
                {/* <div className="">
                    <ImCross />
                </div> */}
              {/* </Link> */}
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  {/* <Link to={item.path}> */}
                    <Link to={item.link} smooth={true} duration={1000} onClick={showSidebar}>
                        {/* {item.icon} */}
                        <span>{item.title}</span>
                    </Link>
                    
                  {/* </Link> */}
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