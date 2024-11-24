import React, { useEffect, useRef, useState } from "react";
import { useJsApiLoader,  GoogleMap,
  DirectionsService,
  DirectionsRenderer, } from "@react-google-maps/api";
import { useLocation,useNavigate } from "react-router-dom";
import templeMarker from "../assets/temple marker.png"
import data from "../states.json";

const libraries = ["maps", "marker"];

const Map = () => {
  const [map, setMap] = useState(null);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDf1bvhuq1Sqj9K5M4uVEEdPAB27o30sbs",
    libraries,
  });


  const mapRef = useRef(null);
  
  const navigate = useNavigate();

  function perticularTemple(state,name){
    navigate(`/temple/${state}`, { state : name } );
  };


  useEffect(() => {
    if (isLoaded && !map) {
      const initializeMap = async () => {
        const { Map } = await google.maps.importLibrary("maps");
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
        const infoWindow = new google.maps.InfoWindow();

       // const center = { lat: 37.43238031167444, lng: -122.16795397128632 };

       const center = {
        lat: 23.2599,
        lng: 77.4126,
      };
      
        const newMap = new Map(mapRef.current, {
          zoom: 5 ,
          center,
          mapId: "4504f8b37365c3d0", // Make sure this is valid
        });

        Object.keys(data).forEach((state) => {
          data[state].forEach((pos) => {

            
        
        const iconElement = document.createElement("img");
        iconElement.src = templeMarker;
        iconElement.style.width = "32px";
        iconElement.style.height = "32px";
        
            const marker = new AdvancedMarkerElement({
              map: newMap,
              content: iconElement,
              position: pos.location,
            });
            
            marker.addListener("click", () => {
              // Create a container div for InfoWindow content
              const contentDiv = document.createElement("div");
              contentDiv.style.fontSize = "14px";
              contentDiv.style.fontWeight = "bold";
              contentDiv.textContent = pos.name;
            
              // Add an onClick listener to the div
              contentDiv.addEventListener("click", () => {
                const vall = pos.name;
                perticularTemple(state,vall);
              });
            
              // Set the created div as the content for the InfoWindow
              infoWindow.setContent(contentDiv);
              infoWindow.open(newMap, marker);
            });
            

          });
        });

        setMap(newMap);
      };

      initializeMap();
    }
  }, [isLoaded, map]);

  return (
    <>
    <div ref={mapRef} className="w-full h-screen"></div>
    <div id="street-view"></div>
      </>
  );
};

export default Map;
