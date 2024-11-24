import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "tailwindcss/tailwind.css";
import background from '../assets/background.webp'
import gatee from '../assets/gate.webp'

gsap.registerPlugin(ScrollTrigger);

const GateZoomEffect = () => {
  const gateRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    const gate = gateRef.current;

    // Scroll-based animation to zoom the gate image
    gsap.fromTo(
      gate,
      { scale: 1 },
      {
        scale: 2.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: gate,
          start: "top top",
          end: "bottom+=300 top",
          scrub: true,
          pin: backgroundRef.current, // Keeps background fixed during zoom
        },
      }
    );
  }, []);

  return (
    <div className="relative h-screen">
      {/* Background image */}
      <div
        ref={backgroundRef}
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://dreamlandadventuretourism.com/wp-content/uploads/2023/12/img-world-ticket-from-dream.webp)`,
        }}
      ></div>

      {/* Gate image with zoom effect */}
      <div className="flex items-center justify-center h-screen">
        <img
          ref={gateRef}
          src={gatee}
          alt="Gate"
          className="w-full h-auto max-w-2xl mx-auto"
        />
      </div>
    </div>
  );
};

export default GateZoomEffect;
