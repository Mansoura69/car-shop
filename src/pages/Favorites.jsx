// src/pages/Favorites.jsx

import cars from "../data/cars";
import CarCard from "../components/CarCard";
import { Link } from "react-router-dom";
import "../styles/cards.css";

function Favorites({ favorites, onToggleFavorite }) {
  // On filtre le tableau complet de voitures pour ne garder
  // que celles dont l'id est présent dans le tableau "favorites".
  const favoriteCars = cars.filter((car) => favorites.includes(car.id));

  return (
    <section className="car-list-section container">
      <h1 className="section-title">Mes favoris</h1>

      {favoriteCars.length === 0 ? (
        <div style={{ textAlign: "center", padding: "40px 0" }}>
          <p className="section-subtitle">
            Vous n'avez encore ajouté aucune voiture à vos favoris.
          </p>
          <Link to="/voitures" className="btn btn-primary">
            Découvrir nos voitures
          </Link>
        </div>
      ) : (
        <div className="car-list-grid">
          {favoriteCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              isFavorite={true}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Favorites;
