import { useTranslation } from "react-i18next";
import "./SectionFour2.css";
import React from 'react'
import four2_1 from "./image/four2_1.png";

function SectionFour2() {
    const [t, i18n] = useTranslation();
  return (
      <div className="sectionFour2">
           <div className="container">
             <div className="sectionFour2-wrapper">
               <div className="four2-left">
                   <h4 className="four2-title">{t("sectionFour2.four2-title")}</h4>
                   <h2 className="four2-titlee">{t("sectionFour2.four2-titlee")}</h2>
                   <p className="four2-text">{t("sectionFour2.four2-text")}</p>
               </div>
               <div className="four2-right">
                 <img className="four2-rasm" src={four2_1} alt="rasm" />
               </div>
             </div>
           </div>
         </div>
  )
}

export default SectionFour2