import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'
import {useTranslation} from "react-i18next"
import { useEffect } from 'react'
import {gsap,Power3} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin (ScrollTrigger);


const Services = () => {
  
  let t1 = gsap.timeline ({
    delay: 0.3
  });

  useEffect (() => {
    gsap.from('.text3',{
      duration: 1,
      y: '25',
      opacity: 0,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: '.text3',
        start : 'top 90%',
        toggleActions: 'restart none none reset',
      }
    })
    gsap.from('.art1trig',{
      duration: 1,
      y: '25',
      opacity: 0,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: '.art1trig',
        start : 'top 90%',
        toggleActions: 'restart none none reset',
      }
    })
    gsap.from('.art2trig',{
      duration: 1,
      y: '25',
      opacity: 0,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: '.art2trig',
        start : 'top 90%',
        toggleActions: 'restart none none reset',
      }
    })
    gsap.from('.art3trig',{
      duration: 1,
      y: '25',
      opacity: 0,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: '.art3trig',
        start : 'top 90%',
        toggleActions: 'restart none none reset',
      }
    })

  }, [])  


  const { t } = useTranslation(["services"]);

  return (
    <section id='services'>
      <h5 className='text3'>{t("whatioffer")}</h5>
      <h2 className='servh2 text3'>{t("services")}</h2>
      <div className="container services__container">
        <article className="service art1trig">
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

      <article className="service art2trig">
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
      <article className="service art3trig">
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