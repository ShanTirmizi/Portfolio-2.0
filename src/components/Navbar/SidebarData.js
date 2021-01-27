import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Bio',
    link: 'NavBio',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav__text'
  },
  {
    title: 'Projects',
    link: 'NavProjects',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav__text'
  },
  {
    title: 'Get in touch',
    link: 'NavContact',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav__text'
  }
];