import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUserCheck} from 'react-icons/fa'
import {MdLaptopChromebook} from 'react-icons/md'
import {RiMessage2Fill} from 'react-icons/ri'
import { useState } from 'react'
import {MdOutlineWork} from 'react-icons/md'

const Nav = () => {
  const [activeNav, setActiveNav] = useState ('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><FaUserCheck/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} ><MdLaptopChromebook/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''} ><MdOutlineWork/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} ><RiMessage2Fill/></a>   
    </nav>
  )
}

export default Nav