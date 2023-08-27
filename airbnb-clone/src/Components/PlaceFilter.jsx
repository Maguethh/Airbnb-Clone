import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import FilterData from "../Data/filter.json";
import "../ComponentsStyles/PlaceFilter.css";

function PlaceFilter() {
  const numVisibleFilters = 13;
  const totalFilters = FilterData.length;
  const [startIndex, setStartIndex] = useState(0);
  const [isLeftArrowClicked, setIsLeftArrowClicked] = useState(false);
  const [isRightArrowClicked, setIsRightArrowClicked] = useState(false);

  function handleRightArrowClick() {
    if (startIndex + numVisibleFilters < totalFilters) {
      setIsRightArrowClicked(true);
      setTimeout(() => {
        setStartIndex((prevIndex) => prevIndex + numVisibleFilters);
        setIsRightArrowClicked(false);
      }, 300);
    }
  }

  function handleLeftArrowClick() {
    if (startIndex - numVisibleFilters >= 0) {
      setIsLeftArrowClicked(true);
      setTimeout(() => {
        setStartIndex((prevIndex) => prevIndex - numVisibleFilters);
        setIsLeftArrowClicked(false);
      }, 300);
    }
  }

  const visibleFilters = FilterData.slice(
    startIndex,
    startIndex + numVisibleFilters
  );

  return (
    <div className="Filters">
      <div className="FilterBar scrollable">
        {visibleFilters.map((filter, index) => (
          <label
            className={`FilterLabel ${isLeftArrowClicked || isRightArrowClicked ? 'hidden' : ''}`}
            key={index}
          >
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
