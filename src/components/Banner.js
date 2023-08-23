import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";

// Composant Banner pour afficher la bannière avec le logo et les liens de navigation
const Banner = () => {
  // Récupère l'objet 'location' pour connaître l'URL actuelle
  const location = useLocation();

  // Définit les liens de navigation
  const navLinks = [
    { path: "/", text: "Accueil" },
    { path: "/about", text: "A propos" },
  ];

  // Rendu de la bannière
  return (
    <div className="banner">
      <Logo />

      {/* Navigation avec les liens */}
      <nav>
        <ul className="nav">
          {/* Parcourt les liens et crée des liens de navigation */}
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={location.pathname === link.path ? "nav_active" : ""}
            >
              {/* Affiche le texte du lien */}
              <li>{link.text}</li>
            </NavLink>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Banner;
