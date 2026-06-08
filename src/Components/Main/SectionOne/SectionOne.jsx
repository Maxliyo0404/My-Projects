import { useTranslation } from "react-i18next";
import "./SectionOne.css";
import React from 'react'

function SectionOne() {
    const [t, i18n] = useTranslation();
  return (
    <div className="sectionOne">
        <div className="container">
            <div className="sectionOne-wrapper">
                <div className="one-titles">
                    <div className="one-left">
                         <h6 className="one-title">{t("sectionOne.one-title")}</h6>
                         <p className="one-text">{t("sectionOne.one-text")}</p>
                    </div>
                    <div className="one-right">
                          <h3 className="one-title1">{t("sectionOne.one-title1")}</h3>
                         <p className="one-text1">{t("sectionOne.one-text1")}</p>
                     
                    </div>
                   
                   
                </div>
                <div className="one-rasms">
                    <img className="one-rasm" src={} alt="rasm" />
                    <img className="one-rasm" src={} alt="rasm" />
                    <img className="one-rasm" src={} alt="rasm" />
                </div>
            <ul className="one-list">
                 <li className="one-item">
                   
<h2>1560+</h2>
    <div className="progress-bar">
      <div className="blue"></div>
      <div className="orange"></div>
      <div className="light-orange"></div>
    </div>
    <p>Project Delivered</p>
  </div>
                 </li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default SectionOne