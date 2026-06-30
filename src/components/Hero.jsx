import { Link } from "react-router-dom";
import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1920&q=80"
          alt=""
          aria-hidden="true"
        />
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
