import React from "react";
import Map from "./Map";

function MapComponent() {
    return (
        <section className="h-full w-full flex items-center justify-center bg-blue-800">
            <div className="h-full w-1/2 shadow-2xl m-6">
                <Map />
            </div>
        </section>
    )
}

export default MapComponent