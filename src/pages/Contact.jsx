import { useState } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
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
    console.log("Contact form:", formData);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contact-section container">
      <h1 className="section-title">{t("contactPage.title")}</h1>
      <p className="section-subtitle">{t("contactPage.subtitle")}</p>

      <div className="contact-grid">
        <div className="contact-info-cards">
          <div className="contact-info-card">
            <div className="contact-info-icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="contact-info-content">
              <h3>{t("contactPage.phone")}</h3>
              <p>+33 1 23 45 67 89</p>
              <p>{t("contactPage.phoneHours")}</p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="contact-info-content">
              <h3>{t("contactPage.email")}</h3>
              <p>contact@carshop.fr</p>
              <p>support@carshop.fr</p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div className="contact-info-content">
              <h3>{t("contactPage.address")}</h3>
              <p>123 Avenue des Champs-Elysees</p>
              <p>75008 Paris, France</p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <FontAwesomeIcon icon={faClock} />
            </div>
            <div className="contact-info-content">
              <h3>{t("contactPage.openingHours")}</h3>
              <p>{t("contactPage.week")}</p>
              <p>{t("contactPage.saturday")}</p>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          {isSubmitted ? (
            <div className="form-success-message fade-in">
              <div className="form-success-icon">
                <FontAwesomeIcon icon={faCircleCheck} />
              </div>
              <h2>{t("contactPage.successTitle")}</h2>
              <p className="section-subtitle">{t("contactPage.successText")}</p>
              <button
                className="btn btn-primary"
                onClick={() => setIsSubmitted(false)}
              >
                {t("contactPage.sendAnother")}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2>{t("contactPage.formTitle")}</h2>

              <div className="form-group">
                <label htmlFor="name">{t("contactPage.nameLabel")}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("contactPage.namePlaceholder")}
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t("contactPage.emailLabel")}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("contactPage.emailPlaceholder")}
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">{t("contactPage.subjectLabel")}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t("contactPage.subjectPlaceholder")}
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">{t("contactPage.messageLabel")}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("contactPage.messagePlaceholder")}
                  className="form-control"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary form-submit-btn">
                <FontAwesomeIcon icon={faPaperPlane} />
                <span>{t("contactPage.submit")}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
