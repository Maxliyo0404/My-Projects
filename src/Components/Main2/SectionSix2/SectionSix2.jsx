import { useTranslation } from "react-i18next";
import "./SectionSix.css";
import React from 'react'
import six2_1 from "./image/six2_1.png"
function SectionSix2() {
    const [t, i18n] = useTranslation();
  return (
      <div className="sectionSix2">
           <div className="container">
             <div className="sectionSix2-wrapper">
               <div className="six2-left">
                   <h4 className="six2-title">{t("sectionSix2.six2-title")}</h4>
                   <h2 className="six2-titlee">{t("sectionSix2.six2-titlee")}</h2>
                   <p className="six2-text">{t("sectionSix2.six2-text")}</p>
               </div>
               <div className="six2-right">
                 <img className="six2-rasm" src={six2_1} alt="rasm" />
               </div>
             </div>
           </div>
         </div>
  )
}

export default SectionSix2