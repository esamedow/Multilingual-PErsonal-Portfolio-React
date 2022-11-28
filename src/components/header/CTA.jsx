import React from 'react'
import CV from '../../assets/cv.pdf'
import {useTranslation} from "react-i18next"
import { useEffect } from 'react'
import i18next from 'i18next'
import ReactCountryFlag from "react-country-flag"
import {gsap, Power3} from 'gsap'
import  {TimelineLite } from 'gsap'

const CTA = () => {

  let t1 = gsap.timeline  ({
    delay: 0.3
  });

  useEffect (() => {
    t1.from ('.cta', {y:-30, opacity:0, ease:Power3.easeOut,delay:0.2}, 'Start')
  }, [])

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
      <div className='cta1 cta '>
         <a href={CV} download className='btn ctaborder'>{t("downloadcv")}</a>
         </div>
         <div className='cta2 cta '>
         <select className='btn btn-primary btn-lang ctaborder' id="" 
         onChange={handleLanguageChange}
         value={localStorage.getItem("i18nextLng")}>
           <option value="en">EN</option>
           <option value="ru">RU</option>
           <option value="tr">TR</option>
           <option value="tr">AZ</option>
         </select>
         </div>
    </div>
  )
}

export default CTA