import React from "react";
import style from './contacts.module.css';
import containerStyle from "../common/styles/container.module.css";


export const Contacts = () => {
  return (
     <div className={style.contactsBlock}>
       <div className={`${containerStyle.container} ${style.contactsContainer}`}>
         <h2 className={style.title}>contacts</h2>
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