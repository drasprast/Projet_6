import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Error404 from "./Error404";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
import Slideshow from "../components/Slideshow";
import Banner from "../components/Banner";
import starFull from "../assets/img/star_full.png";
import starEmpty from "../assets/img/star_empty.png";

const FicheLogement = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataLogement, setDataLogement] = useState(null);

  useEffect(() => {
    let isMounted = true;

    fetch("logements.json")
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          setData(data);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const [searchParams] = useSearchParams();
  const [idLogement] = useState(searchParams.get("_id"));

  useEffect(() => {
    const foundLogement = data.find((logement) => logement.id === idLogement);
    setDataLogement(foundLogement);
  }, [data, idLogement]);

  if (loading) {
    return <div>Chargement en cours...</div>;
  }

  if (!dataLogement) {
    return <Error404 />;
  }

  const tableauStars = [1, 2, 3, 4, 5];

  return (
    <div>
      <main className="main">
        <Banner />
        <article className="page-logement">
          {dataLogement.pictures.length > 1 ? (
            <Slideshow pictures={dataLogement.pictures} />
          ) : (
            <img
              src={dataLogement.pictures[0]}
              alt={dataLogement.title}
              className="image-solo"
            />
          )}
          <br />
          <section className="fiche-logement-container">
            <div className="infos-logement-container">
              <div className="title-location">
                <h1>{dataLogement.title}</h1>
                <p>{dataLogement.location}</p>
              </div>
              <div>
                <ul className="tags">
                  {dataLogement.tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="host-star-container">
              <div className="host-picture">
                <p>{dataLogement.host.name}</p>
                <img
                  src={dataLogement.host.picture}
                  alt={dataLogement.host.name}
                  className="photo-host"
                />
              </div>
              <div className="stars">
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
          <section className="collapse-fiche-container">
            <Collapse label="Description">
              <p>{dataLogement.description}</p>
            </Collapse>
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
