import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/HomePage"; // Page d'accueil
import Appart from "./Pages/AppartPage"; // Page de logement avec l'id
import NotFound from "./Pages/NotFound.jsx"; // Page non trouvée
import Login from "./Pages/LoginPage"; // Page de login

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faGlobe,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faGlobe, faMagnifyingGlass); // Ajoutez les icônes à la bibliothèque

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appart" element={<Appart />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
