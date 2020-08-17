import React from 'react';
import s from './Header.module.css';

const Header  = (props) => {
    return (
      <header className={s.header}>
        <h1>Шапка сайта</h1>
      </header>
    );
  }

  export default Header;