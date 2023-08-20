import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  /* Accepts the parameter (props) (provided in CardsLogements) to retrieve each property of a logement */
  const { id, cover, title } = props.card;

  return (
    <article>
      <NavLink
        to={{
          /* Navigation link to the FicheLogement page */
          pathname: "../fichelogement",
          /* Appending the clicked logement's ID to the URL */
          search: `?_id=${id}`,
        }}
      >
        <section className="card">
          <img className="card-image" src={cover} alt={title} />
          <div className="card-name">
            <h2>{title}</h2>
          </div>
        </section>
      </NavLink>
    </article>
  );
};

export default Card;
