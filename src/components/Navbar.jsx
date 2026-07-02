// src/components/Navbar.jsx

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import DarkModeToggle from "./DarkModeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import "../styles/navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

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
            {t("navbar.home")}
          </NavLink>
        </li>

        <li>
          <NavLink to="/voitures" className={getNavClass} onClick={closeMenu}>
            {t("navbar.cars")}
          </NavLink>
        </li>

        <li>
          <NavLink to="/favoris" className={getNavClass} onClick={closeMenu}>
            {t("navbar.favorites")}
          </NavLink>
        </li>

        <li>
          <NavLink to="/a-propos" className={getNavClass} onClick={closeMenu}>
            {t("navbar.about")}
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" className={getNavClass} onClick={closeMenu}>
            {t("navbar.contact")}
          </NavLink>
        </li>
      </ul>

      <div className="navbar-right">
        <LanguageSwitcher />
        <DarkModeToggle />

        <button
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-label={isOpen ? t("navbar.closeMenu") : t("navbar.openMenu")}
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
