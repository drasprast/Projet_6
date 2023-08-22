import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

const Erreur404 = () => {
  return (
    <div>
      <main className="main">
        <Banner />
        <section className="msg_error">
          <h1>404</h1>
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <NavLink className="link_error" to="/">
            Retourner sur la page d'accueil
          </NavLink>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Erreur404;
