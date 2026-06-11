import { useTranslation } from "react-i18next";
import "./SectionFive2.css";
import React from 'react'

function SectionFive2() {
    const [t, i18n] = useTranslation();
  return (
     <div className="sectionFive2">
                <div className="container">
                  <div className="sectionFive2-wrapper">
                      <div className="five2-left">
                      <img className="five2-rasm" src={three2_1} alt="rasm" />
                    </div>
                    <div className="five2-right">
                        <h4 className="five2-title">{t("sectionFive2.five2-title")}</h4>
                        <h2 className="five2-title">{t("sectionFive2.five2-titlee")}</h2>
                        <p className="five2-text">{t("sectionFive2.five2-text")}</p>
                    </div>
                   
                   
                  </div>
                </div>
              </div>
  )
}

export default SectionFive2