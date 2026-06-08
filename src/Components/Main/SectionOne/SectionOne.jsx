import { useTranslation } from "react-i18next";
import "./SectionOne.css";
import React from 'react'

function SectionOne() {
    const [t, i18n] = useTranslation();
  return (
    <div className="sectionOne">
        <div className="container">
            <div className="sectionOne-wrapper">
                <div className="one-titles">
                    <div className="one-left">
                         <h6 className="one-title">{t("sectionOne.one-title")}</h6>
                         <p className="one-text">{t("sectionOne.one-text")}</p>
                    </div>
                    <div className="one-right">
                          <h3 className="one-title1">{t("sectionOne.one-title1")}</h3>
                         <p className="one-text1">{t("sectionOne.one-text1")}</p>
                     
                    </div>
                   
                   
                </div>
                <div className="one-rasms">
                    <img className="one-rasm" src={} alt="rasm" />
                    <img className="one-rasm" src={} alt="rasm" />
                    <img className="one-rasm" src={} alt="rasm" />
                </div>
                <div className="one-lists">
               <ul className="one-list">
                 <li className="one-item">
                    <h2>1560+</h2>
                  <div className="progress-bar">
                    <div className="blue"></div>
                    <div className="orange"></div>
                    <div className="light-orange"></div>
                  </div>
                   <p className="oneList-text">{t("sectionOne.oneList-text1")}</p>
                 </li>
                 <li className="one-item">
                    <h2>100+</h2>
                  <div className="progress-bar">
                    <div className="blue"></div>
                    <div className="orange"></div>
                    <div className="light-orange"></div>
                  </div>
                   <p className="oneList-text">{t("sectionOne.oneList-text2")}</p>
                 </li>
                 <li className="one-item">
                    <h2>950+</h2>
                  <div className="progress-bar">
                    <div className="blue"></div>
                    <div className="orange"></div>
                    <div className="light-orange"></div>
                  </div>
                   <p className="oneList-text">{t("sectionOne.oneList-text3")}</p>
                 </li>
                 <li className="one-item">
                    <h2>10 yrs</h2>
                  <div className="progress-bar">
                    <div className="blue"></div>
                    <div className="orange"></div>
                    <div className="light-orange"></div>
                  </div>
                   <p className="oneList-text">{t("sectionOne.oneList-text4")}</p>
                 </li>
               </ul>
               <a className="one-link" href="#"><span className="one-span"></span></a>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SectionOne