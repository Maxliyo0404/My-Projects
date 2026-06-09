import { useTranslation } from "react-i18next";
import "./SectionThree.css";
import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { VscCalendar } from "react-icons/vsc";
function SectionThree() {
    const [t, i18n] = useTranslation();
  return (
    <div className="sectionThree">
        <div className="container">
            <div className="sectionThree-wrapper">
                <div className="three-titles">
                    <h6 className="three-title">{t("sectionThree.three-title")}</h6>
                     <p className="three-text">{t("sectionThree.three-text")}</p>
                      <button className="three-btn">
                            <span className="yellow-box"></span> {/* Kvadrat tepa chapda */}
                            {t("sectionThree.three-btn")} 
                            <span className="three-span"><FaLongArrowAltRight /></span>
                        </button>
              </div>
              <ul className="three-list">
                <li className="three-item">
                    <div className="three-icon"><BiSupport /></div>
                     <h2 className="threeList-title">{t("sectionThree.threeList-title1")}</h2>
                     <p className="threeList-text">{t("sectionThree.threeList-text")}</p>
                     <a className="three-link" href="#">{t("sectionThree.three-link")}<span className="three-span1"><FaLongArrowAltRight /></span></a>
                </li>
                <li className="three-item">
                    <div className="three-icon"><IoSettingsOutline /></div>
                     <h2 className="threeList-title">{t("sectionThree.threeList-title2")}</h2>
                     <p className="threeList-text">{t("sectionThree.threeList-text")}</p>
                     <a className="three-link" href="#">{t("sectionThree.three-link")}<span className="three-span1"><FaLongArrowAltRight /></span></a>
                </li>
                <li className="three-item">
                    <div className="three-icon"><VscCalendar /></div>
                     <h2 className="threeList-title">{t("sectionThree.threeList-title3")}</h2>
                     <p className="threeList-text">{t("sectionThree.threeList-text")}</p>
                     <a className="three-link" href="#">{t("sectionThree.three-link")}<span className="three-span1"><FaLongArrowAltRight /></span></a>
                </li>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default SectionThree