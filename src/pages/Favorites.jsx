// src/pages/Favorites.jsx

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import cars from "../data/cars";
import CarCard from "../components/CarCard";
import "../styles/cards.css";

function Favorites({ favorites, onToggleFavorite }) {
  const { t } = useTranslation();

  const favoriteCars = cars.filter((car) => favorites.includes(car.id));

  return (
    <section className="car-list-section container">
      <h1 className="section-title">{t("favoritesPage.title")}</h1>

      {favoriteCars.length === 0 ? (
        <div style={{ textAlign: "center", padding: "40px 0" }}>
          <p className="section-subtitle">{t("favoritesPage.empty")}</p>

          <Link to="/voitures" className="btn btn-primary">
            {t("favoritesPage.discover")}
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
