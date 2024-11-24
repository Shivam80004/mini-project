import React from "react";
import Map from "./Map";

function Features(){
    return(
        <>
            <div
  className="h-screen w-full flex items-center justify-center bg-sky-900"
  style = {{
    backgroundImage: "radial-gradient(#ffffff 0.9px, #0c4a6e 0.9px)",
    backgroundSize: "18px 18px",
  }}
>
  <div className="w-4/5 h-4/5 border-[10px] overflow-hidden rounded-2xl shadow-3xl border-double border-sky-600">
    <Map />
  </div>
</div>

        </>
    )
}

export default Features;