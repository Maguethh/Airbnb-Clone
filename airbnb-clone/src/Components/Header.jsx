import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LogoSVG from "../Images/Airbnb_Logo.svg"
import NoUserLogo from "../Images/NoUserLogo.svg"

import '../ComponentsStyles/Header.css'; // Import du fichier de style



function Header() {
  return (
    <header>
      <div className="NavBar">

      <img src={LogoSVG} className="AirbnbLogo" alt="Mon Logo" />

        <ul className="SearchBar">
        <li className="DestinationButton">Destination</li>
        <li className="DateButton">Jour / Mois / Année</li>
        <li className="TravellersButton">Nombre de personne</li>
        <div className="MagnifyingGlass"><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></div>
        </ul>
    <div className="NavRight">

        <div className="Upload">
        <button className="UploadButton">
            Mettre mon logement sur Airbnb
        </button>
        </div>
        <div className="Region">
        <button className="RegionButton"><FontAwesomeIcon icon="fa-solid fa-globe" /></button>
        </div>
        <div className="User">
        <button className="UserBars"><FontAwesomeIcon icon="fa-solid fa-bars" /></button>
        <img src={NoUserLogo} className="UserPicture" alt="Photo d'utilisateur non renseignée" />
        </div>

    </div>

      </div>
    </header>
  );
}

export default Header;