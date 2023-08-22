import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import FicheLogement from "./pages/FicheLogement";
import Home from "./pages/Home";
import "./styles/App.scss";
import "./styles/About.scss";
import "./styles/Banner.scss";
import "./styles/Card.scss";
import "./styles/CardsLogements.scss";
import "./styles/Collapse.scss";
import "./styles/FicheLogement.scss";
import "./styles/Error404.scss";
import "./styles/Logo.scss";
import "./styles/Footer.scss";
import "./styles/Home.scss";
import "./styles/Slideshow.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fichelogement" element={<FicheLogement />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
