import { useTranslation } from "react-i18next";
import "./Hero.css";
import React from 'react'

function Hero() {
    const [t, i18n] = useTranslation();
  return (
    <div className="hero">
        <div className="container">
            <div className="hero-info">
                <div className="hero-left">
                    <h6 className="hero-title">{t("hero-hero-title")}</h6>
                    <h1 className="hero-title1">{t("hero-hero-title1")}</h1>
                     <p className="hero-text">{t("hero.hero-text")}</p>
                      <button className="hero-btn">
                        <span className="yellow-box"></span> 
                        {t("hero-btn")} 
                        <span className="hero-span"><FaLongArrowAltRight /></span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero