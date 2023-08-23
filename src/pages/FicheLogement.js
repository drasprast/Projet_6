import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Error404 from "./Error404";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
import Slideshow from "../components/Slideshow";
import Banner from "../components/Banner";
import starFull from "../assets/img/star_full.png";
import starEmpty from "../assets/img/star_empty.png";

// Composant FicheLogement pour afficher les détails d'un logement
const FicheLogement = () => {
  // États locaux pour stocker les données des logements et du logement sélectionné
  const [data, setData] = useState([]);
  const [dataLogement, setDataLogement] = useState(null);

  // Effet secondaire pour charger les données des logements au montage
  useEffect(() => {
    let isMounted = true;

    fetch("logements.json")
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          setData(data);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Récupère les paramètres de recherche de l'URL
  const [searchParams] = useSearchParams();
  const [idLogement] = useState(searchParams.get("_id"));

  // Effet secondaire pour mettre à jour le logement sélectionné en fonction de l'ID
  useEffect(() => {
    const foundLogement = data.find((logement) => logement.id === idLogement);
    setDataLogement(foundLogement);
  }, [data, idLogement]);

  // Si aucun logement n'est trouvé, affiche une page d'erreur
  if (!dataLogement) {
    return <Error404 />;
  }

  // Tableau pour gérer les étoiles de notation
  const tableauStars = [1, 2, 3, 4, 5];

  // Rendu du composant FicheLogement
  return (
    <div>
      <main className="main">
        {/* Affiche la bannière */}
        <Banner />
        <article className="page_logement">
          {/* Affiche le diaporama si plusieurs images sont présentes */}
          {dataLogement.pictures.length > 1 ? (
            <Slideshow pictures={dataLogement.pictures} />
          ) : (
            /* Sinon, affiche une image unique */
            <img
              src={dataLogement.pictures[0]}
              alt={dataLogement.title}
              className="image_solo"
            />
          )}
          <br />
          <section className="fich_log_contain">
            <div className="info_log_contain">
              <div className="title_location">
                <h1>{dataLogement.title}</h1>
                <p>{dataLogement.location}</p>
              </div>
              <div>
                {/* Affiche les tags associés au logement */}
                <ul className="tags">
                  {dataLogement.tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="host_star_contain">
              <div className="host_picture">
                <p>{dataLogement.host.name}</p>
                {/* Affiche la photo de l'hôte */}
                <img
                  src={dataLogement.host.picture}
                  alt={dataLogement.host.name}
                  className="photo_host"
                />
              </div>
              <div className="stars">
                {/* Affiche les étoiles de notation en fonction de la note */}
                {tableauStars.map((star, index) => (
                  <img
                    key={index}
                    src={star <= dataLogement.rating ? starFull : starEmpty}
                    alt={
                      star <= dataLogement.rating ? "star full" : "star empty"
                    }
                    className={
                      star <= dataLogement.rating ? "star-full" : "star-empty"
                    }
                  />
                ))}
              </div>
            </div>
          </section>
          <section className="col_fiche_contain">
            {/* Section pliable pour afficher la description */}
            <Collapse label="Description">
              <p>{dataLogement.description}</p>
            </Collapse>
            {/* Section pliable pour afficher les équipements */}
            <Collapse label="Equipements">
              <ul>
                {dataLogement.equipments.map((equipement, index) => (
                  <li key={index}>{equipement}</li>
                ))}
              </ul>
            </Collapse>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default FicheLogement;
