import React from 'react';
import style from './projects.module.css';
import containerStyle from './../common/styles/container.module.css';
import Project from "./project/Project";
import {Title} from "../common/components/title/Title";
import todoImg from "./../assets/image/todolist.jpeg"
import networkImg from "./../assets/image/socialNetwork.jpeg"


export const Projects = () => {

  const socialNetwork = {
    backgroundImage: `url(${networkImg})`,
  };
  const todolist = {
    backgroundImage: `url(${todoImg})`,
  };

  return (
     <div className={style.projectsBlock}>
       <div className={`${containerStyle.container} ${style.projectsContainer}`}>
        <Title text={'projects'}/>
         <div className={style.projects}>
           <Project style={todolist}
                    title={'Todolist'}
                    description={'keeping a list of things to do within a certain period of time'}
           />
           <Project style={socialNetwork}
                    title={'Social network'}
                    description={'online platform, use it for communication, dating, creating social relationships with people'}
           />
         </div>

       </div>

     </div>
  );
}

