import { useTranslation } from "react-i18next";
import "./SectionFour3.css";
import React from 'react'
import four3_1 from "./image/four3_1.png";
import four3_2 from "./image/four3_2.png";
import four3_3 from "./image/four3_3.png";
import four3_4 from "./image/four3_4.png";
import four3_5 from "./image/four3_5.png";
import four3_6 from "./image/four3_6.png";
import four3_7 from "./image/four3_7.png";
import four3_8 from "./image/four3_8.png";

function SectionFour3() {
    const [t, i18n] = useTranslation();
  return (
    <div className="sectionFour3">
        <div className="container">
            <div className="sectionFour3-wrapper">
                <h6 className="four3-label">{t("sectionFour3.four3-label")}</h6>
                <h2 className="four3-title">{t("sectionFour3.four3-title")}</h2>
                <p className="four3-text">{t("sectionFour3.four3-text")}</p>
                <ul className="four3-list">
                    <li className="four3-item">
                        <div className="four3-img"><img className="four3-rasm" src={four3_1} alt="rasm" /></div>
                        <div className="four3-img"><img className="four3-rasm" src={four3_2} alt="rasm" /></div>
                        <div className="four3-img"><img className="four3-rasm" src={four3_3} alt="rasm" /></div>
                        <div className="four3-img"><img className="four3-rasm" src={four3_4} alt="rasm" /></div>
                        <div className="four3-img">
                            <img className="four3-rasm" src={four3_5} alt="rasm" />
                            <div className="four3List-titles">
                                <h2 className="four3List-title">{t("sectionFour3.four3List-title")}</h2>
                                <p className="four3List-text">{t("sectionFour3.four3List-text")}</p>
                            </div>
                        </div>
                        <div className="four3-img"><img className="four3-rasm" src={four3_6} alt="rasm" /></div>
                        <div className="four3-img"><img className="four3-rasm" src={four3_7} alt="rasm" /></div>
                        <div className="four3-img"><img className="four3-rasm" src={four3_8} alt="rasm" /></div>
                        
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SectionFour3