import { useTranslation } from "react-i18next";
import "./SectionThree.css";
import React from 'react'

function SectionThree() {
    const [t, i18n] = useTranslation();
  return (
    <div className="sectionThree">
        <div className="container">
            <div className="sectionThree-wrapper">
                 <h6 className="three-title">{t("sectionThree.three-title")}</h6>
                     <h3 className="three-title1">{t("sectionThree.three-title1")}</h3>
                     <button className="tthree-btn">{t("sectionThree.three.btn")}</button>
            </div>
        </div>
    </div>
  )
}

export default SectionThree