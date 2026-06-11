import { useTranslation } from "react-i18next";
import "./SectionTwo3.css";
import React from 'react'

function SectionTwo3() {
    const [t, i18n] = useTranslation();
  return (
    <div className="sectionTwo3">
        <div className="container">
            <div className="sectionTwo3-wrapper">
                <div className="two3-card">
                    <div className="two3-left">
                        <div className="two3-box"></div>
                        <h6 className="two3-label">{t("sectionTwo3.two3-label")}</h6>
                        <h2 className="two3-title">{t("sectionTwo3.two3-title")}</h2>
                        <p className="two3-text">{t("sectionTwo3.two3-text")}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionTwo3