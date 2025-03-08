import React from 'react'
import SectionIntroduction from './SectionIntroduction'
import styles from './projects.module.css'
import moonglade from '../assets/moonglade.png'
import ImgOverlay from './ImgOverlay'

export default function Projects() {
  return (
    <section id= "projects">
      
      <div className={styles.wrapper}>
            <SectionIntroduction>PROJECTS</SectionIntroduction>
            <div className={styles.sectionContent}>
              <ImgOverlay
              imgSrc = {moonglade}
              title={"Project"}
              projectLink={'#'}
              githubLink={'#'}>
              Description of the project
              </ImgOverlay>
              
            </div>

            </div>
      
      </section>
  )
}
