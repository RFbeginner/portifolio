import React from 'react';
import styles from './about.module.css';
import aboutImg from '../../assets/about/aboutImage.png';
import cursorImg from '../../assets/about/cursorIcon.png';
import serverImg from '../../assets/about/serverIcon.png';
import uiImg from '../../assets/about/uiIcon.png';

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre mim</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={aboutImg}
          alt="Me sitting with a laptop"
        />
        <ul className={styles.aboutItems}>
          {/* Frontend Developer */}
          <li className={styles.aboutItem}>
            <img src={cursorImg} alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>Desenvolvedora Frontend</h3>
              <p>
              Tenho experiência com desenvolvimento de interfaces utilizando ReactJS e VueJS, focando sempre em criar páginas responsivas, acessíveis e agradáveis de usar.
              </p>
            </div>
          </li>

          {/* Backend Developer */}
          <li className={styles.aboutItem}>
            <img src={serverImg} alt="Server Icon" />
            <div className={styles.aboutItemText}>
              <h3>Explorando o Backend</h3>
              <p>
              Atualmente estudando Node.js e Go, estou ampliando meus conhecimentos para atuar também no desenvolvimento de APIs e sistemas de back-end.
              </p>
            </div>
          </li>

          {/* UI Designer */}
          <li className={styles.aboutItem}>
            <img src={uiImg} alt="UI Icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
              Já criei landing pages e tenho familiaridade com design, prezando por consistência visual e boa experiência do usuário.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
