import { useTranslation } from "react-i18next";

function Filter({ cars, filters, onFilterChange, sortOption, onSortChange }) {
  const { t } = useTranslation();

  const marques = [...new Set(cars.map((car) => car.marque))].sort();
  const carburants = [...new Set(cars.map((car) => car.carburantKey))].sort();
  const transmissions = [
    ...new Set(cars.map((car) => car.transmissionKey)),
  ].sort();
  const annees = [...new Set(cars.map((car) => car.annee))].sort(
    (a, b) => b - a,
  );

  return (
    <div className="filters">
      <select
        value={filters.marque}
        onChange={(e) => onFilterChange("marque", e.target.value)}
      >
        <option value="">{t("filters.allBrands")}</option>
        {marques.map((marque) => (
          <option key={marque} value={marque}>
            {marque}
          </option>
        ))}
      </select>

      <select
        value={filters.annee}
        onChange={(e) => onFilterChange("annee", e.target.value)}
      >
        <option value="">{t("filters.allYears")}</option>
        {annees.map((annee) => (
          <option key={annee} value={annee}>
            {annee}
          </option>
        ))}
      </select>

      <select
        value={filters.carburant}
        onChange={(e) => onFilterChange("carburant", e.target.value)}
      >
        <option value="">{t("filters.allFuels")}</option>
        {carburants.map((carburant) => (
          <option key={carburant} value={carburant}>
            {t(`cars.fuels.${carburant}`)}
          </option>
        ))}
      </select>

      <select
        value={filters.transmission}
        onChange={(e) => onFilterChange("transmission", e.target.value)}
      >
        <option value="">{t("filters.allTransmissions")}</option>
        {transmissions.map((transmission) => (
          <option key={transmission} value={transmission}>
            {t(`cars.transmissions.${transmission}`)}
          </option>
        ))}
      </select>

      <select
        value={filters.prixMax}
        onChange={(e) => onFilterChange("prixMax", e.target.value)}
      >
        <option value="">{t("filters.allPrices")}</option>
        <option value="20000">
          {t("filters.lessThan", { price: "20 000" })}
        </option>
        <option value="30000">
          {t("filters.lessThan", { price: "30 000" })}
        </option>
        <option value="40000">
          {t("filters.lessThan", { price: "40 000" })}
        </option>
        <option value="50000">
          {t("filters.lessThan", { price: "50 000" })}
        </option>
      </select>

      <select value={sortOption} onChange={(e) => onSortChange(e.target.value)}>
        <option value="">{t("filters.sortBy")}</option>
        <option value="prix-asc">{t("filters.priceAsc")}</option>
        <option value="prix-desc">{t("filters.priceDesc")}</option>
        <option value="annee-desc">{t("filters.yearDesc")}</option>
        <option value="annee-asc">{t("filters.yearAsc")}</option>
        <option value="alpha">{t("filters.alpha")}</option>
      </select>
    </div>
  );
}

export default Filter;
