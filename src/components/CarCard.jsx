import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";
import "../styles/cards.css";

function CarCard({ car, isFavorite, onToggleFavorite }) {
  return (
    <div className="car-card">
      <div className="car-card-image">
        <img
          src={car.image}
          alt={`${car.marque} ${car.modele}`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/640x400/1f2937/f97316?text=Image+indisponible";
          }}
        />
        <FavoriteButton
          isFavorite={isFavorite}
          onToggle={() => onToggleFavorite(car.id)}
        />
      </div>

      <div className="car-card-body">
        <h3 className="car-card-title">
          {car.marque} {car.modele}
        </h3>
        <p className="car-card-year">{car.annee}</p>

        <p className="car-card-price">{car.prix.toLocaleString()} €</p>

        <div className="car-card-actions">
          <Link
            to={`/voitures/${car.id}`}
            className="btn btn-primary car-card-btn"
          >
            Voir les détails
          </Link>
          <Link to="/contact" className="btn btn-secondary car-card-btn">
            Demander un essai
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
