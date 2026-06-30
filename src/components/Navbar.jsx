import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import DarkModeToggle from "./DarkModeToggle";
import "../styles/navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinkClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <Link to="/" className="navbar-logo">
        Car<span>Shop</span>
      </Link>

      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/" end onClick={() => setIsOpen(false)} className={navLinkClass}>
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/voitures"
            onClick={() => setIsOpen(false)}
            className={navLinkClass}
          >
            Voitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favoris"
            onClick={() => setIsOpen(false)}
            className={navLinkClass}
          >
            Favoris
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/a-propos"
            onClick={() => setIsOpen(false)}
            className={navLinkClass}
          >
            À propos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={navLinkClass}
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <div className="navbar-actions">
        <DarkModeToggle />
        <button
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
