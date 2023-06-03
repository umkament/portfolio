import React from "react";
import style from "./footer.module.scss";
import containerStyle from "../common/styles/container.module.css";
import {Icon} from "./icon/Icon";

export const Footer = () => {
  return (
     <div className={style.footerBlock}>
       <div className={`${containerStyle.container} ${style.footerContainer}`}>
         <h2>Romanova Christina</h2>
         <div className={style.footer}>
           <Icon/>
           <Icon/>
           <Icon/>
           <Icon/>
         </div>
       </div>
     </div>
  )
}