import React from 'react';
import style from './main.module.css';
import containerStyle from './../common/styles/container.module.css'

const Main = () => {
  return (
     <div className={style.mainBlock}>
       <div className={containerStyle.container}>
         <div className={style.text}>
           <span>Hi There</span>
           <h1>I'm Christina Romanova</h1>
           <p>Frontend developer</p>
         </div>
         <div className={style.photo}></div>
       </div>
     </div>
  );
}

export default Main;
