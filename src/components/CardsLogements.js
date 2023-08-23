import React, { useEffect, useState } from "react";
import Card from "./Card"; // Importe le composant Card pour afficher les cartes de logements

// Composant pour afficher des cartes de logements
const CardsLogements = () => {
  // État local pour stocker les données des logements
  const [data, setData] = useState([]);

  // Effet secondaire pour charger les données des logements au montage
  useEffect(() => {
    // Effectue une requête pour récupérer les données du fichier "logements.json"
    fetch("logements.json")
      .then((response) => response.json())
      .then((data) => setData(data)); // Met à jour l'état avec les données récupérées
  }, []);

  // Fonction pour rendre les cartes de logements
  const renderLogementCards = () => {
    // Parcourt les données et crée une carte pour chaque logement en utilisant le composant Card
    return data.map((logement) => <Card key={logement.id} card={logement} />);
  };

  // Rendu du composant
  return <div className="card_contain">{renderLogementCards()}</div>;
};

export default CardsLogements;
