import React from "react";
import { Link } from "react-router-dom";
import AppartCard from "./AppartCard";
import AppartmentData from "../Data/appart.json";
import "../ComponentsStyles/AppartModule.css";

function AppartModule() {
  return (
    <div className="AppartList">
      {AppartmentData.map((appart) => (
        <Link to={`/appart/${appart.id}`} key={appart.id}>
          <AppartCard key={appart.id} appart={appart} />
        </Link>
      ))}
    </div>
  );
}

export default AppartModule;
