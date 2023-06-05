import React from "react";
import style from './contacts.module.scss';
import containerStyle from "../common/styles/container.module.scss";
import {Title} from "../common/components/title/Title";


export const Contacts = () => {
  return (
     <div className={style.contactsBlock}>
       <div className={`${containerStyle.container} ${style.contactsContainer}`}>
         <Title text={'contacts'}/>
         <form className={style.form}>
           <input/>
           <input/>
           <textarea className={style.textarea}/>
         </form>
         <button className={style.buttonSend}>send</button>
       </div>
     </div>
  );
}