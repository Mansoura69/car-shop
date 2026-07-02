import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/hero.css";
import tucson from "../assets/images/hyundai-tucson.jpg";

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-bg">
        <img src={tucson} alt="" aria-hidden="true" />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <h1 className="hero-title fade-in">
          {t("hero.titleStart")} <span>{t("hero.titleHighlight")}</span>{" "}
          {t("hero.titleEnd")}
        </h1>

        <p className="hero-text fade-in fade-in-delay-1">
          {t("hero.subtitle")}
        </p>

        <div className="hero-buttons fade-in fade-in-delay-2">
          <Link to="/voitures" className="btn btn-primary">
            {t("hero.primaryButton")}
          </Link>

          <Link to="/contact" className="btn btn-outline-white">
            {t("hero.secondaryButton")}
          </Link>
        </div>
      </div>

      <span className="hero-scroll-hint">{t("hero.scroll")}</span>
    </section>
  );
}

export default Hero;
