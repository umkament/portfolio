import React from 'react';
import style from './header.module.scss';
import Nav from "./nav/Nav";

const Header = () => {
  return (
     <div className={style.header}>
       <Nav/>
     </div>
  );
}

export default Header;
