import React from 'react'
import {FaTelegram} from 'react-icons/fa'
import {SlSocialVkontakte} from 'react-icons/sl'
import {BsInstagram} from 'react-icons/bs'
import { useEffect } from 'react'
import {gsap,Power3} from 'gsap'
import  {TimelineLite } from 'gsap'


const HeaderSocials = () => {

  let t1 = gsap.timeline  ({
    delay: 0.3
  });

  useEffect (() => {
    t1.from ('.header__socials', {y:30, opacity:0, ease:Power3.easeOut,delay:0.2}, 'Start')
  }, [])

  return (
    <div className='header__socials'>
           <a href="https://t.me/+79884665089" target="_blank"><FaTelegram/></a>
           <a href="https://vk.com/esamedow" target="_blank"><SlSocialVkontakte/></a>
           <a href="https://instagram.com/esamedow" target="_blank"><BsInstagram/></a>

    </div>
  )
}

export default HeaderSocials