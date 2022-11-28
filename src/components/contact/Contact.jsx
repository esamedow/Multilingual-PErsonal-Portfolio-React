import React from 'react'
import {useTranslation} from "react-i18next"
import './contact.css'
import {FiMail} from 'react-icons/fi'
import {RiWhatsappLine} from 'react-icons/ri'
import {AiOutlineCheck} from 'react-icons/ai'
import {BiSend} from 'react-icons/bi'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import { useEffect } from 'react'
import {gsap,Power3} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin (ScrollTrigger);


const Contact = () => {

  
  let t1 = gsap.timeline ({
    delay: 0.3
  });

  useEffect (() => {
    gsap.from('.text6',{
      duration: 1,
      y: '25',
      opacity: 0,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: '.text6',
        start : 'top 90%',
        toggleActions: 'restart none none reset',
      }
    })
    gsap.from('.art7trig',{
      duration: 0.4,
      x: '100',
      opacity: 0,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: '.art7trig',
        start : 'top 90%',
        toggleActions: 'restart none none reset',

      }
    })
    gsap.from('.art8trig',{
      duration: 0.4,
      x: '-100',
      opacity: 0,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: '.art8trig',
        start : 'top 90%',
        toggleActions: 'restart none none reset',

      }
    })
    gsap.from('.trigform',{
      duration: 1,
      y: '25',
      opacity: 0,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: '.trigform',
        start : 'top 90%',
        toggleActions: 'restart none none reset',
      }
    })
  }, [])
  const { t } = useTranslation(["contact"]);

  const form = useRef ();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p4q99mx', 'template_mrrr80d', form.current, 'Bdsp_xqlSMFHSU8cw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5 className='text6'>{t("getintouch")}</h5>
      <h2 className='contactmeh2 text6'>{t("contactme")}</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option art7trig">
            <FiMail className='contact__option-icon'/>
            <h4>{t("email")}</h4>
            <h5>admin@esamedow.ml</h5>
            <a href="mailto:admin@esamedow.ml"  target="_blank" className='sendbuttoncolor'>{t("sendaemail")}</a>
          </article>
          <article className="contact__option art8trig">
            <RiWhatsappLine className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+7-988-466-50-89</h5>
            <a href="https://wa.me/+79884665089" target="_blank" className='sendbuttoncolor'>{t("sendamessage")}</a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS*/}

        <form ref={form} onSubmit={sendEmail} className="trigform">
          <input type="text" name='name' placeholder={t("fullname")} required />
          <input type="email" name='email' placeholder={t("youremail")} required />
          <textarea name="message" rows="7" placeholder={t("yourmessage")} required></textarea>


          <button type='submit' className='btn btn-primary sendmessagebtn'>
            <i className='icon-send material-icons'><BiSend/></i>
            <i className='icon-check material-icons'></i>
            <span className='button-text'>{t("sendmessage")}</span>
            </button>


        </form>
      </div>
    </section>
  )
}

export default Contact