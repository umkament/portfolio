import React from 'react';
import style from './project.module.css';


const Project = (props) => {
  return (
     <div className={style.project}>
       <div className={style.imgContainer}>
         {/*<div className={style.image}></div>*/}
         <button className={style.button}>show</button>
       </div>
       <div className={style.allText}>
         <h3 className={style.title}>{props.title}</h3>
         <span className={style.description}>{props.description}</span>
       </div>

     </div>
  );
}

export default Project;
