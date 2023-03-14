 import React from 'react';
import style from './nav.module.css';

function Nav() {
  return (
     <div className={style.nav}>
       <a href="">Главная</a>
       <a href="">Скиллы</a>
       <a href="">Проекты</a>
       <a href="">Контакты</a>
     </div>
  );
}

export default Nav;
