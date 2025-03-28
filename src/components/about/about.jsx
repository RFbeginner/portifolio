import React from 'react';
import styles from './about.module.css';
import aboutImg from '../../assets/about/aboutImage.png';
import cursorImg from '../../assets/about/cursorIcon.png';
import serverImg from '../../assets/about/serverIcon.png';
import uiImg from '../../assets/about/uiIcon.png';

const About = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>About</h2>
      <div className={StyleSheet.content}>
        <img src={aboutImg} alt="Me sitting with a laptop" />
        <ul>
          {/* Front-end developer */}
          <li>
          <img src={cursorImg} alt="Cursor Icon" />
          <div>
            <h3>Front Developer</h3>
            <p>Im a frotn-end developer with experience in building responsive and optimized sites </p>
          </div>
          </li>
          {/* Back-end developer */}
          <li>
          <img src={serverImg} alt="server Icon" />
          <div>
            <h3>Backend Developer</h3>
            <p>I have experience developing fast and optimized sites</p>
          </div>
          </li>
          {/*Ui Designer*/ }
          <li>
          <img src={uiImg} alt="UI Icon" />
          <div>
            <h3>UI Designer</h3>
            <p>I have designed multiple landing pages and have systems as well</p>
          </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
