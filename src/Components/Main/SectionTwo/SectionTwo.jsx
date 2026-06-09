import { useTranslation } from "react-i18next";
import "./SectionTwo.css";
import React from 'react'
import { FaRocket } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";
function SectionTwo() {
    const [t, i18n] = useTranslation();
  return (
    <div className="sectionTwo">
        <div className="container">
            <div className="sectionTwo-wrapper">
                <div className="two-left">
                    <h6 className="two-title">{t("sectionTwo.two-title")}</h6>
                     <h3 className="two-title1">{t("sectionTwo.two-title1")}</h3>
                     <p className="two-text">{t("sectionTwo.two-text")}</p>
                </div>
                <ul className="two-list">
                    <li className="two-item">
                        <div className="two-icon"><FaRocket /></div>
                        <div className="twoList-titles">
                         <h3 className="twoList-title1">{t("sectionTwo.twoList-title1")}</h3>
                         <p className="twoList-text">{t("sectionTwo.twoList-text")}</p>
                        </div>
                   </li>
                    <li className="two-item">
                        <div className="two-icon"><IoSettingsOutline /></div>
                        <div className="twoList-titles">
                         <h3 className="twoList-title2">{t("sectionTwo.twoList-title1")}</h3>
                         <p className="twoList-text">{t("sectionTwo.twoList-text")}</p>
                        </div>
                   </li>
                    <li className="two-item">
                        <div className="two-icon"><MdSupportAgent /></div>
                        <div className="twoList-titles">
                         <h3 className="twoList-title3">{t("sectionTwo.twoList-title1")}</h3>
                         <p className="twoList-text">{t("sectionTwo.twoList-text")}</p>
                        </div>
                        <div className="line-bottom" style={{ backgroundColor: '#FF9900' }}></div>
                   </li>
                   
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SectionTwo