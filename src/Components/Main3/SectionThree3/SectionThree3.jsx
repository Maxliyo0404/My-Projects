import { useTranslation } from "react-i18next";
import "./SectionThree3.css";
import React from 'react'
import three3_1 from "./image/three3_1.png";
function SectionThree3() {
    const [t, i18n] = useTranslation();
  return (
    <div className="sectionThree3">
        <div className="container">
            <div className="sectionThree-wrapper">
                        <h6 className="three3-label">{t("sectionThree3.three3-label")}</h6>
                        <h2 className="three3-title">{t("sectionThree3.three3-title")}</h2>
                        <p className="three3-text">{t("sectionThree3.three3-text")}</p>
                        <img className="three3-rasm" src={three3_1} alt="rasm" />
            </div>
        </div>
    </div>
  )
}

export default SectionThree3