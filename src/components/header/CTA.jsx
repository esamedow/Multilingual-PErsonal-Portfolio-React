import React from 'react'
import CV from '../../assets/cv.pdf'
import {useTranslation} from "react-i18next"
import { useEffect } from 'react'
import i18next from 'i18next'
import ReactCountryFlag from "react-country-flag"

const CTA = () => {
  const { i18n, t } = useTranslation(["header"]);

  useEffect (() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
}, []);

  const handleLanguageChange = (e) => {
  i18n.changeLanguage (e.target.value);
};


  return (
    <div className='cta'>
         <a href={CV} download className='btn'>{t("downloadcv")}</a>
         <a href="#contact" className='btn btn-primary headercontactbtn'>{t("letstalk1")}</a>
         <select className='btn btn-primary' id="" 
         onChange={handleLanguageChange}
         value={localStorage.getItem("i18nextLng")}>
           <option value="en">EN</option>
           <option value="ru">RU</option>
           <option value="tr">TR</option>
           <option value="tr">AZ</option>
         </select>
    </div>
  )
}

export default CTA