import React from "react";

import styles from "./Contact.module.css";
import emaiImg from "../../assets/contacts/emailIcon.png";
import githubImg from "../../assets/contacts/linkedinIcon.png";   
import linkedinImg from "../../assets/contacts/githubIcon.png";


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contatos</h2>
        <p>Sinta-se à vontade para entrar em contato!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emaiImg} alt="Email icon" />
          <a href="mailto:rebeca.ferreira.almeida.2007@gmail.com">E-mail</a>
        </li>
        <li className={styles.link}>
          <img
            src={githubImg}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/rebeca-ferreira-almeida/">Linkedin</a>
        </li>
        <li className={styles.link}>
          <img src={linkedinImg} alt="Github icon" />
          <a href="https://github.com/RFbeginner">Github</a>
        </li>
      </ul>
    </footer>
  );
};