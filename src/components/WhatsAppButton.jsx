import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WHATSAPP_NUMBER = "22960000000";

function WhatsAppButton() {
  const { t } = useTranslation();

  const handleClick = () => {
    const url =
      "https://wa.me/" +
      WHATSAPP_NUMBER +
      "?text=" +
      encodeURIComponent(t("whatsapp.message"));

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      className="whatsapp-btn"
      aria-label={t("whatsapp.aria")}
    >
      <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
      <span className="whatsapp-tooltip">{t("whatsapp.tooltip")}</span>
    </button>
  );
}

export default WhatsAppButton;
