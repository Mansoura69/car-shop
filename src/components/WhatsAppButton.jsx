// src/components/WhatsAppButton.jsx

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WHATSAPP_NUMBER = "22960000000";
const WHATSAPP_MESSAGE =
  "Bonjour, je suis intéressé par un véhicule sur CarShop !";

function WhatsAppButton() {
  const handleClick = () => {
    const url =
      "https://wa.me/" +
      WHATSAPP_NUMBER +
      "?text=" +
      encodeURIComponent(WHATSAPP_MESSAGE);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      className="whatsapp-btn"
      aria-label="Nous contacter sur WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
      <span className="whatsapp-tooltip">Contactez-nous</span>
    </button>
  );
}

export default WhatsAppButton;
