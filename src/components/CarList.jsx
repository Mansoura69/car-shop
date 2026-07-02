// src/components/CarList.jsx

import { useState } from "react";
import { useTranslation } from "react-i18next";
import cars from "../data/cars";
import CarCard from "./CarCard";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import "../styles/cards.css";

function CarList({ favorites, onToggleFavorite }) {
  const { t } = useTranslation();

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  const [filters, setFilters] = useState({
    marque: "",
    annee: "",
    carburant: "",
    transmission: "",
    prixMax: "",
  });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  let result = cars.filter((car) => {
    const term = searchTerm.toLowerCase();

    return (
      car.marque.toLowerCase().includes(term) ||
      car.modele.toLowerCase().includes(term)
    );
  });

  result = result.filter((car) => {
    return (
      (filters.marque === "" || car.marque === filters.marque) &&
      (filters.annee === "" || car.annee === Number(filters.annee)) &&
      (filters.carburant === "" || car.carburantKey === filters.carburant) &&
      (filters.transmission === "" ||
        car.transmissionKey === filters.transmission) &&
      (filters.prixMax === "" || car.prix <= Number(filters.prixMax))
    );
  });

  if (sortOption === "prix-asc") {
    result = [...result].sort((a, b) => a.prix - b.prix);
  } else if (sortOption === "prix-desc") {
    result = [...result].sort((a, b) => b.prix - a.prix);
  } else if (sortOption === "annee-desc") {
    result = [...result].sort((a, b) => b.annee - a.annee);
  } else if (sortOption === "annee-asc") {
    result = [...result].sort((a, b) => a.annee - b.annee);
  } else if (sortOption === "alpha") {
    result = [...result].sort((a, b) => a.marque.localeCompare(b.marque));
  }

  return (
    <section className="car-list-section">
      <div className="container">
        <h2 className="section-title">{t("catalog.title")}</h2>

        <p className="section-subtitle">
          {t("catalog.result", { count: result.length })}
        </p>

        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        <Filter
          cars={cars}
          filters={filters}
          onFilterChange={handleFilterChange}
          sortOption={sortOption}
          onSortChange={setSortOption}
        />

        {result.length === 0 ? (
          <p className="no-results">{t("catalog.noResults")}</p>
        ) : (
          <div className="car-list-grid">
            {result.map((car) => (
              <CarCard
                key={car.id}
                car={car}
                isFavorite={favorites.includes(car.id)}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default CarList;
