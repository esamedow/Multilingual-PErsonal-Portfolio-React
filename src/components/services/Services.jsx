import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'
import {useTranslation} from "react-i18next"

const Services = () => {
  const { t } = useTranslation(["services"]);

  return (
    <section id='services'>
      <h5>{t("whatioffer")}</h5>
      <h2 className='servh2'>{t("services")}</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>{t("uxuidesign")}</h3>
          </div>
          <ul className='service__list'>
             <li>
              <BsCheck className='service__list-icon'/>
              <p>{t("soon")}</p>
             </li>
             <li>
              <BsCheck className='service__list-icon'/>
              <p>{t("soon")}</p>
             </li>
             <li>
              <BsCheck className='service__list-icon'/>
              <p>{t("soon")}</p>
             </li>

          </ul>
        </article>
      {/* END OF UX/UI DESIGN */}

      <article className="service">
          <div className="service__head">
            <h3>{t("webdev")}</h3>
          </div>
          <ul className='service__list'>
             <li>
              <BsCheck className='service__list-icon'/>
              <p>{t("soon")}</p>
             </li>
             <li>
              <BsCheck className='service__list-icon'/>
              <p>{t("soon")}</p>
             </li>
             <li>
              <BsCheck className='service__list-icon'/>
              <p>{t("soon")}</p>
             </li>

          </ul>
        </article>
      {/* END OF WEB DEVELOPMENT */}
      <article className="service">
          <div className="service__head">
            <h3>{t("contentcreation")}</h3>
          </div>
          <ul className='service__list'>
             <li>
              <BsCheck className='service__list-icon'/>
              <p>{t("soon")}</p>
             </li>
             <li>
              <BsCheck className='service__list-icon'/>
              <p>{t("soon")}</p>
             </li>
             <li>
              <BsCheck className='service__list-icon'/>
              <p>{t("soon")}</p>
             </li>

          </ul>
        </article>
      {/* END OF CONTENT CREATION*/}
      </div>
    </section>
  )
}

export default Services