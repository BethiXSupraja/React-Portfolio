import React from 'react'
import styles from './aboutme.module.css'
import SectionIntroduction from './SectionIntroduction'

export default function Aboutme() {
  return (
    <section id= "about-me" className={styles.aboutMe}>
        <div className={styles.wrapper}>
            <SectionIntroduction>ABOUTME</SectionIntroduction>
            <div className={styles.sectionContent}>
                <p className={styles.paragraph}> I am a <strong>full Stack Developer </strong>with a passion for designing websites</p>
                <p className={styles.paragraph}> I am a <strong>full Stack Developer </strong>with a passion for designing websites</p>

            </div>
       
        </div>
    
        
    </section>
  )
}
