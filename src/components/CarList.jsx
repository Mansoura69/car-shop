// src/components/CarList.jsx

import { useState } from "react";
import cars from "../data/cars";
import CarCard from "./CarCard";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import "../styles/cards.css";

function CarList({ favorites, onToggleFavorite }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  // Un seul objet "filters" regroupe tous les filtres, plutôt que 5 useState séparés.
  // C'est plus simple à transmettre et à réinitialiser.
  const [filters, setFilters] = useState({
    marque: "",
    annee: "",
    carburant: "",
    transmission: "",
    prixMax: "",
  });

  // Fonction générique pour mettre à jour UN SEUL champ de l'objet filters,
  // sans toucher aux autres. Le spread "...filters" recopie les filtres existants,
  // puis [key]: value écrase uniquement celui qui vient de changer.
  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  // === ÉTAPE 1 : recherche ===
  // .filter() garde uniquement les voitures dont la marque OU le modèle
  // contient le texte tapé (insensible à la casse grâce à toLowerCase()).
  let result = cars.filter((car) => {
    const term = searchTerm.toLowerCase();
    return (
      car.marque.toLowerCase().includes(term) ||
      car.modele.toLowerCase().includes(term)
    );
  });

  // === ÉTAPE 2 : filtres ===
  // Pour chaque filtre actif (différent de ""), on réduit encore le résultat.
  // Si un filtre est vide (""), on ne l'applique pas (on garde tout).
  result = result.filter((car) => {
    return (
      (filters.marque === "" || car.marque === filters.marque) &&
      (filters.annee === "" || car.annee === Number(filters.annee)) &&
      (filters.carburant === "" || car.carburant === filters.carburant) &&
      (filters.transmission === "" ||
        car.transmission === filters.transmission) &&
      (filters.prixMax === "" || car.prix <= Number(filters.prixMax))
    );
  });

  // === ÉTAPE 3 : tri ===
  // .sort() modifie l'ordre. On clone le tableau avec [...result] avant de trier,
  // car .sort() modifie le tableau "en place" — une mauvaise pratique en React
  // serait de trier directement "result" sans le cloner.
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
        <h2 className="section-title">Nos voitures disponibles</h2>
        <p className="section-subtitle">
          {result.length} véhicule{result.length > 1 ? "s" : ""} trouvé
          {result.length > 1 ? "s" : ""}
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
          <p className="no-results">
            Aucune voiture ne correspond à votre recherche.
          </p>
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
