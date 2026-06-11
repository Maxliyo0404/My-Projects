import { useTranslation } from "react-i18next";
import "./Hero2.css";
import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

function Hero2() {
    const [t, i18n] = useTranslation();
  return (
    <div className="hero2">
        <div className="container">
            <div className="hero2-info">
                <div className="hero2-left">
                    <h6 className="hero2-title">{t("hero2.hero2-title")}</h6>
                    <h1 className="hero2-titlee">{t("hero2.hero2-titlee")}</h1>
                     <p className="hero2-text">{t("hero2.hero2-text")}</p>
                      <button className="hero2-btn">
                        <span className="yellow-box"></span> 
                        {t("hero2.hero2-btn")} 
                        <span className="hero2-span"><FaLongArrowAltRight /></span>
                    </button>
                </div>
                <div className="hero2-right">
                    <h4 className="hero2-title1">{t("hero2.hero2-title1")}</h4>
                    <h4 className="hero2-titlee1">{t("hero2.hero2-title2")} <span className="hero2-span2"><FaLongArrowAltRight /></span></h4>
                    <h4 className="hero2-title1">{t("hero2.hero2-title3")}</h4>
                    <h4 className="hero2-title1">{t("hero2.hero2-title4")}</h4>
                    <h4 className="hero2-title1">{t("hero2.hero2-title5")}</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero2