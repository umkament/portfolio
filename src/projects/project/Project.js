import React from 'react';
import style from './project.module.scss';


const Project = (props) => {
  return (
     <div className={style.project}>
       <div className={style.imgContainer}
            style={props.style}
       >
         {/*<div className={style.image}></div>*/}
         <button className={style.button}>show</button>
       </div>
       <div className={style.projectInfo}>
         <h3 className={style.projectTitle}>{props.title}</h3>
         <span className={style.description}>{props.description}</span>
       </div>

     </div>
  );
}

export default Project;
