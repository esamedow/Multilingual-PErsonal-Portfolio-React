import React from 'react'
import './footer.css'
import {FaTelegramPlane} from 'react-icons/fa'
import {BsGithub, BsInstagram} from 'react-icons/bs'
import {SlSocialVkontakte} from 'react-icons/sl'
import {FaFacebookF} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {BsReddit} from 'react-icons/bs'
import {useTranslation} from "react-i18next"
import { AiOutlineGithub } from 'react-icons/ai'

const Footer = () => {
  const { t } = useTranslation(["footer"]);

  return (
    <footer>
      <a href="#" className='footer__logo'>ESAMEDOW</a>

      <ul className='permalinks'>
        <li> <a href="#">{t("home")}</a></li>
        <li> <a href="#about">{t("about")}</a></li>
        <li> <a href="#experience">{t("experience")}</a></li>
        <li> <a href="#services">{t("services")}</a></li>
        <li> <a href="#">{t("downcv")}</a></li>
        <li> <a href="#contact">{t("contact")}</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/esamedow" target="_blank">
          <BsGithub/>
        </a>
        <a href="https://instagram.com/esamedow" target="_blank">
          <BsInstagram/>
        </a>
        <a href="https://vk.com/esamedow" target="_blank">
          <SlSocialVkontakte/>
        </a>
        <a href="https://t.me/+79884665089" target="_blank">
          <FaTelegramPlane/>
        </a>
        <a href="https://www.facebook.com/elvin.samedov.3914" target="_blank">
          <FaFacebookF/>
        </a>
        <a href="https://twitter.com/samedowen" target="_blank">
          <BsTwitter/>
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2022 ESAMEDOW - All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer