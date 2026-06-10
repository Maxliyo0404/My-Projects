import { useTranslation } from "react-i18next";
import "./SectionSix.css";
import React from 'react'
import sixP_1 from "./image/sixP_1.png";
import sixP_2 from "./image/sixP_2.png";
import { FaLongArrowAltRight } from "react-icons/fa";
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
                        <img src={sixP_1} alt="rasm" />
                        <div className="six-right">
                             <p className="sixList-text">{t("sectionSix.sixList-text")}</p>
                         <h4 className="sixList-title">{t("sectionSix.sixList-title1")}</h4>
                          <a className="sixList-link" href="#">{t("sectionSix.sixList-link")}<span className="sixList-span"><FaLongArrowAltRight /></span></a>
                        </div>
                    </li>
                    <li className="six-item">
                        <img src={sixP_2} alt="rasm" />
                        <div className="six-right">
                             <p className="sixList-text">{t("sectionSix.sixList-text")}</p>
                         <h4 className="sixList-title">{t("sectionSix.sixList-title2")}</h4>
                          <a className="sixList-link" href="#">{t("sectionSix.sixList-link")}<span className="sixList-span"><FaLongArrowAltRight /></span></a>
                        </div>
                    </li>
                    
                 </ul>
            </div>
        </div>
    </div>
  )
}

export default SectionSix