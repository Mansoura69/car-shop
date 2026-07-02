import { useParams, useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import cars from "../data/cars";
import "../styles/details.css";

function Details({ favorites, onToggleFavorite }) {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find((c) => c.id === Number(id));

  if (!car) {
    return (
      <div className="container details-not-found">
        <h2>{t("details.notFound")}</h2>
        <Link to="/voitures" className="btn btn-primary">
          {t("details.backToList")}
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
        {"<-"} {t("details.back")}
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
          <p className="details-description">
            {t(`cars.descriptions.${car.descriptionKey}`)}
          </p>

          <ul className="details-specs">
            <li>
              <strong>{t("details.year")} :</strong> {car.annee}
            </li>
            <li>
              <strong>{t("details.color")} :</strong>{" "}
              {t(`cars.colors.${car.couleurKey}`)}
            </li>
            <li>
              <strong>{t("details.fuel")} :</strong>{" "}
              {t(`cars.fuels.${car.carburantKey}`)}
            </li>
            <li>
              <strong>{t("details.transmission")} :</strong>{" "}
              {t(`cars.transmissions.${car.transmissionKey}`)}
            </li>
            <li>
              <strong>{t("details.power")} :</strong> {car.puissance}
            </li>
            <li>
              <strong>{t("details.mileage")} :</strong>{" "}
              {car.kilometrage.toLocaleString()} km
            </li>
          </ul>

          <div className="details-actions">
            <button
              className="btn btn-primary"
              onClick={() => onToggleFavorite(car.id)}
            >
              {favorites.includes(car.id)
                ? t("favorites.remove")
                : t("favorites.add")}
            </button>

            <Link to="/contact" className="btn btn-secondary">
              {t("catalog.testDrive")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
