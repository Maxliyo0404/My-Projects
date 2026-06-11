import { useTranslation } from "react-i18next";
import "./SectionTwo2.css";
import React from 'react'
import two2_1 from "./image/two2_1.png"

function SectionTwo2() {
    const [t, i18n] = useTranslation();
  return (
    <div className="sectionTwo2">
      <div className="container">
        <div className="sectionTwo2-wrapper">
          <div className="two2-left">
              <h4 className="two2-title">{t("sectionTwo2.two2-title")}</h4>
              <h2 className="two2-titlee">{t("sectionTwo2.two2-titlee")}</h2>
              <p className="two2-text">{t("sectionTwo2.two2-text")}</p>
          </div>
          <div className="two2-right">
            <img className="two2-rasm" src={two2_1} alt="rasm" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionTwo2