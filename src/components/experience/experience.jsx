import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

// Importando imagens
import htmlImg from "../../assets/skills/html.png";
import cssImg from "../../assets/skills/css.png";
import reactImg from "../../assets/skills/react.png";
import nodeImg from "../../assets/skills/node.png";
import vueImg from "../../assets/skills/vue.png";
import golangImg from "../../assets/skills/golang.png";
import figmaImg from "../../assets/skills/figma.png";

import timberImg from "../../assets/history/timber.png";
import microsoftImg from "../../assets/history/microsoft.png";
import netflixImg from "../../assets/history/netflix.png";

// Mapa de imagens
const imageMap = {
  "skills/html.png": htmlImg,
  "skills/css.png": cssImg,
  "skills/react.png": reactImg,
  "skills/node.png": nodeImg,
  "skills/vue.png": vueImg,
  "skills/golang.png": golangImg,
  "skills/figma.png": figmaImg,
  "history/timber.png": timberImg,
  "history/microsoft.png": microsoftImg,
  "history/netflix.png": netflixImg,
};

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experiência</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={imageMap[skill.imageSrc]} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>

        <ul className={styles.history}>
          {history.map((item, id) => (
            <li key={id} className={styles.historyItem}>
              <img src={imageMap[item.imageSrc]} alt={`${item.organisation} Logo`} />
              <div className={styles.historyItemDetails}>
                <h3>{`${item.role}, ${item.organisation}`}</h3>
                <p>{`${item.startDate} - ${item.endDate}`}</p>
                <ul>
                  {item.experiences.map((exp, index) => (
                    <li key={index}>{exp}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

