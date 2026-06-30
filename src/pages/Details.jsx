// src/pages/Details.jsx

import { useParams, useNavigate, Link } from "react-router-dom";
import cars from "../data/cars";
import "../styles/details.css";

// Dans src/pages/Details.jsx, modifie la ligne de fonction :
function Details({ favorites, onToggleFavorite }) {
  // useParams() lit les paramètres définis dans la route (ex: /voitures/:id)
  // Ici, "id" arrive toujours sous forme de texte (string), même si c'est un nombre dans l'URL.
  const { id } = useParams();
  const navigate = useNavigate();

  // On cherche la voiture correspondante dans notre tableau.
  // Number(id) convertit le texte "3" en nombre 3, pour pouvoir le comparer à car.id.
  const car = cars.find((c) => c.id === Number(id));

  // Si aucune voiture ne correspond (id invalide ou inexistant), on affiche un message clair
  // au lieu de planter l'application.
  if (!car) {
    return (
      <div className="container details-not-found">
        <h2>Voiture introuvable</h2>
        <Link to="/voitures" className="btn btn-primary">
          Retour à la liste
        </Link>
      </div>
    );
  }

  return (
    <section className="details-section container">
      <button
        className="btn btn-secondary details-back"
        onClick={() => navigate(-1)}
      >
        ← Retour
      </button>

      <div className="details-content">
        <div className="details-image">
          <img src={car.image} alt={`${car.marque} ${car.modele}`} />
        </div>

        <div className="details-info">
          <h1>
            {car.marque} {car.modele}
          </h1>
          <p className="details-price">{car.prix.toLocaleString()} €</p>
          <p className="details-description">{car.description}</p>

          <ul className="details-specs">
            <li>
              <strong>Année :</strong> {car.annee}
            </li>
            <li>
              <strong>Couleur :</strong> {car.couleur}
            </li>
            <li>
              <strong>Carburant :</strong> {car.carburant}
            </li>
            <li>
              <strong>Transmission :</strong> {car.transmission}
            </li>
            <li>
              <strong>Puissance :</strong> {car.puissance}
            </li>
            <li>
              <strong>Kilométrage :</strong> {car.kilometrage.toLocaleString()}{" "}
              km
            </li>
          </ul>

          <div className="details-actions">
            <button
              className="btn btn-primary"
              onClick={() => onToggleFavorite(car.id)}
            >
              {favorites.includes(car.id)
                ? "Retirer des favoris"
                : "Ajouter aux favoris"}
            </button>
            <Link to="/contact" className="btn btn-secondary">
              Demander un essai
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
