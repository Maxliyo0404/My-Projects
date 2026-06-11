import { useTranslation } from "react-i18next";
import "./SectionThree2.css";
import React from 'react'
import three2_1 from "./image/three2_1.png"

function SectionThree2() {
    const [t, i18n] = useTranslation();
  return (
      <div className="sectionThree2">
           <div className="container">
             <div className="sectionThree2-wrapper">
                 <div className="three2-left">
                 <img className="three2-rasm" src={three2_1} alt="rasm" />
               </div>
               <div className="three2-right">
                   <h4 className="three2-title">{t("sectionThree2.three2-title")}</h4>
                   <h2 className="three2-titlee">{t("sectionThree2.three2-titlee")}</h2>
                   <p className="three2-text">{t("sectionThree2.three2-text")}</p>
               </div>
              
              
             </div>
           </div>
         </div>
  )
}

export default SectionThree2