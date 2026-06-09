import { useTranslation } from "react-i18next";
import "./SectionTwo.css";
import React from 'react'

function SectionTwo() {
    const [t, i18n] = useTranslation();
  return (
    <div className="sectionTwo">
        <div className="container">
            <div className="sectionTwo-wrapper">
                <div className="two-left">
                    <h6 className="two-title">{t("sectionTwo.two-title")}</h6>
                     <h3 className="two-title1">{t("sectionTwo.two-title1")}</h3>
                     <p className="two-text1">{t("sectionTwo.two-text1")}</p>
                </div>
                <div className="two-right">
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionTwo