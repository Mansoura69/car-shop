import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

function FavoriteButton({ isFavorite, onToggle }) {
  const { t } = useTranslation();

  return (
    <button
      className={`favorite-btn${isFavorite ? " active" : ""}`}
      onClick={onToggle}
      aria-label={isFavorite ? t("favorites.remove") : t("favorites.add")}
    >
      <FontAwesomeIcon icon={isFavorite ? faHeartSolid : faHeartRegular} />
    </button>
  );
}

export default FavoriteButton;
