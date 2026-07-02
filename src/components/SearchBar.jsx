// src/components/SearchBar.jsx

import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBar({ searchTerm, onSearchChange }) {
  const { t } = useTranslation();

  return (
    <div className="search-bar">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />

      <input
        type="text"
        placeholder={t("catalog.searchPlaceholder")}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
