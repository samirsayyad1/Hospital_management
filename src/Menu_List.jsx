import React, { useEffect, useState } from "react";
import { FaBars, FaIdBadge, FaCartPlus } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdCloseCircleOutline, IoIosPaper } from "react-icons/io";
import { MdGroup } from "react-icons/md";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import Mnu_list from './Component/Mnu_list.css'
import { SidebarData } from "./SidebarData";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

import All_Doctor from "./Doctors/All_Doctor";
import Add_Doctor from "./Doctors/Add_Doctor";
import Doctors_Profile from './Doctors/Doctors_Profile'

import Apoitment_form from "./Apoitment/Apoitment_form";
import All_Apoinment from "./Apoitment/All_Apoinment";
import axios from "axios";

export default function Navbar() {
  const [ sidebar, setSidebar ] = useState(false);
  const [ dropdownVisible, setDropdownVisible ] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const [ patientData, setPatientData ] = useState(false)

  const PatientToggle = () => {
    setPatientData(!patientData)
  }

  const [ isDropdownVisible, setDropdownVisibility ] = useState(false);

  const toggleDropdowns1 = () => {
    setDropdownVisibility(!isDropdownVisible)
  }

  const [ isapoinment, setIsapoinment ] = useState(false);

  const ShowApoinment = () => {
    setIsapoinment(!isapoinment)
  }
  return (
    <>
      <IconContext.Provider value={ { color: "#FFF" } }>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={ showSidebar } />
            <img
              onClick={ toggleDropdowns1 }
              className="Menu_Profile"
              src="https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?b=1&s=612x612&w=0&k=20&c=VsTsa0kjyZ7ALe-nyKAUfynyRxZo8H4LRMdu_ecPuOY="
              alt=""
            />
          </Link>

          { isDropdownVisible && (
            <div className="dropdown-menu">
              <ul className="nav-menu-items">
                <li className="nav-text">
                  <Link to="/">
                    <span>Login</span>
                  </Link>
                </li>

                <li className="nav-text">
                  <Link to="/Register">
                    <span>Sign In</span>
                  </Link>
                </li>
              </ul>
            </div>
          ) }
        </div>
        <nav style={ { position: 'fixed' } } className={ sidebar ? "nav-menu active" : "nav-menu" }>

          <ul className="nav-menu-items" >
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars" style={ { position: 'absolute', right: '50px' } }>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <br /><br />
            <li onClick={ showSidebar } className="nav-text">
              <Link to="/">
                <IoIosPaper />
                <span>Dashbord</span>
              </Link>
            </li>
            <div onClick={ toggleDropdown }>
              <li className="nav-text">
                <Link to="#">
                  <i class="fa-sharp fa-solid fa-user-doctor"></i>
                  <span>Doctors</span>
                </Link>
              </li>
              { dropdownVisible && (
                <ul onClick={ showSidebar } className="dropdown-items">
                  <li className="nav-text">
                    <Link to="/All_Doctor">
                      <IoIcons.IoIosPaper />
                      <span>All Doctors</span>
                    </Link>
                  </li>
                  <li onClick={ showSidebar } className="nav-text">
                    <Link to="/Add_Doctor">
                      <i class="fa-solid fa-cart-plus"></i>
                      <span>Add Doctor</span>
                    </Link>
                  </li>
                  <li onClick={ showSidebar } className="nav-text">
                    <Link to="/Doctors_Profile">
                      <IoIcons.IoIosPaper />
                      <span>Doctors Profile</span>
                    </Link>
                  </li>
                </ul>
              ) }
            </div>
            <div onClick={ ShowApoinment }>
              <li className="nav-text">
                <Link to="#">
                  <i class="fa-regular fa-folder-open"></i>
                  <span>Apoinment</span>
                </Link>
              </li>
              { isapoinment && (
                <ul onClick={ showSidebar } className="dropdown-items">
                  <li className="nav-text">
                    <Link to="/All_Apoinment">
                      <IoIcons.IoIosPaper />
                      <span>All Apoinment</span>
                    </Link>
                  </li>
                  <li onClick={ showSidebar } className="nav-text">
                    <Link to="/Apoitment_form">
                      <i class="fa-solid fa-cart-plus"></i>
                      <span>Add Apoinment</span>
                    </Link>
                  </li>

                </ul>
              ) }
            </div>
            <div onClick={ PatientToggle }>
              <li className="nav-text">
                <Link to="#">
                  <MdGroup />
                  <span>Patient</span>
                </Link>
              </li>
              { patientData && (
                <ul className="dropdown-items">
                  <li onClick={ showSidebar } className="nav-text">
                    <Link to="/All_Patient">
                      <IoIcons.IoIosPaper />
                      <span>All Patient</span>
                    </Link>
                  </li>
                  <li onClick={ showSidebar } className="nav-text">
                    <Link to="/Add_Patient">
                      <IoIcons.IoIosPaper />
                      <span>Add Patient</span>
                    </Link>
                  </li>
                  <li onClick={ showSidebar } className="nav-text">
                    <Link to="/Patient_Profile">
                      <IoIcons.IoIosPaper />
                      <span>Patient Profile</span>
                    </Link>
                  </li>

                </ul>
              ) }
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
