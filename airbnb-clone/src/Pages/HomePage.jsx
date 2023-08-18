import React from 'react';
import { Link } from 'react-router-dom';

import Header from "../Components/Header"
import PlaceFilter from "../Components/PlaceFilter"

const Home = () => {
  return (
    <div>
       <Header />
       <PlaceFilter />
      <h1>Bienvenue sur notre Plateforme</h1>
      <p>Explorez notre sélection d'appartements incroyables.</p>
      <Link to="/appart">Voir les Appartements</Link>
    </div>
  );
}

export default Home;