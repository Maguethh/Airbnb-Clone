import React from 'react';
import { useParams } from 'react-router-dom';

import AppartmentData from "../Data/appart.json"

import Header from "../Components/Header"

function Appart() {
  const { id } = useParams(); // Utilisation de la déstructuration pour extraire la valeur de l'ID
  const selectedAppart = AppartmentData.find(appart => appart.id === id)

  if (!selectedAppart) {
    return <div>Appartement non trouvé</div>;
  }

  return (
    <div>
      <Header/> 
      <h2>{selectedAppart.title}</h2>
      <img src={selectedAppart.image} alt={selectedAppart.description} />
      <p>{selectedAppart.description}</p>

    </div>
  );
}

export default Appart;