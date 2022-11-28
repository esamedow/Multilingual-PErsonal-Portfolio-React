import React from 'react'
import './experience.css'
import {MdVerified} from 'react-icons/md'
import {useTranslation} from "react-i18next"
import { useEffect } from 'react'
import {gsap,Power3} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin (ScrollTrigger);



const Experience = () => {

  let t1 = gsap.timeline ({
    delay: 0.3
  });

useEffect (() => {
  gsap.from('.text2',{
    duration: 1,
    y: '25',
    opacity: 0,
    ease: 'ease-in',
    scrollTrigger: {
      trigger: '.text2',
      start : 'top 90%',
      toggleActions: 'restart none none reset',
    }
  })
  gsap.from('.trigfront',{
    duration: 0.4,
    x: '100',
    opacity: 0,
    ease: 'ease-in',
    scrollTrigger: {
      trigger: '.trigfront',
      start : 'top 90%',
      toggleActions: 'restart none none reset',

    }
  })
  gsap.from('.trigback',{
    duration: 0.4,
    x: '-100',
    opacity: 0,
    ease: 'ease-in',
    scrollTrigger: {
      trigger: '.trigback',
      start : 'top 90%',
      toggleActions: 'restart none none reset',

    }
  })
}, [])  
  
  const { t } = useTranslation(["experience"]);
 
   
  
  return (  
    <section id='experience'>
      <h5  className='text2'>{t("theskills")}</h5>
      <h2 className='myexph2 text2'>{t("myexperience")}</h2>

      <div className="container experience__container">
        <div className="experience__frontend trigfront">
          <h3>{t("frontdev")}</h3>
          <div className="experience__content">
            <article className='experience__details'>
               <MdVerified className='experience__details-icon'/>
               <div>
                 <h4>{t("html")}</h4>
                 <small className='text-light'>{t("advanced")}</small>
                 </div>
            </article>

            <article className='experience__details'>
               <MdVerified className='experience__details-icon'/>
               <div>
                 <h4>{t("css")}</h4>
                 <small className='text-light'>{t("advanced")}</small>
                 </div>
            </article>

            <article className='experience__details'>
               <MdVerified className='experience__details-icon'/>
               <div>
                 <h4>{t("js")}</h4>
                 <small className='text-light'>{t("basic")}</small>
               </div>
            </article>
            <article className='experience__details'>
               <MdVerified className='experience__details-icon'/>
               <div>
                 <h4>{t("bootstrap")}</h4>
                 <small className='text-light'>{t("basic")}</small>
               </div>
            </article>
            <article className='experience__details'>
               <MdVerified className='experience__details-icon'/>
               <div>
                 <h4>{t("react")}</h4>
                 <small className='text-light'>{t("basic")}</small>
               </div>
            </article>
          </div>
        </div>
        <div className="experience__backend trigback">
        <h3>{t("backdev")}</h3>
          <div className="experience__content">
            <article className='experience__details'>
               <MdVerified className='experience__details-icon'/>
               <div>
                 <h4>{t("nodejs")}</h4>
                 <small className='text-light'>{t("basic")}</small>
               </div>
            </article>

            <article className='experience__details'>
               <MdVerified className='experience__details-icon'/>
               <div>
                 <h4>{t("mongodb")}</h4>
                 <small className='text-light'>-</small>
               </div>
            </article>

            <article className='experience__details'>
               <MdVerified className='experience__details-icon'/>
               <div>
                 <h4>{t("php")}</h4>
                 <small className='text-light'>-</small>
               </div>
            </article>
            <article className='experience__details'>
               <MdVerified className='experience__details-icon'/>
               <div>
                 <h4>{t("mysql")}</h4>
                 <small className='text-light'>-</small>
               </div>
            </article>
            <article className='experience__details'>
               <MdVerified className='experience__details-icon'/>
              <div>
                 <h4>{t("python")}</h4>
                 <small className='text-light'>{t("basic")}</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience