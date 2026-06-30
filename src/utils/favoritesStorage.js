// src/utils/favoritesStorage.js

const STORAGE_KEY = "carshop_favorites";

// Lit les favoris enregistrés. Retourne un tableau vide si rien n'existe encore
// ou si jamais la donnée stockée est corrompue (sécurité avec try/catch).
export function loadFavorites() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error("Erreur de lecture des favoris :", error);
    return [];
  }
}

// Enregistre le tableau de favoris dans le localStorage.
// JSON.stringify est obligatoire : le localStorage ne stocke que du texte (string),
// jamais directement un tableau ou un objet JavaScript.
export function saveFavorites(favorites) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
}
