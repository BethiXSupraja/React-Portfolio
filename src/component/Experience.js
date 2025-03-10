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
              <ListEntry title={'University of Cincinnati-Student Developer'} date={"Jan 2024 - Nov 2024"}>
                 
                 <li>Developed a web application for campus event management, allowing students to register, faculty to create events, and admins to oversee the platform.</li>
                 <li>Designed a responsive UI using React.js, HTML5, and CSS3 for cross-platform compatibility.</li>
                 <li> Integrated JWT for secure user authentication with role-based access.</li>
                 <li>Utilized MongoDB for data storage and implemented Node.js with Express.js for event management features.</li>
                 <li>Implemented real-time updates using WebSocket for event notifications.</li>
                 <li>Optimized application performance and deployed the platform on Heroku.</li>

              </ListEntry>
              <ListEntry title={"Slope Rate Techno Private Ltd.-Software Engineer Intern"} date={"Dec 2021 – Jan 2023"}>
                <li>Developed and maintained an AI-driven business process automation platform, optimizing workflows for businesses.</li>
                <li>Designed a responsive UI using React.js, Angular, HTML5, CSS3, and Bootstrap for seamless cross-platform experiences.</li>
                <li>Built a drag-and-drop workflow builder using React-Beautiful-DND and Konva.js for intuitive workflow creation.</li>
                <li>Integrated RESTful APIs with Spring Boot and .NET Core, using Axios and Redux for efficient state management.</li>
                <li>Created a real-time analytics dashboard using D3.js and Chart.js for data-driven insights.</li>
                <li>Implemented Firebase Authentication with Single Sign-On (SSO) for secure access control.</li>
                <li>Optimized frontend performance using React.Memo, useCallback, and Webpack for improved load times.</li>
                <li>Conducted unit testing with Jest and React Testing Library to ensure a reliable user experience.</li>
                <li>Collaborated with cross-functional teams, following Agile methodologies for timely project delivery.</li>
              </ListEntry>
                
            </div>
       
        </div>


    </section>
    )
}
