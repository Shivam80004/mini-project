const API_KEY = "AIzaSyCDxMg_OwyqeQ8-_OS0yUZbfBFaxPk1L34";

export const mapOptions = {
    googleMapApiKey : API_KEY,
};

//map id b2c39504765b5f56

import React, { useEffect, useRef } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import data from "../states.json";
import templeMarker from "../assets/temple marker.png";

const libraries = ["places", "geometry", "marker"];

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCDxMg_OwyqeQ8-_OS0yUZbfBFaxPk1L34",
    libraries,
  });

  const containerStyle = {
    width: "100%",
    height: "60vw",
  };

  const center = {
    lat: 23.2599,
    lng: 77.4126,
  };

  const mapRef = useRef(null);

  useEffect(() => {
    const addMarkers = async () => {
      // Logging to check isLoaded and window.google
      console.log("isLoaded:", isLoaded);
      console.log("window.google:", window.google);

      if (isLoaded && window.google) {
        try {
          const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
        
              const iconContainer = document.createElement("div");
              iconContainer.style.display = "flex";
              iconContainer.style.justifyContent = "center";
              iconContainer.style.alignItems = "center";
              iconContainer.style.width = "32px";
              iconContainer.style.height = "32px";
          
              // Create the image and set properties
              const iconElement = document.createElement("img");
              iconElement.src = templeMarker;
              iconElement.style.width = "100%";  // Adjust to container size
              iconElement.style.height = "100%";
          
              // Append the image to the div container
              iconContainer.appendChild(iconElement);
          
              // Create and add the AdvancedMarkerElement
              new AdvancedMarkerElement({
                position: center,
                map: mapRef.current,
                content: iconContainer,
              });
        } catch (error) {
          console.error("Error adding markers:", error);
        }
      } else {
        console.log("Google Maps API is not yet loaded.");
      }
    };

    addMarkers();
  }, [isLoaded]);

  return (
    isLoaded && (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
        onLoad={(map) => (mapRef.current = map)}
      >
        {/* Additional components if needed */}
      </GoogleMap>
    )
  );
}

export default Map;


const iconElement = document.createElement("img");
iconElement.src = templeMarker;
iconElement.style.width = "32px";
iconElement.style.height = "32px";

Object.keys(data).forEach((state) => {
  data[state].forEach((location) => {

    const iconElement = document.createElement("img");
iconElement.src = templeMarker;
iconElement.style.width = "32px";
iconElement.style.height = "32px";

    const marker = new AdvancedMarkerElement({
      map: newMap,
      content: iconElement,
      position: location.position,
    });

  });
});