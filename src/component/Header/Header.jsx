import React from 'react';
import styles from '../../style/header.module.css';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles["app-header"]}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
