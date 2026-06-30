// src/components/Footer.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
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
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      console.log("Newsletter abonné :", email);
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Colonne 1 : Description & Socials */}
          <div className="footer-col">
            <Link to="/" className="footer-logo">
              Car<span>Shop</span>
            </Link>
            <p className="footer-desc">
              Votre destination de confiance pour l'achat de véhicules d'occasion premium rigoureusement vérifiés et garantis.
            </p>
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

          {/* Colonne 2 : Liens de navigation */}
          <div className="footer-col">
            <h3>Plan du site</h3>
            <div className="footer-links-list">
              <Link to="/">Accueil</Link>
              <Link to="/voitures">Nos Véhicules</Link>
              <Link to="/favoris">Favoris</Link>
              <Link to="/a-propos">À propos</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          {/* Colonne 3 : Contact */}
          <div className="footer-col">
            <h3>Contact</h3>
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

          {/* Colonne 4 : Newsletter */}
          <div className="footer-col">
            <h3>Newsletter</h3>
            {subscribed ? (
              <p className="footer-newsletter-desc" style={{ color: "#2ec4b6" }}>
                ✓ Merci pour votre abonnement !
              </p>
            ) : (
              <>
                <p className="footer-newsletter-desc">
                  Abonnez-vous pour recevoir nos dernières nouveautés et offres exclusives.
                </p>
                <form className="footer-newsletter-form" onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    placeholder="Votre adresse email"
                    className="footer-newsletter-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="btn btn-primary footer-newsletter-btn">
                    <FontAwesomeIcon icon={faPaperPlane} style={{ marginRight: "8px" }} />
                    S'abonner
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Barre inférieure */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} CarShop. Tous droits réservés.</p>
          <div className="footer-bottom-links">
            <Link to="/mentions-legales">Mentions légales</Link>
            <Link to="/politique-confidentialite">Politique de confidentialité</Link>
            <Link to="/cgu">CGU</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
