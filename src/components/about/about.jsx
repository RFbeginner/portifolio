import React from 'react';
import styles from './about.module.css';
import aboutImg from '../../assets/about/aboutImage.png';
import cursorImg from '../../assets/about/cursorIcon.png';
import serverImg from '../../assets/about/serverIcon.png';
import uiImg from '../../assets/about/uiIcon.png';

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
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
              <h3>Frontend Developer</h3>
              <p>
                I'm a front-end developer with experience in building responsive
                and optimized sites.
              </p>
            </div>
          </li>

          {/* Backend Developer */}
          <li className={styles.aboutItem}>
            <img src={serverImg} alt="Server Icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimized back-end systems
                and APIs.
              </p>
            </div>
          </li>

          {/* UI Designer */}
          <li className={styles.aboutItem}>
            <img src={uiImg} alt="UI Icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
