import React from "react";
import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import data from '../states.json'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function PerticularTemple(){

   useGSAP(()=>{
    gsap.from('#hd',
      {
        opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "power3.out",
      }
    )
   })

    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
  }, [location]);

    const { stateName } = useParams();
    const templeName = location.state;

    // console.log(stateName)
    // console.log(templeName)

    const temples = data[stateName];

    // console.log(temples)

    const templeDetails = temples.find((t) => t.name === templeName);

    const circles = Array.from({ length: 14 });    // function formatVisitingGuide(data) {
    //     return data
    //       .replace(/\*\*/g, "") // Remove "**"
    //       .replace(/\n\n/g, "\n") // Remove extra line breaks
    //       .split("\n") // Split into lines
    //       .map((line, index) => <p key={index}>{line}</p>); // Wrap each line in <p> tags
    //   }


    function formatVisitingGuide(data) {
        return data.split("\n").map((line, index) => {
          // Replace **text** with <strong>text</strong> to make it bold
          const formattedLine = line.replace(/\*\*(.*?)\*\*/g, (match, p1) => `<strong>${p1}</strong>`);
          
          // Return the line as a <p> element, using dangerouslySetInnerHTML for bold and line breaks
          return <p className="p-1 text-xl" key={index} dangerouslySetInnerHTML={{ __html: formattedLine }}></p>;
        });
      }

    return(
      <div className="relative h-full bg-[#091a22]">
      {/* Style tag for keyframes */}
      <style>
        {`
          @keyframes fall {
            0% { top: 0; opacity: 1; }
            20% { top: 20%; opacity: 0.8; }
            40% { top: 40%; opacity: 0.6; }
            60% { top: 60%; opacity: 0.4; }
            80% { top: 80%; opacity: 0.2; }
            100% { top: 100%; opacity: 0; }
          }
          @keyframes scale {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(2.5); }
          }
        `}
      </style>

      {/* Animated Circles */}
      <div className="absolute inset-0 pointer-events-none">
        {circles.map((_, index) => (
          <div
            key={index}
            className="absolute w-[10px] h-[10px] rounded-md border-[5px] border-[#2f657b] bg-[#1e5368] opacity-0 shadow-[0_0_100px_#01b4f9,0_0_10px_#01b4f9,0_0_20px_#01b4f9]"
          ></div>
        ))}
      </div>

      {/* Text Area */}
            <h1 className="w-full text-2xl sm:text-6xl font-rowdies text-white bg-gradient-to-b from-sky-400 to-sky-950 fixed top-0 shadow-black shadow-xl text-center rounded-2xl p-5 z-10">{templeDetails.name}</h1>
            <div id="hd" className="sm:mx-20 p-6 sm:p-10 rounded shadow-black shadow-lg bg-sky-950 text-white pt-32 sm:pt-36">{formatVisitingGuide(templeDetails.visiting_guide)}</div>
    </div>

        
    )
}

export default PerticularTemple;