import React from "react";
import { NavLink } from "react-router-dom";

// Composant fonctionnel pour afficher une carte (card) de logement
const Card = (props) => {
  // Extraire les propriétés de la carte passées en tant que 'props'
  const { id, cover, title } = props.card;

  // Rendu de la carte
  return (
    <article>
      {/* Utilisation de NavLink pour créer un lien vers la fiche de logement */}
      <NavLink
        to={{
          pathname: "../fichelogement",
          search: `?_id=${id}`,
        }}
      >
        <section className="card">
          <img className="card-image" src={cover} alt={title} />
          <div className="card_name">
            <h2>{title}</h2>
          </div>
        </section>
      </NavLink>
    </article>
  );
};

export default Card;
