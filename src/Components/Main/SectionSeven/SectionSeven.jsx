import { useTranslation } from "react-i18next";
import "./SectionSeven.css";
import React from 'react'

function SectionSeven() {
    const [t, i18n] = useTranslation();
  return (
    <div className="sectionSeven">
        <div className="container">
            <div className="sectionSeven-wrappers">
            <div className="sectionSeven-wrapper">
                <div className="decor-box">
                  <div className="d-orange"></div>
                  <div className="d-light-orange"></div>
                  <div className="d-blue"></div>
               </div>

          <div className="newsletter-content">
            <div className="newsletter-text">
              <span className="subtitle">{t("sectionSeven.subtitle")}</span>
              <h2 className="seven-title">{t("sectionSeven.seven-title")}</h2>
            </div>
            
            <div className="newsletter-input">
              <input type="email" placeholder=  {t("sectionSeven.seven-email")}  />
            </div>
          </div>

          <div className="side-bar">
            <div className="s-orange"></div>
            <div className="s-light-orange"></div>
            <div className="s-blue"></div>
          </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SectionSeven