import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

function FavoriteButton({ isFavorite, onToggle }) {
  return (
    <button
      className={`favorite-btn${isFavorite ? " active" : ""}`}
      onClick={onToggle}
      aria-label={
        isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"
      }
    >
      <FontAwesomeIcon icon={isFavorite ? faHeartSolid : faHeartRegular} />
    </button>
  );
}

export default FavoriteButton;
