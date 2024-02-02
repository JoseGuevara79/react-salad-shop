import React from 'react';
import "./Header.css";
import logo from "../../assets/Logo.png"
import { BiSearchAlt, BiUser} from 'react-icons/bi';
import { BsHeartFill } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import callIcon from "../../assets/call icon.svg";

const Header = () => {
  return (
    <div className='header-container flex justify-center items-center'>

        <div className='logo-search-cont'>
          <img src={logo} alt=""/>
          <div className='search-cont'>
            <BiSearchAlt className='icon'/>
            <input type="text" placeholder='Search Products' />
          </div>
        </div>

        <div className='contact-social-cont'>

          <div className='contact'>
              <img src={callIcon} alt="" />
            <p> Call Us <br /> <span>+009 000 000</span> </p>
          </div>

          <div className='social-icon-cont'>
            <div className='headerIcon'>
              <BiUser className='headerIcon-size' />
            </div>
          
            <div className='headerIcon'>
              <BsHeartFill className='headerIcon-size'/>
            </div>

            <div className='headerIcon'>
              <BsCart2 className='headerIcon-size'/>
            </div>

          </div>
        </div>
    </div>
  );
};

export default Header;