import { useTranslation } from "react-i18next";
import "./SectionFour.css";
import React from 'react';
import fourP_1 from "./image/fourP_1.png";
import fourP_2 from "./image/fourP_2.png";
import fourP_3 from "./image/fourP_3.png";
function SectionFour() {
  const { t } = useTranslation();

  return (
    <div className="sectionFour">
      <div className="container">
        <div className="sectionFour-wrapper">
          {/* Chap qism: Matnlar */}
          <div className="four-left">
            <h2 className="four-title">{t("sectionFour.title")}</h2>
            <p className="four-text">{t("sectionFour.text")}</p>
            <p className="four-texte">{t("sectionFour.four-text")}</p>
            <div className="four-imgs">
              <img src={fourP_1} alt="rasm" />
              <img src={fourP_2} alt="rasm" />
              <img src={fourP_3} alt="rasm" />
              <h3 className="four-title">{t("sectionFour.four-title")}</h3>
            </div>
          </div>

          {/* O'ng qism: Kard va vertikal chiziq */}
          <div className="four-right">
            <div className="testimonial-card">
              <div className="vertical-bar">
                <div className="v-orange"></div>
                <div className="v-light-orange"></div>
                <div className="v-blue"></div>
              </div>
              <div className="card-content">
                <p className="card-quote">
                  {t("sectionFour.quote")}
                </p>
                <div className="card-author">
                    <img src={fourP_1} alt="rasm" />
                  <div className="author-info">
                    <h4>{t("sectionFour.name")}</h4>
                    <span>{t("sectionFour.role")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;