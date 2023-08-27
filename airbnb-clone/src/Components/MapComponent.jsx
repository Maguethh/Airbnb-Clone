import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.js";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function MapComponent({ onLocationSelect }) {
  const [position, setPosition] = useState([51.505, -0.09]);

  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    setPosition([lat, lng]);
    onLocationSelect({ lat, lng });
  };

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "300px", width: "100%" }}
      onClick={handleMapClick}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>Selected Location</Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapComponent;
