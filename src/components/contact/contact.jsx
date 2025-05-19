import React from "react";

import styles from "./Contact.module.css";
import emailIcon from "../../assets/contacts/emailIcon.png";
import githubImg from "../../assets/contacts/linkedinIcon.png";   
import linkedinImg from "../../assets/contacts/githubIcon.png";
import whatsappImg from "../../assets/contacts/whatsappIcon.png"; 


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contatos</h2>
        <p>Sinta-se à vontade para entrar em contato!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=rebeca.ferreira.almeida.2007@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={emailIcon} alt="Email icon" />
    </a>
          
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/rebeca-ferreira-almeida/">
            <img src={githubImg} alt="LinkedIn icon" />
          </a>
          <a href="https://www.linkedin.com/in/rebeca-ferreira-almeida/"></a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/RFbeginner">
            <img src={linkedinImg} alt="Github icon" />
          </a>
          <a href="https://github.com/RFbeginner"></a>
        </li>
        <li className={styles.link}>
          <a href="https://wa.me/5541992166799?text=Olá%20Rebeca%2C%20vim%20pelo%20seu%20portfólio!">
            <img src={whatsappImg} alt="Whatsapp icon" />
          </a>
          <a href="https://wa.me/5541992166799?text=Olá%20Rebeca%2C%20vim%20pelo%20seu%20portfólio!"></a>
        </li>
      </ul>
    </footer>
  );
};