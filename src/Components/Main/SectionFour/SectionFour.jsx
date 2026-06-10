import { useTranslation } from "react-i18next";
import "./SectionFour.css";
import React from 'react';
import avatar1 from "../../assets/images/avatar1.png"; // Avatar rasmlaringiz yo'li

function SectionFour() {
  const { t } = useTranslation();

  return (
    <div className="sectionFour">
      <div className="container">
        <div className="sectionFour-wrapper">
          {/* Chap qism: Matnlar */}
          <div className="four-left">
            <h6 className="four-subtitle">{t("sectionFour.subtitle")}</h6>
            <h2 className="four-title">{t("sectionFour.title")}</h2>
            <p className="four-text">{t("sectionFour.text")}</p>
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
                  <img src={avatar1} alt="Author" className="author-img" />
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