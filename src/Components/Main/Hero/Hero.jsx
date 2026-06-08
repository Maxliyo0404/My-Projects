import { useTranslation } from "react-i18next";
import "./Hero.css";
import React from 'react'
import heror from "./image/heror.png";
import vector1 from "./image/vector1.png";
import vector2 from "./image/vector2.png";
import vector3 from "./image/vector3.png";
import vector4 from "./image/vector4.png";


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
                    <div className="hero-right">
                        <img src={heror} alt="rasm" />
                    </div>
                </div>
                <ul className="hero-list">
                    <li className="hero-item">
                        <p className="heroList-text">{t("hero.heroList-text")}</p>
                        <h3 className="heroList-title">{t("hero.heroList-title")}</h3>
                    </li>
                    <li className="hero-item">
                        <img src={vector1} alt="rasm" />
                         <p className="heroList-text">{t("hero.heroList-text1")}</p>
                    </li>
                    <li className="hero-item">
                        <img src={vector2} alt="rasm" />
                         <p className="heroList-text">{t("hero.heroList-text1")}</p>
                    </li>
                    <li className="hero-item">
                        <img src={vector3} alt="rasm" />
                         <p className="heroList-text">{t("hero.heroList-text1")}</p>
                    </li>
                    <li className="hero-item">
                        <img src={vector2} alt="rasm" />
                         <p className="heroList-text">{t("hero.heroList-text1")}</p>
                    </li>
                    <li className="hero-item">
                        <img src={vector4} alt="rasm" />
                         <p className="heroList-text">{t("hero.heroList-text1")}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Hero