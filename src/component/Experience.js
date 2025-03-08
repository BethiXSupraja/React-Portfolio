import React from 'react'
import styles from './experience.module.css'
import SectionIntroduction from  './SectionIntroduction'
import ListEntry from './ListEntry'
export default function Experience() {
  return (
    <section id ="experience">
       <div className={styles.wrapper}>
            <SectionIntroduction dark={true} >EXPERIENCE</SectionIntroduction>
            <div className={styles.sectionContent}>
              <ListEntry title={'developer'} date={"jan"}>
                 <li></li>
              </ListEntry>
                
            </div>
       
        </div>


    </section>
    )
}
