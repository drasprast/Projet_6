import React, { useState } from "react";
import rightChevron from "../assets/img/icone-slide-d.png";
import leftChevron from "../assets/img/icone-slide-g.png";

// Composant Slide pour afficher une diapositive
const Slide = React.memo(({ isActive, image }) => (
  <div className={isActive ? "slide active" : "slide"}>
    {isActive && (
      <img src={image} alt="Logement Detail" className="image-slide" />
    )}
  </div>
));

// Composant Slideshow pour afficher un diaporama d'images
const Slideshow = ({ pictures }) => {
  // État local pour suivre l'index de la diapositive actuelle
  const [currentSlide, setCurrentSlide] = useState(0);
  // Nombre total de diapositives dans le diaporama
  const totalSlides = pictures.length;

  // Fonction pour passer à la diapositive suivante
  const nextSlide = () => {
    // L'opération modulo garantit que l'index reste dans la plage valide
    setCurrentSlide((currentSlide + 1) % totalSlides);
  };

  // Fonction pour passer à la diapositive précédente
  const prevSlide = () => {
    // L'opération modulo avec totalSlides garantit le défilement circulaire
    setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
  };

  // Si aucune image n'est fournie, ne rend rien
  if (!Array.isArray(pictures) || pictures.length <= 0) {
    return null;
  }

  // Rendu du composant Slideshow
  return (
    <section className="carousel-container">
      {/* Affiche chaque diapositive en fonction de l'index */}
      {pictures.map((imageSlide, index) => (
        <Slide
          key={index}
          isActive={index === currentSlide}
          image={imageSlide}
        />
      ))}

      {/* Flèches pour naviguer entre les diapositives */}
      <div className="chevrons-slide">
        <div className="right-arrow" onClick={nextSlide}>
          <img src={rightChevron} alt="Next arrow" />
        </div>
        <div className="left-arrow" onClick={prevSlide}>
          <img src={leftChevron} alt="Previous arrow" />
        </div>
      </div>

      {/* Affiche le numéro de la diapositive actuelle */}
      <div className="counter">{`${currentSlide + 1} / ${totalSlides}`}</div>
    </section>
  );
};

export default Slideshow;
