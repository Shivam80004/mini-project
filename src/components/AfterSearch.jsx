import React, { useEffect, useRef, useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import { useJsApiLoader,  GoogleMap,
  DirectionsService,
  DirectionsRenderer, } from "@react-google-maps/api";
import templeMarker from "../assets/temple marker.png"
import data from "../states.json";
import mapBack from '../assets/background_m.webp'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const libraries = ["maps", "marker"];

const Map = () => {

  useGSAP( ()=>{
  gsap.from("#hd", {
    opacity: 0,
    y: -50,
    duration: 1.5,
    ease: "power3.out",
  })
});

  const location = useLocation();
  const st1 = location.state[0];
  const st2 = location.state[1];


  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [map, setMap] = useState(null);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDf1bvhuq1Sqj9K5M4uVEEdPAB27o30sbs",
    //googleMapsApiKey: "AIzaSyCA0y7kh6V8poL-faDyVf3TpnLDNf9XtQY",
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
        const directionsService = new google.maps.DirectionsService();
        const directionsRenderer = new google.maps.DirectionsRenderer();
        const infoWindow = new google.maps.InfoWindow();
      

       // const center = { lat: 37.43238031167444, lng: -122.16795397128632 };

       const center = {
        lat: 23.2599,
        lng: 77.4126,
      };
      
        const newMap = new Map(mapRef.current, {
          zoom: 4.5 ,
          center,
          mapId: "4504f8b37365c3d0", // Make sure this is valid
        });

        directionsRenderer.setMap(newMap);

        calculateAndDisplayRoute(directionsService, directionsRenderer);
        

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


  function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    directionsService
      .route({
        origin: `${st1}`,
        destination: `${st2}`,
        travelMode: google.maps.TravelMode.DRIVING,
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
      })
      .catch((e) => window.alert("Please Select Origin And Destination"));
  }

  const circles = Array.from({ length: 14 });


  return (
    <>
      {/* Text Area */}
    <div className="flex flex-col items-center justify-center h-[100vh] w-full relative">
       <div className="h-screen w-[100vw] bg-blue-600 absolute z-0">
           <img src={mapBack} alt="" className="h-full w-full object-cover" />
       </div>
       <h1 id="hd" className="w-full text-2xl sm:text-6xl font-rowdies text-white bg-gradient-to-b from-sky-400 to-sky-950 z-20 shadow-black shadow-2xl text-center rounded-lg p-5 ">{st1} to {st2}</h1>
        <div ref={mapRef} className="w-5/6 h-[85vh] shadow-2xl border-solid border-4 border-gray-300 rounded-2xl z-10"></div>
    </div>
     
    
      </>
  );
};

export default Map;
