// src/components/SearchBar.jsx

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// SearchBar ne gère pas sa propre valeur : c'est un "composant contrôlé".
// Le parent (CarList) possède la vraie donnée (searchTerm) et la fonction pour la modifier.
// SearchBar se contente d'afficher la valeur reçue et de signaler chaque frappe au clavier.
function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
      <input
        type="text"
        placeholder="Rechercher par marque ou modèle..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
