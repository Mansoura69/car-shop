// src/components/Filter.jsx

// On reçoit "cars" (le tableau complet) pour générer dynamiquement les options des filtres
// (ex: la liste des marques disponibles), plutôt que de les écrire en dur.
// On reçoit aussi les valeurs actuelles des filtres + la fonction pour les modifier.
function Filter({ cars, filters, onFilterChange, sortOption, onSortChange }) {
  // [...new Set(...)] est une technique classique pour obtenir des valeurs UNIQUES
  // à partir d'un tableau. Ici, on récupère toutes les marques sans doublons.
  const marques = [...new Set(cars.map((car) => car.marque))].sort();
  const carburants = [...new Set(cars.map((car) => car.carburant))].sort();
  const transmissions = [
    ...new Set(cars.map((car) => car.transmission)),
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
        <option value="">Toutes les marques</option>
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
        <option value="">Toutes les années</option>
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
        <option value="">Tous les carburants</option>
        {carburants.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <select
        value={filters.transmission}
        onChange={(e) => onFilterChange("transmission", e.target.value)}
      >
        <option value="">Toutes les transmissions</option>
        {transmissions.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      <select
        value={filters.prixMax}
        onChange={(e) => onFilterChange("prixMax", e.target.value)}
      >
        <option value="">Tous les prix</option>
        <option value="20000">Moins de 20 000 €</option>
        <option value="30000">Moins de 30 000 €</option>
        <option value="40000">Moins de 40 000 €</option>
        <option value="50000">Moins de 50 000 €</option>
      </select>

      <select value={sortOption} onChange={(e) => onSortChange(e.target.value)}>
        <option value="">Trier par...</option>
        <option value="prix-asc">Prix croissant</option>
        <option value="prix-desc">Prix décroissant</option>
        <option value="annee-desc">Plus récentes</option>
        <option value="annee-asc">Plus anciennes</option>
        <option value="alpha">Ordre alphabétique</option>
      </select>
    </div>
  );
}

export default Filter;
