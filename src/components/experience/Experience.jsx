import React from 'react'
import './experience.css'
import {MdVerified} from 'react-icons/md'
import {useTranslation} from "react-i18next"



const Experience = () => {
  
  const { t } = useTranslation(["experience"]);
 
   
  
  return (  
    <section id='experience'>
      <h5 >{t("theskills")}</h5>
      <h2 className='myexph2'>{t("myexperience")}</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
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
                 <small className='text-light'>-</small>
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
        <div className="experience__backend">
        <h3>{t("backdev")}</h3>
          <div className="experience__content">
            <article className='experience__details'>
               <MdVerified className='experience__details-icon'/>
               <div>
                 <h4>{t("nodejs")}</h4>
                 <small className='text-light'>-</small>
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