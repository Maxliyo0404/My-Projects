import { useTranslation } from "react-i18next";
import "./Hero.css";
import React from 'react'

function Hero() {
    const [t, i18n] = useTranslation();
  return (
    <div className="hero">
        <div className="container">
            <div className="hero-wrapper">
                <div className="hero-info">
                    <div className="hero-left">
                        <h1 className="hero-title">{t("hero.hero-title")}</h1>
                        <p className="hero-text">{t("hero.hero-text")}</p>
                         <button className="hero-btn">{t("hero.hero-btn")} <span className="hero-span"></span></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero