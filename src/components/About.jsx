import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {useGSAP} from '@gsap/react'

const About = () => {
  const headerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(()=>{
    const timeline = gsap.timeline();

    // Header animation
    timeline.from(headerRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power3.out',
    });

    // Text content animation
    timeline.from(
      textRef.current,
      {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: 'power3.out',
      },
      "-=0.5"
    );

    // Image animation
    timeline.from(
      imageRef.current,
      {
        opacity: 0,
        x: 50,
        duration: 1,
        ease: 'power3.out',
      },
      "-=0.5"
    );
});

  return (
    <div className="bg-sky-800 text-gray-100 min-h-screen flex items-center justify-center py-12 px-4"
    style = {{
        backgroundImage: "radial-gradient(#ffffff 0.9px, #0c4a6e 0.9px)",
        backgroundSize: "18px 18px",
      }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 backdrop-blur-sm rounded-3xl pl-5">
        {/* Text Section */}
        <div ref={textRef} className="flex flex-col justify-center">
          <h1 ref={headerRef} className="text-4xl font-bold mb-4">
            About Us
          </h1>
          <p className="text-lg leading-relaxed mb-6">
            Welcome to Explore Famous Hindu Temples of India! Our platform is dedicated to
            showcasing the cultural, architectural and spiritual significance of Hindu
            temples across India. Whether you are a traveler, a history enthusiast or a
            devotee, We aim to enrich your journey with detailed information and tools to
            plan meaningful temple visits.
          </p>
          <p className="text-lg leading-relaxed">
            Join us in exploring the timeless beauty and sacredness of these iconic
            landmarks and let us guide you on your spiritual journey.
          </p>
        </div>

        {/* Image Section */}
        <div ref={imageRef} className="flex justify-center">
          <img
            src='https://www.onindianpath.com/wp-content/uploads/2024/05/1000088871-1-scaled.jpg'
            alt="Temple"
            className="rounded-lg shadow-lg h-[70vh] w-2/3 border-4 "
          />
        </div>
      </div>
    </div>
  );
};

export default About;
