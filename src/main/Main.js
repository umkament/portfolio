import React from 'react';
import style from './main.module.scss';
import containerStyle from './../common/styles/container.module.css'
import {Title} from "../common/components/title/Title";

const Main = () => {


  return (
     <div className={style.mainBlock}>
       <div className={containerStyle.container}>
         <div className={style.text}>
           <span className={style.welcome}>Welcome</span>
           <h1 className={style.name}>I'm Christina Romanova</h1>
           <span className={style.bgName}>Christina Romanova</span>
           <p className={style.prof}>Frontend developer</p>
         </div>
         <div className={style.photo}></div>
       </div>
     </div>
  );
}

export default Main;
