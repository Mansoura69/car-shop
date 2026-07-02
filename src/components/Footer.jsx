// src/components/Footer.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/footer.css";

function Footer() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (email.trim()) {
      console.log("Newsletter:", email);
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link to="/" className="footer-logo">
              Car<span>Shop</span>
            </Link>

            <p className="footer-desc">{t("footer.description")}</p>

            <div className="footer-socials">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="X (Twitter)"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h3>{t("footer.sitemap")}</h3>

            <div className="footer-links-list">
              <Link to="/">{t("navbar.home")}</Link>
              <Link to="/voitures">{t("footer.vehicles")}</Link>
              <Link to="/favoris">{t("navbar.favorites")}</Link>
              <Link to="/a-propos">{t("navbar.about")}</Link>
              <Link to="/contact">{t("navbar.contact")}</Link>
            </div>
          </div>

          <div className="footer-col">
            <h3>{t("navbar.contact")}</h3>

            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <FontAwesomeIcon icon={faPhone} />
                <span>+33 1 23 45 67 89</span>
              </div>

              <div className="footer-contact-item">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>contact@carshop.fr</span>
              </div>

              <div className="footer-contact-item">
                <FontAwesomeIcon icon={faLocationDot} />
                <span>
                  123 Avenue des Champs-Élysées
                  <br />
                  75008 Paris, France
                </span>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <h3>{t("footer.newsletter")}</h3>

            {subscribed ? (
              <p
                className="footer-newsletter-desc"
                style={{ color: "#2ec4b6" }}
              >
                {t("footer.subscribed")}
              </p>
            ) : (
              <>
                <p className="footer-newsletter-desc">
                  {t("footer.newsletterText")}
                </p>

                <form
                  className="footer-newsletter-form"
                  onSubmit={handleSubscribe}
                >
                  <input
                    type="email"
                    placeholder={t("footer.emailPlaceholder")}
                    className="footer-newsletter-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  <button
                    type="submit"
                    className="btn btn-primary footer-newsletter-btn"
                  >
                    <FontAwesomeIcon icon={faPaperPlane} />
                    {t("footer.subscribe")}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} CarShop. {t("footer.rights")}
          </p>

          <div className="footer-bottom-links">
            <Link to="/mentions-legales">{t("footer.legal")}</Link>
            <Link to="/politique-confidentialite">{t("footer.privacy")}</Link>
            <Link to="/cgu">{t("footer.terms")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
