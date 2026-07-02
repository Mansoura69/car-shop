import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faBullseye,
  faAward,
  faShieldHalved,
  faUserCheck,
  faHandshake,
  faCar,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/about.css";

function About() {
  const { t } = useTranslation();

  return (
    <section className="about-section container">
      <h1 className="section-title">{t("about.title")}</h1>
      <p className="section-subtitle">{t("about.subtitle")}</p>

      <div className="about-stats-grid">
        <div className="about-stat-card">
          <div className="about-stat-number">150+</div>
          <div className="about-stat-label">{t("about.sold")}</div>
        </div>

        <div className="about-stat-card">
          <div className="about-stat-number">98%</div>
          <div className="about-stat-label">{t("about.satisfied")}</div>
        </div>

        <div className="about-stat-card">
          <div className="about-stat-number">110</div>
          <div className="about-stat-label">{t("about.checks")}</div>
        </div>
      </div>

      <div className="about-grid-blocks">
        <div className="about-block-card">
          <div className="about-block-icon">
            <FontAwesomeIcon icon={faBookOpen} />
          </div>
          <h2>{t("about.historyTitle")}</h2>
          <p>{t("about.historyText")}</p>
        </div>

        <div className="about-block-card">
          <div className="about-block-icon">
            <FontAwesomeIcon icon={faBullseye} />
          </div>
          <h2>{t("about.missionTitle")}</h2>
          <p>{t("about.missionText")}</p>
        </div>
      </div>

      <div className="values-section">
        <h2>{t("about.valuesTitle")}</h2>

        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">
              <FontAwesomeIcon icon={faShieldHalved} />
            </div>
            <h3>{t("about.transparencyTitle")}</h3>
            <p>{t("about.transparencyText")}</p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <FontAwesomeIcon icon={faAward} />
            </div>
            <h3>{t("about.qualityTitle")}</h3>
            <p>{t("about.qualityText")}</p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <FontAwesomeIcon icon={faUserCheck} />
            </div>
            <h3>{t("about.serviceTitle")}</h3>
            <p>{t("about.serviceText")}</p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <FontAwesomeIcon icon={faHandshake} />
            </div>
            <h3>{t("about.trustTitle")}</h3>
            <p>{t("about.trustText")}</p>
          </div>
        </div>
      </div>

      <div className="about-cta">
        <div className="about-block-icon" style={{ fontSize: "36px" }}>
          <FontAwesomeIcon icon={faCar} />
        </div>
        <h2>{t("about.ctaTitle")}</h2>
        <p>{t("about.ctaText")}</p>

        <div className="about-cta-buttons">
          <Link to="/voitures" className="btn btn-primary">
            {t("about.catalogButton")}
          </Link>

          <Link to="/contact" className="btn btn-secondary">
            {t("about.contactButton")}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
