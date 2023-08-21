import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import FilterData from "../Data/filter.json";
import "../ComponentsStyles/PlaceFilter.css";

function PlaceFilter() {
  const numVisibleFilters = 13; // Nombre de filtres visibles à la fois
  const totalFilters = FilterData.length;
  const [startIndex, setStartIndex] = useState(0);

  function handleRightArrowClick() {
    if (startIndex + numVisibleFilters < totalFilters) {
      setStartIndex((prevIndex) => prevIndex + numVisibleFilters);
    }
  };

  function handleLeftArrowClick() {
    if (startIndex - numVisibleFilters >= 0) {
      setStartIndex((prevIndex) => prevIndex - numVisibleFilters);
    }
  };

  const visibleFilters = FilterData.slice(
    startIndex,
    startIndex + numVisibleFilters
  );

  return (
    <div className="Filters">
      <div className="FilterSearch">
        <label className="FilterSearchLabel">
          <FontAwesomeIcon
            icon={["fas", "fa-house"]}
            className="FilterSearchLogo"
          />
          <span className="FilterSearchText">Votre recherche</span>
        </label>
      </div>

      <div className="FilterBar scrollable ">
        {visibleFilters.map((filter, index) => (
          <label className="FilterLabel" key={index}>
            <FontAwesomeIcon
              icon={["fas", filter.icon]}
              className="FilterBarLogo"
            />
            <span className="FilterBarText">{filter.text}</span>
          </label>
        ))}
      </div>
      <div className="FilterArrow">
      {startIndex > 0 && (
          <button className="ArrowButton" onClick={handleLeftArrowClick}>
            <FontAwesomeIcon
              icon={["fas", "fa-chevron-left"]}
              className="ArrowIcon"
            />
          </button>
        )}
        {startIndex + numVisibleFilters < totalFilters && (
          <button className="ArrowButton" onClick={handleRightArrowClick}>
            <FontAwesomeIcon
              icon={["fas", "fa-chevron-right"]}
              className="ArrowIcon"
            />
          </button>
        )}
      </div>

      <div className="FilterSetting">
        <FontAwesomeIcon
          icon={["fas", "fa-sliders"]}
          className="FilterSettingLogo"
        />
        <span className="FilterSettingText">Filtres</span>
      </div>
    </div>
  );
}

export default PlaceFilter;
