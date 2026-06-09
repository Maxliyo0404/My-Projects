import { useTranslation } from "react-i18next"
import "./SectionFive.css"
import React from 'react'

function SectionFive() {
    const [t, i18n] = useTranslation();
  return (
    <div className="sectionFive">
        <div className="container">
            <div className="sectionFive-wrapper">
               <div className="five-titles">
                <h6 className="five-title">{t("sectionFive.five-title")}</h6>
                <h3 className="five-title1">{t("sectionFive.five-title1")}</h3>
                <p className="five-text">{t("sectionFive.five-text")}</p>
            </div>
            <ul className="five-list">
                <li className="five-item">
                    <div className="five-icon"></div>
                    <div className="fiveList-titles">
                        <h3 className="fiveList-title1">{t("sectionFive.fiveList-title1")}</h3>
                        <p className="fiveList-text">{t("sectionFive.fiveList-text")}</p>
                    </div>
                    <h2 className="fiveList-number">01</h2>
                </li>
                <li className="five-item">
                    <div className="five-icon"></div>
                    <div className="fiveList-titles">
                        <h3 className="fiveList-title1">{t("sectionFive.fiveList-title1")}</h3>
                        <p className="fiveList-text">{t("sectionFive.fiveList-text")}</p>
                    </div>
                    <h2 className="fiveList-number">01</h2>
                </li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default SectionFive