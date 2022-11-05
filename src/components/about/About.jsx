import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import {RiFolderSettingsFill} from 'react-icons/ri'
import {useTranslation} from "react-i18next"

const About = () => {
  const { t } = useTranslation(["about"]);

  return (
    <section id='about'>
     <h5>{t("gettoknow")}</h5>
     <h2>{t("aboutme")}</h2>
    <div className="container about__container">
      <div className="about__me">
       <div className="about__me-image">
        <img src={ME} alt="About Image" />
       </div>
      </div>
      <div className="about__content">
       <div className="about__cards">
        <article className='about__card'>
          <FaAward className='about__icon'/>
          <h5>{t("experience")}</h5>
          <small> {t("yearworking")}</small>
        </article>

        <article className='about__card'>
          <AiOutlineUsergroupAdd className='about__icon'/>
          <h5>{t("clients")}</h5>
          <small> {t("worldwide")}</small>
        </article>

        <article className='about__card'>
          <RiFolderSettingsFill className='about__icon'/>
          <h5>{t("projects")}</h5>
          <small>{t("completed")}</small>
        </article>
       </div>
         <p>
          
         </p>
         <a href="#contact" className='btn btn-primary'>{t("letstalk2")}</a>

      </div>
    </div>

    </section>
  )
}

export default About
