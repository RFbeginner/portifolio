import React from 'react'
import styles from './hero.module.css'
import heroImg from '../../assets/hero/heroImage.png';



export const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Oi! Eu sou a Rebeca :)</h1>
        <p className={styles.description}>Sou desenvolvedora frontend em início de carreira, com experiência em ReactJS e VueJS. No momento, estou nos estudos de Go e NodeJS para também atuar no backend. Curto desafios e estou construindo meu caminho para me tornar uma dev fullstack.
        </p>
        <a
    href="https://wa.me/5541992166799?text=Olá%20Rebeca%2C%20vim%20pelo%20seu%20portfólio!"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.contactBtn}> Vamos conversar !
    </a>
    </div>
    <img className={styles.heroImg} src={heroImg} alt="hero Image" />
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>

  </section>
  )
}


