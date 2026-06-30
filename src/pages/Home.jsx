// src/pages/Home.jsx

import Hero from "../components/Hero";
import CarList from "../components/CarList";

function Home({ favorites, onToggleFavorite }) {
  return (
    <>
      <Hero />
      <CarList favorites={favorites} onToggleFavorite={onToggleFavorite} />
    </>
  );
}

export default Home;
