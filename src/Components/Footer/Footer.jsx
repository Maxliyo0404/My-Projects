import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import "./Footer.css";

function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
            <div className="logo-square"></div>
        <div className="footer-top">
            
          <div className="footer-left">

            <h2 className='footer-title'>{t("footer.footer-title")}</h2>
            <div className="contact-info">
              <h4 className='footer-talk'><strong>{t("footer.talk")}</strong></h4>
              <p className='footer-text1'>{t("footer.footer-text1")}</p>
              <p className='footer-text2'>{t("footer.footer-text2")}</p>
              <p className='footer-text3'>{t("footer.footer-text3")}</p>
            </div>
          </div>
          <div className="footer-links">
            <ul className='footer-list'>
              <li className='footer-item'>
                <a className='footer-link1' href="#">{t("footer.footer-home")}</a>
                <a className='footer-link' href="#">{t("footer.footer-Service")}</a>
                <a className='footer-link' href="#">{t("footer.footer-company")}</a>
                <a className='footer-link' href="#">{t("footer.footer-career")}</a>
                <a className='footer-link' href="#">{t("footer.footer-news")}</a>
              </li>
              <li className='footer-item'>
                <a className='footer-link1' href="#">{t("footer.footer-Service")}</a>
                <a className='footer-link' href="#">{t("footer.footer-Technical support")}</a>
                <a className='footer-link' href="#">{t("footer.footer-Testing")}</a>
                <a className='footer-link' href="#">{t("footer.footer-Development")}</a>
                <a className='footer-link' href="#">{t("footer.footer-AWS/Azure")}</a>
                <a className='footer-link' href="#">{t("footer.footer-Consulting")}</a>
                <a className='footer-link' href="#">{t("footer.footer-Information Technology")}</a>
              </li>
              <li className='footer-item'>
                <a className='footer-link1' href="#">{t("footer.footer-Resourses")}</a>
                <a className='footer-link' href="#">{t("footer.footer-About Us")}</a>
                <a className='footer-link' href="#">{t("footer.footer-Testimonial")}</a>
                <a className='footer-link' href="#">{t("footer.footer-Privacy Policy")}</a>
                <a className='footer-link' href="#">{t("footer.footer-Terms of use")}</a>
                <a className='footer-link' href="#">{t("footer.footer-Blog")}</a>
              </li>
            </ul>
            <div className="footer-listee">
                <div className="footer-lis"></div>
                <a className='footer-linke' href="#">{t("footer.footer-linke")}<span className='footer-span'></span></a>
            </div>
          </div>
        </div>

      <div className="footer-bottom">
        <div className="container bottom-wrapper">
          <div className="copyright">
            <span className="brand-name">{t("footer.brand-name")}</span> {t("footer.footer-brand")}
          </div>
          <div className="social-icons">
            <FaFacebook /> <FaTwitter /> <FaInstagram /> <FaLinkedin />
          </div>
        </div>
      </div>
      </div>
      </div>
    </footer>
  );
}

export default Footer;