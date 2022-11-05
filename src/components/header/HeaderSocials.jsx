import React from 'react'
import {FaTelegram} from 'react-icons/fa'
import {SlSocialVkontakte} from 'react-icons/sl'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
           <a href="https://t.me/+79884665089" target="_blank"><FaTelegram/></a>
           <a href="https://vk.com/esamedow" target="_blank"><SlSocialVkontakte/></a>
           <a href="https://instagram.com/esamedow" target="_blank"><BsInstagram/></a>

    </div>
  )
}

export default HeaderSocials