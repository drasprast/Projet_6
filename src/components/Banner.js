import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";

const Banner = () => {
  const location = useLocation();
  const navLinks = [
    { path: "/", text: "Accueil" },
    { path: "/about", text: "A propos" },
  ];

  return (
    <div className="banner">
      <Logo />
      <nav>
        <ul className="nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={location.pathname === link.path ? "nav_active" : ""}
            >
              <li>{link.text}</li>
            </NavLink>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Banner;
