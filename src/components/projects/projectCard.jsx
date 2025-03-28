import React from "react";

import styles from "./ProjectCard.module.css";

import project1Img from "../../assets/projects/project.png";
import project2Img from "../../assets/projects/project.png";
import project3Img from "../../assets/projects/project.png";
// adicione outros imports conforme necessário

const images = {
  "projects/project.png": project1Img,
  "projects/project2.png": project2Img,
  "projects/project3.png": project3Img,
  // adicione outras chaves conforme necessário
};

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={images[imageSrc]}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          Demo
        </a>
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};