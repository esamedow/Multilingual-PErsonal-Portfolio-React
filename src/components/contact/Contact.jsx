import React from 'react'
import './contact.css'
import {FiMail} from 'react-icons/fi'
import {RiWhatsappLine} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

import {useTranslation} from "react-i18next"

const Contact = () => {
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
      <h5>{t("getintouch")}</h5>
      <h2 className='contactmeh2'>{t("contactme")}</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FiMail className='contact__option-icon'/>
            <h4>{t("email")}</h4>
            <h5>admin@esamedow.ml</h5>
            <a href="mailto:admin@esamedow.ml"  target="_blank" className='sendbuttoncolor'>{t("sendaemail")}</a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+7-988-466-50-89</h5>
            <a href="https://wa.me/+79884665089" target="_blank" className='sendbuttoncolor'>{t("sendamessage")}</a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS*/}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder={t("fullname")} required />
          <input type="email" name='email' placeholder={t("youremail")} required />
          <textarea name="message" rows="7" placeholder={t("yourmessage")} required></textarea>
          <button type='submit' className='btn btn-primary sendmessagebtn'>{t("sendmessage")}</button>
        </form>
      </div>
    </section>
  )
}

export default Contact