// src/components/DarkModeToggle.jsx

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function DarkModeToggle() {
  // On initialise l'état en lisant directement le localStorage.
  // Cette fonction ne s'exécute qu'une seule fois, au premier rendu
  // (c'est le principe de l'initialisation "paresseuse" de useState).
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark";
  });

  // useEffect se déclenche à chaque fois que "darkMode" change.
  // Son rôle ici : synchroniser l'état React avec le DOM réel (le body)
  // et avec le localStorage, pour que le choix soit conservé après un rechargement.
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      className="dark-mode-toggle"
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Basculer le mode sombre"
    >
      <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
    </button>
  );
}

export default DarkModeToggle;
