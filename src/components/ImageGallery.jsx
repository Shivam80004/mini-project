import React, {useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import background from '../assets/background.webp';

gsap.registerPlugin(ScrollTrigger);

function ImageGallery(){

    const images = [
      'https://www.onindianpath.com/wp-content/uploads/2024/05/1000088871-1-scaled.jpg',
      'https://www.onindianpath.com/wp-content/uploads/2024/05/1000088871-1-scaled.jpg',
      'https://cdn.pixabay.com/photo/2024/03/02/08/07/ai-generated-8607805_1280.jpg',
      'https://i.pinimg.com/736x/5b/24/bc/5b24bcd3e66efb41a4bdbd22783493f8.jpg',
      'https://www.onindianpath.com/wp-content/uploads/2024/05/1000088871-1-scaled.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/A_temple_in_Mansa_Devi_temple_complex%2C_Panchkula_near_Chandigarh.jpg/320px-A_temple_in_Mansa_Devi_temple_complex%2C_Panchkula_near_Chandigarh.jpg',
      'https://ihplb.b-cdn.net/wp-content/uploads/2015/02/Ranganathaswamy-Temple-Tamilnadu.jpg',
      'https://www.onindianpath.com/wp-content/uploads/2024/05/1000088871-1-scaled.jpg',
      ];
      

    const divRef = useRef(null);
    const galleryRef = useRef(null);
  
    useEffect(() => {
      let ctx = gsap.context(() => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: divRef.current,
            start: 'top bottom',
            end: '+=1000',
            scrub: 1,
            //markers:true
          },
        });
  
        timeline.to(galleryRef.current, {
          x: '-120vh', // Moves horizontally to create overflow effect
          ease: 'power2.out',
        });
      });
  
      return () => ctx.revert(); // Clean up GSAP context on component unmount
    }, []);

    return(
      <>
        <style>
        {`
          @layer utilities {
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          }
        `}
      </style>
       <div className='h-[70vh] w-full overflow-hidden bg-gradient-to-b from-white to-sky-900'  ref={divRef} >
        <div className='h-[70vh] w-full scrollbar-hide flex items-center justify-items-center' 
          ref={galleryRef}
        >
                {
                images.map((backgrounds, index)=>(
                    <div key={index} className="h-[30vh] w-[180px] sm:h-[60vh] sm:w-[300px] bg-pink-200 sm:border-2 rounded-full border-white flex-shrink-0">
                    <img 
                    src={backgrounds} 
                    className='w-full h-full border-8 rounded-full object-cover' />
                    </div>
                ))
                }
      </div>
      </div>
      </>
    )
}

export default ImageGallery