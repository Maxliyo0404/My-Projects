import { useTranslation } from "react-i18next";
import "./SectionFour3.css";
import React from 'react'

function SectionFour3() {
    const [t, i18n] = useTranslation();
  return (
    <div className="sectionFour3">
        <div className="container">
            <div className="sectionFour3-wrapper">
                <h6 className="four3-label">{t("sectionFour3.four3-label")}</h6>
                <h2 className="four3-title">{t("sectionFour3.four3-title")}</h2>
                <p className="four3-text">{t("sectionFour3.four3-text")}</p>
                <ul className="four3-list">
                    <li className="four3-item">
                        <div className="four3-img"><img src={} alt="rasm" /></div>
                        <div className="four3-img"><img src={} alt="rasm" /></div>
                        <div className="four3-img"><img src={} alt="rasm" /></div>
                        <div className="four3-img"><img src={} alt="rasm" /></div>
                        <div className="four3-img"><img src={} alt="rasm" /></div>
                        <div className="four3-img"><img src={} alt="rasm" /></div>
                        <div className="four3-img"><img src={} alt="rasm" /></div>
                        <div className="four3-img"><img src={} alt="rasm" /></div>
                        
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SectionFour3