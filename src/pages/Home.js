import React from "react";
import Banner from "../components/Banner";
import CardsLogements from "../components/CardsLogements";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <main className="main">
        <Banner />
        <h1 className="title_h1">
          Chez vous, <span className="span_h1">partout et ailleurs</span>
        </h1>
        <CardsLogements />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
