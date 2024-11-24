import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 22.9734, // Adjust as needed
  lng: 78.6569,
};

const MapWithDirections = () => {
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [statesBetween, setStatesBetween] = useState([]);

  const calculateRoute = () => {
    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: "Gujarat, India", // Start state
        destination: "Kerala, India", // End state
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirectionsResponse(result);

          // Extract intermediate states from the legs of the route
          const intermediateStates = result.routes[0].legs[0].via_waypoints.map(
            (waypoint) => ({
              lat: waypoint.lat(),
              lng: waypoint.lng(),
            })
          );

          // Here you could convert lat/lng to state names using reverse geocoding
          setStatesBetween(intermediateStates);
        } else {
          console.error("Error fetching directions:", status);
        }
      }
    );
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={6}>
        {/* Directions Service to calculate route */}
        <DirectionsService
          options={{
            origin: "Gujarat, India",
            destination: "Kerala, India",
            travelMode: "DRIVING",
          }}
          callback={(response) => {
            if (response.status === "OK") {
              setDirectionsResponse(response);
            }
          }}
        />

        {/* Render the route */}
        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}
      </GoogleMap>

    </LoadScript>
  );
};

export default MapWithDirections;
