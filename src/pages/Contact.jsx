// src/pages/Contact.jsx

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
  faPaperPlane,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation de l'envoi du formulaire
    console.log("Formulaire envoyé :", formData);
    setIsSubmitted(true);
    // Réinitialisation du formulaire
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contact-section container">
      <h1 className="section-title">Contactez-nous</h1>
      <p className="section-subtitle">
        Une question ? Un projet d'achat ? Notre équipe est à votre disposition pour vous répondre dans les plus brefs délais.
      </p>

      <div className="contact-grid">
        {/* Colonne Informations de contact */}
        <div className="contact-info-cards">
          <div className="contact-info-card">
            <div className="contact-info-icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="contact-info-content">
              <h3>Téléphone</h3>
              <p>+33 1 23 45 67 89</p>
              <p>Lundi au Vendredi, 9h - 19h</p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="contact-info-content">
              <h3>Email</h3>
              <p>contact@carshop.fr</p>
              <p>support@carshop.fr</p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div className="contact-info-content">
              <h3>Adresse</h3>
              <p>123 Avenue des Champs-Élysées</p>
              <p>75008 Paris, France</p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <FontAwesomeIcon icon={faClock} />
            </div>
            <div className="contact-info-content">
              <h3>Horaires d'ouverture</h3>
              <p>Lun - Ven : 9h00 - 19h00</p>
              <p>Samedi : 10h00 - 18h00</p>
            </div>
          </div>
        </div>

        {/* Colonne Formulaire de contact */}
        <div className="contact-form-container">
          {isSubmitted ? (
            <div className="form-success-message fade-in">
              <div className="form-success-icon">
                <FontAwesomeIcon icon={faCircleCheck} />
              </div>
              <h2>Message envoyé !</h2>
              <p className="section-subtitle">
                Merci de nous avoir contactés. Nous reviendrons vers vous sous 24h.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => setIsSubmitted(false)}
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2>Envoyez-nous un message</h2>

              <div className="form-group">
                <label htmlFor="name">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Adresse email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="exemple@email.com"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Objet de votre message"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Comment pouvons-nous vous aider ?"
                  className="form-control"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary form-submit-btn">
                <FontAwesomeIcon icon={faPaperPlane} />
                <span>Envoyer le message</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
