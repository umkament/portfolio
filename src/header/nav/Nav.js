import React from 'react';
import style from './nav.module.scss';

const Nav = () => {
  return (
     <div className={style.nav}>
       <a href="" className={style.color}>Main</a>
       <a href="" className={style.color}>Skills</a>
       <a href="" className={style.color}>Projects</a>
       <a href="" className={style.color}>Contacts</a>
     </div>
  );
}

export default Nav;
