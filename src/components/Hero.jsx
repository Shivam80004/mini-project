import React, {useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {useGSAP} from "@gsap/react"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gate from '../assets/gate.webp';
import background from '../assets/background.webp';

gsap.registerPlugin(ScrollTrigger);

function Hero() {

  const gateRef = useRef(null);
  const backgroundRef = useRef(null);
  

  useGSAP(()=>{
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    tl.from("#heading-3", { y: 50, opacity: 0 })
    .from("#heading-1", { y: 50, opacity: 0 }, "-=0.4")
    .from("#subheading", { y: 50, opacity: 0 }, "-=0.4")
    

    gsap.fromTo(
      gateRef.current,
      {
       // marker:true
       scale:1
       },
      {
        scale: 3.5, 
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: gateRef.current,
          start: "top top", 
          end: "+=500",
          scrub: true, 
         // markers:true,
        },
      }
    );

  });

    return(
        <>
        <section>
        <header className="fixed top-0 z-10 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap w-full text-sm">
      <nav className="mt-4 relative max-w-2xl backdrop-blur-sm bg-white/30 border border-black/30 rounded-[2rem] mx-2 py-2.5 md:flex md:items-center md:justify-between md:py-0 md:px-4 md:mx-auto dark:bg-neutral-900 dark:border-neutral-700">
        
    
            {/* Navigation Links */}
            <div className={` md:flex md:items-center`}>
              <ul className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0">
                <li>
                  <a href="/" className="block text-black font-semibold py-2 px-4 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="block text-black font-semibold py-2 px-4 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="/" className="block text-black font-semibold py-2 px-4 hover:text-white">
                    Guide
                  </a>
                </li>
                <li>
                  <a href="/" className="block text-black font-semibold py-2 px-4 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <div className="w-full h-screen relative overflow-hidden" id='back'>
        <img
        ref={gateRef}
        src={gate}
        className="w-full h-full absolute top-0 z-10"
        alt="Gate"
      />
    
    <section
  id="explore-section"
  className="bg-white text-white min-h-screen pb-28 flex flex-col items-center justify-end text-center p-6"
>
  <h3
    id="heading-3"
    className="text-gray-900 font-rowdies font-light text-4xl md:text-6xl mb-4"
  >
    Explore India's Famous
  </h3>
  <h1
    id="heading-1"
    className="text-gray-900 font-rowdies font-light text-4xl md:text-8xl mb-4"
  >
    Hindu Temples
  </h1>
  <p
    id="subheading"
    className="subheading text-white bg-sky-800 rounded-3xl p-2 pr-6 pl-6 mt-5 font-medium md:text-xl mb-6"
  >
    Uncover the Stories, Architecture and Significance of Hindu temples of
    India
  </p>
</section>

        </div>

        </section>
        </>
    )
}

export default Hero