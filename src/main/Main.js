import React from 'react';
import style from './main.module.scss';
import containerStyle from '../common/styles/container.module.scss'
import mainImg from './../assets/image/mainPhoto.JPG'

const Main = () => {
  const mainPhoto = {
    backgroundImage: `url(${mainImg})`,
  };

  return (
     <div className={style.mainBlock}>

         <div className={style.text}>
           <span className={style.welcome}>Welcome</span>
           <h1 className={style.name}>I'm Christina Romanova</h1>
           <span className={style.bgName}>Christina Romanova</span>
           <p className={style.prof}>Frontend developer</p>
         </div>
         <div className={style.photo} style={mainPhoto}></div>

     </div>
  );
}

export default Main;
