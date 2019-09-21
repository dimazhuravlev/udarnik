import React from "react";
import styles from "./email.module.css";

const Email = () => (
  <div className={styles.email}>
    <a className={styles.link} href="mailto: instrum35@mail.ru">
      <p>INSTRUM35</p>
      <p className={styles.leftspace}>@MAIL</p>
      <p>.RU</p>
    </a>
  </div>
);

export default Email;
