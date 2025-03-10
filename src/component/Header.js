import React from 'react'
import styles from "./header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerText}>SUPRAJA BETHI</h1>
      <div className={styles.navItems}>
      <a href='#about-me' className={styles.anchor}>
      <i className= {`fa-solid fa-user ${styles.icons}`}></i>
      <span className={styles.subHeadingText}>About Me</span>
      </a>
      <a href='#experience' className={styles.anchor}> 
      <i className={`fa-solid fa-award ${styles.icons}`}></i>
      <span className={styles.subHeadingText}>Experience</span>
      </a>
      <a href='#projects' className={styles.anchor}>
      <i className={`fa-solid fa-diagram-project ${styles.icons}`}></i>
      <span className={styles.subHeadingText}>Projects</span>
      </a>
      </div>

    </header>
   

  )
}