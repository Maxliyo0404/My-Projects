import { useTranslation } from "react-i18next";
import "./SectionFive.css";
import React from 'react';
import { FaSearch, FaDraftingCompass, FaCode, FaBug, FaRocket, FaTools } from 'react-icons/fa';

function SectionFive() {
  const { t } = useTranslation();
  
  const steps = [
    { id: "01", icon: <FaSearch />, key: "discovery" },
    { id: "02", icon: <FaDraftingCompass />, key: "designing" },
    { id: "03", icon: <FaCode />, key: "development" },
    { id: "04", icon: <FaBug />, key: "testing" },
    { id: "05", icon: <FaRocket />, key: "deployment" },
    { id: "06", icon: <FaTools />, key: "maintenance" },
  ];

  return (
    <div className="sectionFive">
      <div className="container">
        <div className="sectionFive-wrapper">
        <div className="five-titles">
          <h6 className="five-title">{t("sectionFive.five-title")}</h6>
          <h3 className="five-title1">{t("sectionFive.five-title1")}</h3>
          <p className="five-text">{t("sectionFive.five-text")}</p>
        </div>

        <ul className="five-list">
  {steps.map((step, index) => (
    <li className="five-item" key={step.key}>
      <h2 className="five-number">{step.id}</h2>
      <div className="fiveList-titles">
      <div className="five-icon">{step.icon}</div>
      <div className="five-texts">
      <h3 className="fiveList-title1">{t(`sectionFive.steps.${step.key}.title`)}</h3>
      <p className="fiveList-text">{t(`sectionFive.steps.${step.key}.text`)}</p>
      
      {index === 2 && (
        <div className="line-horizontal bottom-start">
    <div className="line-part orange"></div>
    <div className="line-part light-orange"></div>
    <div className="line-part blue"></div>
       </div>
     )}
      {index === 3 && (
     <div className="line-horizontal top-end">
        <div className="line-part orange"></div>
        <div className="line-part light-orange"></div>
        <div className="line-part blue"></div>
      </div>
      )}
       </div>
       </div>
    </li>
  ))}
</ul>
      </div>
    </div>
    </div>
  );
}

export default SectionFive;