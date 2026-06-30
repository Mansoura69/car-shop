import cars from "../data/cars";
import CarCard from "./CarCard";
import { useSectionReveal } from "../hooks/useSectionReveal";
import "../styles/cards.css";

function CarList({ favorites, onToggleFavorite }) {
  const sectionRef = useSectionReveal();

  return (
    <section className="car-list-section section-reveal" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Nos voitures disponibles</h2>
        <p className="section-subtitle">
          Parcourez notre sélection de {cars.length} véhicules premium
        </p>

        <div className="car-list-grid">
          {cars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              isFavorite={favorites.includes(car.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CarList;
