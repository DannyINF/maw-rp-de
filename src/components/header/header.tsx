// components/Header.js

import React from 'react';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="#home" className={styles.link}>Mythen aus Westernis</a>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#geschichte" className={styles.link}>Geschichte</a>
          </li>
          <li>
            <a href="#regeln" className={styles.link}>Regeln</a>
          </li>
          <li>
            <a href="#rassen" className={styles.link}>Rassen</a>
          </li>
          <li>
            <a href="#fraktionen" className={styles.link}>Fraktionen</a>
          </li>
          <li>
            <a href="#beitreten" className={styles.link}>Beitreten</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
