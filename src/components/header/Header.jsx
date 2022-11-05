import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'
import {useTranslation} from "react-i18next"

const Header = () => {
  const { t } = useTranslation(["header"]);
  

  return (
    <header>
      <div className="container header__container">
        <h5>{t("hello")}</h5>
        <h1>{t("elvin")}</h1>
        <h5 className="text-light">
        {t("frontend")}
        </h5>
        <CTA/>
        <HeaderSocial/>
        <div className='me'>
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>{t("scrolldown")}</a>
      </div>
    </header>
  )
}

export default Header