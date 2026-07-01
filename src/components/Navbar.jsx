// src/components/Navbar.jsx

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import DarkModeToggle from "./DarkModeToggle";
import "../styles/navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // NavLink reçoit une fonction pour className (pas juste une string).
  // React Router appelle cette fonction en lui passant { isActive }
  // qui est true si l'URL actuelle correspond au lien.
  // On s'en sert pour ajouter la classe "active" dynamiquement.
  const getNavClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
        Car<span>Shop</span>
      </NavLink>

      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/" className={getNavClass} onClick={closeMenu} end>
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/voitures" className={getNavClass} onClick={closeMenu}>
            Voitures
          </NavLink>
        </li>
        <li>
          <NavLink to="/favoris" className={getNavClass} onClick={closeMenu}>
            Favoris
          </NavLink>
        </li>
        <li>
          <NavLink to="/a-propos" className={getNavClass} onClick={closeMenu}>
            À propos
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={getNavClass} onClick={closeMenu}>
            Contact
          </NavLink>
        </li>
      </ul>

      <div className="navbar-right">
        <DarkModeToggle />
        <button className="navbar-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
