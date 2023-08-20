import React, { useEffect, useState } from "react";
import Card from "./Card";

const CardsLogements = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("logements.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const renderLogementCards = () => {
    return data.map((logement) => <Card key={logement.id} card={logement} />);
  };

  return <div className="card-container">{renderLogementCards()}</div>;
};

export default CardsLogements;
