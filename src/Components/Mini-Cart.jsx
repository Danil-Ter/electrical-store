import React from "react";
import "../styles/mini-cart.css";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const MapMini = ({ latitude, longitude }) => {
  const containerStyle = {
    width: "350px",
    height: "300px",
  };

  const center = {
    lat: 46.47893396215867,
    lng: 30.71161405487724,
  };

  return (
    <div className="Mini-Cart">
      <LoadScript googleMapsApiKey="AIzaSyA8gA6gKD_LAXvWG1l60mxI4BrZ3xxgvqw">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapMini;
