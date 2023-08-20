import React, { useState } from "react";
import rightChevron from "../assets/img/icone-slide-d.png";
import leftChevron from "../assets/img/icone-slide-g.png";

const Slide = React.memo(({ isActive, image }) => (
  <div className={isActive ? "slide active" : "slide"}>
    {isActive && (
      <img src={image} alt="Logement Detail" className="image-slide" />
    )}
  </div>
));

const Slideshow = ({ pictures }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = pictures.length;

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
  };

  if (!Array.isArray(pictures) || pictures.length <= 0) {
    return null;
  }

  return (
    <section className="carousel-container">
      {pictures.map((imageSlide, index) => (
        <Slide
          key={index}
          isActive={index === currentSlide}
          image={imageSlide}
        />
      ))}
      <div className="chevrons-slide">
        <div className="right-arrow" onClick={nextSlide}>
          <img src={rightChevron} alt="Next arrow" />
        </div>
        <div className="left-arrow" onClick={prevSlide}>
          <img src={leftChevron} alt="Previous arrow" />
        </div>
      </div>
      <div className="counter">{`${currentSlide + 1} / ${totalSlides}`}</div>
    </section>
  );
};

export default Slideshow;
