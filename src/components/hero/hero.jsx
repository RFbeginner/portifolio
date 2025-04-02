import React from 'react'
import styles from './hero.module.css'
import heroImg from '../../assets/hero/heroImage.png';



export const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Oi! Eu sou a Rebeca :)</h1>
        <p className={styles.description}>Sou desenvolvedora front-end em início de carreira, com experiência em ReactJS e VueJS. No momento, estou mergulhada nos estudos de Go e NodeJS para também atuar no back-end. Curto desafios e estou construindo meu caminho para me tornar uma dev full-stack.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>Vamos conversar !</a>
    </div>
    <img className={styles.heroImg} src={heroImg} alt="hero Image" />
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>

  </section>
  )
}


