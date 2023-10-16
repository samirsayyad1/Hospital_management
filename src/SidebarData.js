import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { MdGroup } from 'react-icons/md';
import Mnu_list from './Component/Mnu_list.css'


export const SidebarData = [
  {
    title: "Apoinment",
    path: "/Apoinment",
    icon: <FaIcons.FaIdBadge />,
    cName: "nav-text"
  },
 
  {
    title: "Dashbord",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "Doctors",
    path: "/Doctors",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text dropdowns"
  },
  {
    title: "Apoinment",
    path: "/Apoinment",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text"
  },
  {
    title: 'Doctors', // Add a dropdown for Doctors
    icon: <MdGroup />,
    cName: 'nav-text .dropdown',

    subNav: [
      {
        title: 'View All',
        path: '/doctors/viewall',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Apoinment',
        path: '/doctors/addnew',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Doctors",
        path: "/Doctors",
        icon: <IoIcons.IoIosPaper />,
        cName: "nav-text"
      },
      {
        title: "Apoinment",
        path: "/Apoinment",
        icon: <FaIcons.FaCartPlus />,
        cName: "nav-text"
      },
    
    ],
  },
//   {
//     title: "Team",
//     path: "/team",
//     icon: <IoIcons.IoMdPeople />,
//     cName: "nav-text"
//   },
//   {
//     title: "Messages",
//     path: "/",
//     icon: <FaIcons.FaEnvelopeOpenText />,
//     cName: "nav-text"
//   },
//   {
//     title: "Support",
//     path: "/support",
//     icon: <IoIcons.IoMdHelpCircle />,
//     cName: "nav-text"
//   }
];
