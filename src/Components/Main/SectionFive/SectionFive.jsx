import { useTranslation } from "react-i18next";
import "./SectionFive.css";
import React from 'react';

function SectionFive() {
  const { t } = useTranslation();
  const steps = [
    { key: "discovery" },
    { key: "designing" },
    { key: "development" },
    { key: "testing" },
    { key: "deployment" },
    { key: "maintenance" }
  ];

  return (
    <div className="sectionFive">
      <div className="container">
        <div className="five-titles">
          <h6 className="five-title">{t("sectionFive.five-title")}</h6>
          <h3 className="five-title1">{t("sectionFive.five-title1")}</h3>
          <p className="five-text">{t("sectionFive.five-text")}</p>
        </div>

        <ul className="five-list">
          {steps.map((step, index) => (
            <li className="five-item" key={index}>
              <div className="five-icon"></div>
              <div className="fiveList-titles">
                <h3 className="fiveList-title1">{t(`sectionFive.steps.${step.key}.title`)}</h3>
                <p className="fiveList-text">{t(`sectionFive.steps.${step.key}.text`)}</p>
              </div>
              <h2 className="fiveList-number">
                {String(index + 1).padStart(2, '0')}
              </h2>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SectionFive;