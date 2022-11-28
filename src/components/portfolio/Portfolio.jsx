import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1test.png.gif'
import IMG2 from '../../assets/portfolio2test.gif'
import IMG3 from '../../assets/portfolio3test.gif'
import IMG4 from '../../assets/portfolio1.png'
import IMG5 from '../../assets/portfolio1.png'
import IMG6 from '../../assets/portfolio1.png'
import { useEffect } from 'react'
import {gsap,Power3} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin (ScrollTrigger);



const Portfolio = () => {

  let t1 = gsap.timeline ({
    delay: 0.3
  });

  useEffect (() => {
    gsap.from('.text4',{
      duration: 1,
      y: '25',
      opacity: 0,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: '.text4',
        start : 'top 90%',
        toggleActions: 'restart none none reset',
      }
    })
    gsap.from('.art4trig',{
      duration: 0.6,
      x: '100',
      opacity: 0,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: '.art4trig',
        start : 'top 90%',
        toggleActions: 'restart none none reset',
  
      }
    })
    gsap.from('.art5trig',{
      duration: 0.6,
      x: '-100',
      opacity: 0,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: '.art5trig',
        start : 'top 90%',
        toggleActions: 'restart none none reset',
  
      }
    })
    gsap.from('.art6trig',{
      duration: 0.6,
      x: '100',
      opacity: 0,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: '.art6trig',
        start : 'top 90%',
        toggleActions: 'restart none none reset',
  
      }
    })
  }, [])  


  return (
    <section id='portfolio'>
        <h5 className='text4'>My Recent Work -test</h5>
        <h2 className='portfolioh2 text4'>Portfolio -test</h2>

        <div className="container portfolio__container">
        <article className='portfolio__item art4trig'>
              <div className="portfolio__item-image">
                  <img src={IMG3} alt="" />
              </div>
              <h3>IMA-HOME Early Concept</h3>
                <div className="portfolio__item-cta">
                  <a href="https://github.com/esamedow" className='btn portfolio-btn' target="_blank">Github</a>
                  <a href="hhttps://dribbble.com/shots/18284131-IMA-HOME-Early-Concept" className='btn btn primary  portfolio-btn' target="_blank">Live Demo</a>
                </div>
          </article>
          
          <article className='portfolio__item art5trig'>
              <div className="portfolio__item-image">
                  <img src={IMG2} alt="" />
              </div>
              <h3>Cryptonovae Homepage Animation</h3>
                <div className="portfolio__item-cta">
                  <a href="https://github.com/esamedow" className='btn  portfolio-btn' target="_blank">Github</a>
                  <a href="https://dribbble.com/shots/19966883-Cryptonovae-Homepage-Animation" className='btn btn primary  portfolio-btn' target="_blank">Live Demo</a>
                </div>
          </article>
          <article className='portfolio__item art6trig'>
              <div className="portfolio__item-image">
                  <img src={IMG1} alt="" />
              </div>
              <h3>Logo Animation | Viridis Energy</h3>
                <div className="portfolio__item-cta">
                  <a href="https://github.com/esamedow" className='btn  portfolio-btn' target="_blank">Github</a>
                  <a href="https://dribbble.com/shots/19959984-Logo-Animation-Viridis-Energy" className='btn btn primary  portfolio-btn' target="_blank">Live Demo</a>
                </div>
          </article>
        </div>
    </section>
  )
}

export default Portfolio