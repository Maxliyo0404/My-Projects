import { useTranslation } from "react-i18next";
import "./Hero3.css";
import React from 'react'
import hero3_1 from "./image/hero3_1.png";
import hero3_2 from "./image/hero3_2.png";
import hero3_3 from "./image/hero3_3.png";

function Hero3() {
    const [t, i18n] = useTranslation();
  return (
    <div className="hero3">
        <div className="container">
            <div className="hero3-info">
                <div className="hero3-cubes">
                    <div className="hero3-cub"></div>
              <div className="cube-wrapper">
  <div className="box blue-top"></div>
  <div className="box orange-main"></div>
  <div className="box orange-small"></div>
  <div className="box light-orange-small"></div>
</div>
               </div>
          <div className="hero3-content">
              <h6 className="hero3-label">{t("hero3.hero3-label")}</h6>
              <h2 className="hero3-title">{t("hero3.hero3-title")}</h2>
              <p className="hero3-text">{t("hero3.hero3-text")}</p>
          
              <div className="color-line">
                <div className="line-part orange"></div>
                <div className="line-part light-orange"></div>
                <div className="line-part blue"></div>
              </div>
        </div>

        <div className="hero3-images">
          <div className="img-box"><img className="hero3-rasm" src={hero3_1} alt="rasm" /></div>
          <div className="img-box"><img className="hero3-rasm" src={hero3_2} alt="rasm" /></div>
          <div className="img-box"><img className="hero3-rasm" src={hero3_3} alt="rasm" /></div>
        </div>
            </div>
        </div>

    </div>
  )
}

export default Hero3