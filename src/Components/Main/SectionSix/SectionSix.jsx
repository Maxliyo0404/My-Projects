import { useTranslation } from "react-i18next";
import "./SectionSix.css";
import React from 'react'

function SectionSix() {
    const [t, i18n] = useTranslation();
  return (
    <div className="sectionSix">
        <div className="container">
            <div className="sectionSix-wrapper">
                <div className="six-box"></div>
                 <h2 className="six-title">{t("sectionSix.six-title")}</h2>
                 <ul className="six-list">
                    <li className="six-item">
                        <img src={} alt="rasm" />
                    </li>
                    <li className="six-item">
                         <p className="sixList-text">{t("sectionSix.sixList-text")}</p>
                         <h4 className="sixList-text">{t("sectionSix.sixList-title1")}</h4>
                          <a className="sixList-link" href="#">{t("sectionSix.sixList-link")}<span className="sixList-span"></span></a>
                    </li>
                    <li className="six-item">
                        <img src={} alt="rasm" />
                    </li>
                     <li className="six-item">
                         <p className="sixList-text">{t("sectionSix.sixList-text")}</p>
                         <h4 className="sixList-text">{t("sectionSix.sixList-title2")}</h4>
                          <a className="sixList-link" href="#">{t("sectionSix.sixList-link")}<span className="sixList-span"></span></a>
                    </li>
                 </ul>
            </div>
        </div>
    </div>
  )
}

export default SectionSix