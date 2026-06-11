import { useTranslation } from "react-i18next";
import "./SectionTwo3.css";
import React from 'react'
import vector1 from "./image/vector1.png";
import vector2 from "./image/vector2.png";
import vector3 from "./image/vector3.png";
import vector4 from "./image/vector4.png";
import { FaLongArrowAltRight } from "react-icons/fa";

function SectionTwo3() {
    const [t, i18n] = useTranslation();
  return (
    <div className="sectionTwo3">
        <div className="container">
            <div className="sectionTwo3-wrapper">
                <div className="two3-card">
                    <div className="two3-left">
                        <div className="two3-box"></div>
                        <h6 className="two3-label">{t("sectionTwo3.two3-label")}</h6>
                        <h2 className="two3-title">{t("sectionTwo3.two3-title")}</h2>
                        <p className="two3-text">{t("sectionTwo3.two3-text")}</p>
                    </div>
                    <div className="hero-right">
                <ul className="two3-list">
                 <li className="two3-item">
                    <h2 className="two3Listitle">1560+</h2>
                  <div className="progress-bar">
                    <div className="blue"></div>
                    <div className="orange"></div>
                    <div className="light-orange"></div>
                  </div>
                   <p className="two3List-text">{t("sectionTwo3.two3List-text1")}</p>
                 </li>
                 <li className="two3-item">
                    <h2  className="two3Listitle">100+</h2>
                  <div className="progress-bar">
                    <div className="blue"></div>
                    <div className="orange"></div>
                    <div className="light-orange"></div>
                  </div>
                   <p className="two3List-text">{t("sectionTwo3.two3List-text2")}</p>
                 </li>
                 <li className="two3-item">
                    <h2  className="two3Listitle">950+</h2>
                  <div className="progress-bar">
                    <div className="blue"></div>
                    <div className="orange"></div>
                    <div className="light-orange"></div>
                  </div>
                   <p className="two3List-text">{t("sectionTwo3.two3List-text3")}</p>
                 </li>
                 <li className="two3-item">
                    <h2  className="two3Listitle">10 yrs</h2>
                  <div className="progress-bar">
                    <div className="blue"></div>
                    <div className="orange"></div>
                    <div className="light-orange"></div>
                  </div>
                   <p className="two3List-text">{t("sectionTwo3.two3List-text4")}</p>
                 </li>
               </ul>
                    </div>
                </div>
                 <ul className="two3List-list">
                                    <li className="two33-item">
                                        <img src={vector1} alt="rasm" />
                                         <p className="two33List-text">{t("sectionTwo33.two33List-text1")}</p>
                                    </li>
                                    <li className="two33-item">
                                        <img src={vector2} alt="rasm" />
                                         <p className="two33List-text">{t("sectionTwo33.two33List-text1")}</p>
                                    </li>
                                    <li className="two33-item">
                                        <img src={vector3} alt="rasm" />
                                         <p className="two33List-text">{t("sectionTwo33.two33List-text1")}</p>
                                    </li>
                                    <li className="two33-item">
                                        <img src={vector2} alt="rasm" />
                                         <p className="heroList-text">{t("sectionTwo33.two33List-text1")}</p>
                                    </li>
                                    <li className="two33-item">
                                        <img src={vector4} alt="rasm" />
                                         <p className="two33List-text">{t("sectionTwo33.two33List-text1")}</p>
                                    </li>
                                </ul>
            </div>
        </div>
    </div>
  )
}

export default SectionTwo3