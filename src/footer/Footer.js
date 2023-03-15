import React from "react";
import style from "./footer.module.css";
import containerStyle from "../common/styles/container.module.css";

export const Footer = () => {
  return (
     <div className={style.footerBlock}>
       <div className={`${containerStyle.container} ${style.footerContainer}`}>
<h2>Romanova Christina</h2>
         <div className={style.icon}></div>
         <div className={style.icon}></div>
         <div className={style.icon}></div>
         <div className={style.icon}></div>
     </div>
     </div>
  )
}