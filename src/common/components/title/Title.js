import React from 'react';
import style from './title.module.css';



export const Title = (props) => {
  return (
     <div className={style.title}>
           <h2>{props.text}</h2>
         </div>
  )

}

