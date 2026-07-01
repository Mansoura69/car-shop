// src/App.jsx
import WhatsAppButton from "./components/WhatsAppButton";
import FloatingParticles from "./components/FloatingParticles";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Details from "./pages/Details";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";
import { loadFavorites, saveFavorites } from "./utils/favoritesStorage";
import "./styles/global.css";

function App() {
  // On initialise l'état directement avec les favoris déjà enregistrés (s'il y en a).
  const [favorites, setFavorites] = useState(loadFavorites);

  // Chaque fois que "favorites" change, on sauvegarde automatiquement
  // dans le localStorage. Plus besoin d'appeler saveFavorites() manuellement
  // à chaque endroit où on modifie les favoris.
  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  // Fonction centrale : ajoute ou retire un id de voiture des favoris.
  // Elle est définie ici une seule fois, puis transmise (en props) à toutes les pages qui en ont besoin.
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id],
    );
  };

  return (
    <div className="App">
      <Navbar />

      <FloatingParticles count={20} />

      <main className="page-content">
        <Routes>
          <Route
            path="/"
            element={
              <Home favorites={favorites} onToggleFavorite={toggleFavorite} />
            }
          />
          <Route
            path="/voitures"
            element={
              <Home favorites={favorites} onToggleFavorite={toggleFavorite} />
            }
          />
          <Route
            path="/voitures/:id"
            element={
              <Details favorites={favorites} onToggleFavorite={toggleFavorite} />
            }
          />
          <Route
            path="/favoris"
            element={
              <Favorites
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
              />
            }
          />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <WhatsAppButton />

      <Footer />
    </div>
  );
}

export default App;
