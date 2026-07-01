// src/components/FloatingParticles.jsx

import { useEffect, useState } from "react";
import "../styles/particles.css";

// Liste des emojis qui vont flotter sur la page
const SYMBOLS = ["🚗", "🚙", "🏎️", "🌸", "🌼", "🌺", "⭐", "✨", "🚘"];

// Génère un nombre aléatoire entre min et max
const random = (min, max) => Math.random() * (max - min) + min;

// Génère un tableau de N particules avec des propriétés aléatoires
const generateParticles = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
    left: random(0, 100), // position horizontale en %
    size: random(14, 28), // taille en px
    duration: random(8, 20), // durée de l'animation en secondes
    delay: random(0, 15), // délai avant départ en secondes
    opacity: random(0.15, 0.45), // transparence (discret, pas gênant)
    drift: random(-60, 60), // dérive horizontale pendant la montée
  }));
};

function FloatingParticles({ count = 20 }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setParticles(generateParticles(count));
  }, [count]);

  return (
    <div className="particles-container" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            "--drift": `${p.drift}px`,
          }}
        >
          {p.symbol}
        </span>
      ))}
    </div>
  );
}

export default FloatingParticles;
