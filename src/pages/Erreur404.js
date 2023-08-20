import React from "react";
import Banner from "../components/Banner";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

const Erreur404 = () => {
  return (
    <div>
      <main className="main">
        <Banner />
        <section className="msg-erreur">
          <h1>404</h1>
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <NavLink className="lien-page-erreur" to="/">
            Retourner sur la page d'accueil
          </NavLink>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Erreur404;
