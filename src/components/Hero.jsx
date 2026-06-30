import { Link } from "react-router-dom";
import "../styles/hero.css";
import tucson from "../assets/images/hyundai-tucson.jpg";
function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src={tucson} alt="" aria-hidden="true" />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <h1 className="hero-title fade-in">
          Trouvez la voiture <span>parfaite</span> pour vous
        </h1>
        <p className="hero-text fade-in fade-in-delay-1">
          Découvrez notre sélection de véhicules premium, vérifiés et prêts à
          prendre la route. Qualité, confiance et performance réunies.
        </p>
        <div className="hero-buttons fade-in fade-in-delay-2">
          <Link to="/voitures" className="btn btn-primary">
            Découvrir nos voitures
          </Link>
          <Link to="/contact" className="btn btn-outline-white">
            Nous contacter
          </Link>
        </div>
      </div>

      <span className="hero-scroll-hint">Défiler</span>
    </section>
  );
}

export default Hero;
