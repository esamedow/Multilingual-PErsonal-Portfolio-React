import React from 'react'
import './footer.css'
import {FaTelegramPlane} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {SlSocialVkontakte} from 'react-icons/sl'
import {useTranslation} from "react-i18next"

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
        <li> <a href="#contact">{t("contact")}</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://t.me/+79884665089" target="_blank">
          <FaTelegramPlane/>
        </a>
        <a href="https://instagram.com/esamedow" target="_blank">
          <BsInstagram/>
        </a>
        <a href="https://vk.com/esamedow" target="_blank">
          <SlSocialVkontakte/>
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; ESAMEDOW. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer