import React from 'react'
import styles from './aboutme.module.css'
import SectionIntroduction from './SectionIntroduction'

export default function Aboutme() {
  return (
    <section id= "about-me" className={styles.aboutMe}>
        <div className={styles.wrapper}>
            <SectionIntroduction>ABOUT ME</SectionIntroduction>
            <div className={styles.sectionContent}>
                <p className={styles.paragraph}> I am a <strong>full-stack developer</strong> with a passion for designing and developing <strong>responsive, high-performance web applications</strong> that blend functionality with aesthetics.</p>
                <p className={styles.paragraph}> I specialize in building dynamic UIs using <strong>React.js, SvelteKit, and Tailwind CSS</strong>, optimizing for performance with <strong>lazy loading, state management, and efficient rendering techniques</strong></p>
                <p className={styles.paragraph}>I develop interactive applications with <strong>RESTful APIs, external API integrations, and Firebase services</strong>, ensuring smooth data fetching, real-time updates, and robust error handling.</p>
                <p className={styles.paragraph}>I design and implement backend solutions using <strong>Node.js, Express, PostgreSQL, and Firebase</strong>, incorporating <strong>secure authentication (JWT, Firebase Auth)</strong> and database optimization techniques.</p>
                <p className={styles.paragraph}>I ensure scalable and efficient deployments using <strong>Docker, Docker Compose, and CI/CD pipelines</strong>, enabling seamless backend services and databases.</p>
                <p className={styles.paragraph}>Beyond coding, I love <strong>dancing</strong>—it enhances my creativity, precision, and problem-solving approach, just like software development!</p>

            </div>
       
        </div>
    
        
    </section>
  )
}
