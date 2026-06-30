// src/pages/About.jsx

import { Link } from "react-router-dom";
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
  return (
    <section className="about-section container">
      <h1 className="section-title">À propos de CarShop</h1>
      <p className="section-subtitle">
        Votre partenaire de confiance pour l'achat de véhicules d'occasion premium.
      </p>

      {/* Statistiques clés */}
      <div className="about-stats-grid">
        <div className="about-stat-card">
          <div className="about-stat-number">150+</div>
          <div className="about-stat-label">Véhicules vendus par mois</div>
        </div>
        <div className="about-stat-card">
          <div className="about-stat-number">98%</div>
          <div className="about-stat-label">Clients satisfaits</div>
        </div>
        <div className="about-stat-card">
          <div className="about-stat-number">110</div>
          <div className="about-stat-label">Points de contrôle certifiés</div>
        </div>
      </div>

      {/* Histoire et Mission */}
      <div className="about-grid-blocks">
        <div className="about-block-card">
          <div className="about-block-icon">
            <FontAwesomeIcon icon={faBookOpen} />
          </div>
          <h2>Notre histoire</h2>
          <p>
            Fondé avec la passion de l'automobile, CarShop est né de l'envie de
            simplifier l'achat de voitures d'occasion en proposant uniquement des
            véhicules rigoureusement sélectionnés, inspectés et vérifiés par nos
            experts mécaniciens.
          </p>
        </div>

        <div className="about-block-card">
          <div className="about-block-icon">
            <FontAwesomeIcon icon={faBullseye} />
          </div>
          <h2>Notre mission</h2>
          <p>
            Offrir à chaque client une expérience d'achat transparente, fiable et
            sans stress. Nous mettons la qualité et la confiance au cœur de chaque
            transaction, pour que vous preniez la route en toute sérénité.
          </p>
        </div>
      </div>

      {/* Valeurs */}
      <div className="values-section">
        <h2>Nos valeurs fondamentales</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">
              <FontAwesomeIcon icon={faShieldHalved} />
            </div>
            <h3>Transparence</h3>
            <p>
              Historique complet et rapports de diagnostic détaillés fournis pour chaque voiture.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <FontAwesomeIcon icon={faAward} />
            </div>
            <h3>Qualité</h3>
            <p>
              Chaque véhicule passe un test rigoureux sur 110 points de contrôle clés.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <FontAwesomeIcon icon={faUserCheck} />
            </div>
            <h3>Service Client</h3>
            <p>
              Un accompagnement personnalisé de la recherche initiale jusqu'à la livraison finale.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <FontAwesomeIcon icon={faHandshake} />
            </div>
            <h3>Confiance</h3>
            <p>
              Des garanties complètes et des prix justes, sans frais cachés ni surprises.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="about-cta">
        <div className="about-block-icon" style={{ fontSize: "36px" }}>
          <FontAwesomeIcon icon={faCar} />
        </div>
        <h2>Trouvez votre prochain véhicule dès aujourd'hui</h2>
        <p>
          Parcourez notre catalogue en ligne de véhicules d'occasion récents et trouvez le modèle qui correspond parfaitement à vos besoins et à votre budget.
        </p>
        <div className="about-cta-buttons">
          <Link to="/voitures" className="btn btn-primary">
            Voir notre catalogue
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
