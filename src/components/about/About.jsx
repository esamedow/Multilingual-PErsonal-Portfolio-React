import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import {FaAward} from 'react-icons/fa'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import {RiFolderSettingsFill} from 'react-icons/ri'
import {useTranslation} from "react-i18next"
import { useEffect } from 'react'
import {gsap,Power3} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin (ScrollTrigger);

const About = () => {

  let t1 = gsap.timeline ({
    delay: 0.3
  });

  useEffect (() => {
    gsap.from('.text1',{
      duration: 1,
      y: '25',
      opacity: 0,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: '.text1',
        start : 'top 90%',
        toggleActions: 'restart none none reset',
      }
    })
    gsap.from('.trigcont',{
      duration: 1,
      y: '35',
      opacity: 0,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: '.trigcont',
        start : 'top 105%',
        toggleActions: 'restart none none reset',

      }
    })
    gsap.from('.trigart1',{
      duration: 0.4,
      x: '100',
      opacity: 0,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: '.trigart2',
        start : 'top 90%',
        toggleActions: 'restart none none reset',

      }
    })
    gsap.from('.trigart2',{
      duration: 0.4,
      x: '-100',
      opacity: 0,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: '.trigart3',
        start : 'top 90%',
        toggleActions: 'restart none none reset',

      }
    })
    gsap.from('.trigart3',{
      duration: 0.4,
      x: '100',
      opacity: 0,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: '.trigart3',
        start : 'top 90%',
        toggleActions: 'restart none none reset',

      }
    })
  }, [])  


  const { t } = useTranslation(["about"]);

  return (
    <section id='about'>
     <h5 className='text1'>{t("gettoknow")}</h5>
     <h2 className='abouth5 text1'>{t("aboutme")}</h2>
    <div className="container about__container">
      <div className="about__me trigcont">
       <div className="about__me-image">
        <img src={ME} alt="About Image" />
       </div>
      </div>
      <div className="about__content">
       <div className="about__cards">
        <article className='about__card trigart1'>
          <FaAward className='about__icon'/>
          <h5>{t("experience")}</h5>
          <small> {t("yearworking")}</small>
        </article>

        <article className='about__card trigart2'>
          <AiOutlineUsergroupAdd className='about__icon'/>
          <h5>{t("clients")}</h5>
          <small> {t("worldwide")}</small>
        </article>

        <article className='about__card trigart3'>
          <RiFolderSettingsFill className='about__icon'/>
          <h5>{t("projects")}</h5>
          <small>{t("completed")}</small>
        </article>
       </div>
         <p>
          
         </p>
         <a href="#contact" className='btn btn-primary letstalk2-btn trig-btn-1'>{t("letstalk2")}</a>

      </div>
    </div>

    </section>
  )
}

export default About
