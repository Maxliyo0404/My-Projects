import { useTranslation } from "react-i18next";
import "./SectionFour3.css";
import React from 'react'

function SectionFour3() {
    const [t, i18n] = useTranslation();
  return (
    <div className="sectionFour3">
        <div className="container">
            <div className="sectionFour3-wrapper">
                <h6 className="four3-label">{t("sectionThree3.three3-label")}</h6>
                <h2 className="four3-title">{t("sectionThree3.three3-title")}</h2>
                <p2 className="four3-text">{t("sectionThree3.three3-text")}</p>
            </div>
        </div>
    </div>
  )
}

export default SectionFour3