import React from 'react'
import SectionIntroduction from './SectionIntroduction'
import styles from './projects.module.css'
import ImgOverlay from './ImgOverlay'
import pokedex from '../assets/pokedex.png'

export default function Projects() {
  return (
    <section id= "projects">
      
      <div className={styles.wrapper}>
            <SectionIntroduction>PROJECTS</SectionIntroduction>
            <div className={styles.sectionContent}>
              <ImgOverlay
              imgSrc = {pokedex}
              title={"Pokemon App with API Integration"}
              projectLink={'https://pokedex-app-8d1a36.netlify.app/'}
              githubLink={'https://github.com/BethiXSupraja/ReactProjects/tree/main/pokedex'}>
              Built a React.js web app fetching real-time Pokémon data using useEffect and useState for efficient rendering and error handling.
              </ImgOverlay>

              
            </div>

            </div>
      
      </section>
  )
}
