import React from 'react';
import style from './skills.module.css';
import containerStyle from './../common/styles/container.module.css';


function Skills () {
  return (
     <div className={style.skillsBlock}>
       <div className={`${containerStyle.container} ${style.skillsContainer}`}>
         <h2 className={style.title}>skills</h2>
         <div className={style.skills}>

         </div>
       </div>

     </div>
  );
}

export default Skills;
