import React from 'react'
import "./Navbar.css"
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  return (
    <div className='navbar-container flex justify-center items-center'>
        <div className='navbar-sub-container'>
            <div className='burger-menu'>
                <GiHamburgerMenu className='burger-menu-icon'/>
                <p>SHhort by Departament</p>
            </div>

            <div className='navbar'>
                <ul className='anim-nav'>
                    <li><a href='#!'>Inicio</a></li>
                    <li><a href='#!'>Tienda</a></li>
                    <li><a href='#!'>Pagina</a></li>
                    <li><a href='#!'>Blog</a></li>
                    <li><a href='#!'>Contacto</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar