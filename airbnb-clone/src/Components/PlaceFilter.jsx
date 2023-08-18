import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "../ComponentsStyles/PlaceFilter.css";  // Import du fichier de style


function PlaceFilter() {
    return(
        <div className="Filters">

        <div className="FilterSearch">
        <label className="FilterSearchLabel"><FontAwesomeIcon icon="fa-solid fa-house" className="FilterSearchLogo"/><span className="FilterSearchText">Votre recherche</span></label>
        </div>

        <div className="FilterBar">

            <label className="FilterLabel"><FontAwesomeIcon icon="fa-solid fa-mountain" className="FilterBarLogo"/><span className="FilterBarText">À la montagne</span></label>

            <label className="FilterLabel"><FontAwesomeIcon icon="fa-solid fa-umbrella-beach" className="FilterBarLogo"/><span className="FilterBarText">À la plage</span></label>

            <label className="FilterLabel"><FontAwesomeIcon icon="fa-solid fa-mountain" className="FilterBarLogo"/><span className="FilterBarText">À la montagne</span></label>

            <label className="FilterLabel"><FontAwesomeIcon icon="fa-solid fa-umbrella-beach" className="FilterBarLogo"/><span className="FilterBarText">À la plage</span></label>

            <label className="FilterLabel"><FontAwesomeIcon icon="fa-solid fa-mountain" className="FilterBarLogo"/><span className="FilterBarText">À la montagne</span></label>

            <label className="FilterLabel"><FontAwesomeIcon icon="fa-solid fa-umbrella-beach" className="FilterBarLogo"/><span className="FilterBarText">À la plage</span></label>

            <label className="FilterLabel"><FontAwesomeIcon icon="fa-solid fa-mountain" className="FilterBarLogo"/><span className="FilterBarText">À la montagne</span></label>

            <label className="FilterLabel"><FontAwesomeIcon icon="fa-solid fa-umbrella-beach" className="FilterBarLogo"/><span className="FilterBarText">À la plage</span></label>

            <label className="FilterLabel"><FontAwesomeIcon icon="fa-solid fa-mountain" className="FilterBarLogo"/><span className="FilterBarText">À la montagne</span></label>

            <label className="FilterLabel"><FontAwesomeIcon icon="fa-solid fa-umbrella-beach" className="FilterBarLogo"/><span className="FilterBarText">À la plage</span></label>

        </div>

        <div className="FilterSetting">
        <FontAwesomeIcon icon="fa-solid fa-sliders" className="FilterSettingLogo"/>
        <span className="FilterSettingText">Filtres</span>
        </div>

        </div>
        
    )
}

export default PlaceFilter;