import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me-test.gif'
import HeaderSocial from './HeaderSocials'
import {useTranslation} from "react-i18next"
import { useState, useEffect } from 'react'
import {gsap,Power3} from 'gsap'
import SplitType from 'split-type'

const Header = () => {

  const myText = new SplitType('#my-text')
  
  gsap.to ('.char', {
    y: 0,
    stagger: 0.05,
    delay: 0.2,
    duration: .1
  }, 'Start')
  
  let t1 = gsap.timeline ({
    delay: 0.3
  });

  useEffect (() => {
    t1.from ('.me1', {y:30, opacity:0, ease:Power3.easeOut,delay:0.2}, 'Start')
    t1.from ('.toplogo', {y:-30, opacity:0, ease:Power3.easeOut,delay:0.2}, 'Start')
    .from('.toptext',1, { y:30, ease: Power3.easeOut,opacity:0,delay: 0}, 'Start')
  }, [])  



  const { t } = useTranslation(["header"]);
  

  return (
    <header>
      <CTA/>
      <h1 class="toplogo"><span className='anatex'><span className='tex'>esamedow</span></span></h1>
      <div className="container header__container">
        <h5 className='toptext toptextmargin'>{t("hello")}</h5> 
        <h1 class="toptext" id='my-text'>{t("elvin")}</h1>
        
        <h5 className="text-light">{t("frontend")}</h5>
        
        
        <div className='me me1'>
          
        </div>
        <a href="#contact" className='scroll__down topbutton'>{t("scrolldown")}</a>
      </div>
    </header>
  )
}

export default Header