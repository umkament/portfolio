import React from 'react';
import style from './projects.module.css';
import containerStyle from './../common/styles/container.module.css';
import Project from "./project/Project";


export const Projects = () => {
  return (
     <div className={style.projectsBlock}>
       <div className={`${containerStyle.container} ${style.projectsContainer}`}>

         <h2 className={style.title}>projects</h2>

         <div className={style.projects}>
           <Project title={'Todolist'}
                    description={'keeping a list of things to do within a certain period of time'}
           />
           <Project title={'Social network'}
                    description={'online platform, use it for communication, dating, creating social relationships with people'}
           />
         </div>

       </div>

     </div>
  );
}

