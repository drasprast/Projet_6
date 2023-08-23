import React, { useRef, useState } from "react";
import fleche from "../assets/img/fleche.png";

// Composant Collapse pour créer une section pliable
const Collapse = (props) => {
  // État local pour suivre l'état ouvert/fermé du contenu pliable
  const [open, setOpen] = useState(false);

  // Fonction pour basculer entre l'état ouvert et fermé
  const toggleCollapse = () => {
    setOpen(!open);
  };

  // Référence à l'élément de contenu pliable
  const contentRef = useRef();

  return (
    <div>
      {/* Bouton pour basculer le contenu pliable */}
      <button
        className={`col_button ${open ? "open" : ""}`}
        onClick={toggleCollapse}
      >
        {/* Affiche le label de la section */}
        {props.label}
        {/* Affiche l'icône de flèche avec une rotation si la section est ouverte */}
        <img
          className="col_icon"
          src={fleche}
          alt="fleche icon"
          style={{ transform: open ? "rotate(-180deg)" : "" }}
        />
      </button>

      {/* Contenu pliable */}
      <div ref={contentRef} className={`col_content ${open ? "open" : ""}`}>
        {/* Affiche le contenu de la section */}
        {props.children}
      </div>
    </div>
  );
};

export default Collapse;
