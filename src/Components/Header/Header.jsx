import "./Header.css";
import React from 'react'
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
L

function Header() {
    const [t, i18n] = useTranslation();
  return (
    <div className="header">
        <div className="container">
            <div className="header-container">
                <a className="logo" href="#"></a>
                <ul className="header-list">
                    <li><Link className="header-link" to="home">{t("header.home")}</Link></li>
                    <li><Link className="header-link" to="services">{t("header.services")}</Link></li>
                    <li><Link className="header-link" to="company">{t("header.company")}</Link></li>
                    <li><Link className="header-link" to="career">{t("header.career")}</Link></li>
                    <li><Link className="header-link" to="blog">{t("header.blog")}</Link></li>
                    <li><Link className="header-link" to="contact us">{t("header.contact us")}</Link></li>
                    <li><Link className="header-link" to=" clone project">{t("header.clone project")}</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header