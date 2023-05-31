import React from 'react';
import style from './skills.module.css';
import containerStyle from './../common/styles/container.module.css';
import Skill from "./skill/Skill";
import {Title} from "../common/components/title/Title";


export const Skills = () => {
  return (
     <div className={style.skillsBlock}>
       <div className={`${containerStyle.container} ${style.skillsContainer}`}>
         <Title text={'skills'}/>
         <div className={style.skills}>
           <Skill title={'HTML/CSS'}
                  description={'some text, a lot of text, description about skills'}
           />
           <Skill title={'JS/TS'}
                  description={'some text, a lot of text, description about skills'}
           />
           <Skill title={'React/Redux'}
                  description={'some text, a lot of text, description about skills'}
           />
         </div>
       </div>

     </div>
  );
}

