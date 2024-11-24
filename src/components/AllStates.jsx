import React from 'react'
import data from '../states.json'
import { useNavigate } from 'react-router-dom';

function AllStates(){

    const navigate = useNavigate();

    // Handle click to navigate to temple list for a state
    const handleStateClick = (state) => {
      navigate(`/temples/${state}`);
    };

    return(
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 bg-blue-800">
          {Object.keys(data).map((state, index) => (
            <div
              key={index}
              className={`border shadow-lg p-4 flex items-center justify-center rounded-lg h-32 w-full bg-white cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg shine-button
                }`}

              onClick={() => handleStateClick(state)}
            >
              <h2 className="text-lg font-bold">{state}</h2>
            </div>
          ))}
        </div>

      <style>
        {`
          @layer utilities {
            @keyframes shine {
              0% {
                left: -80px;
              }
              60% {
                left: 80%;
              }
              to {
                left: 80%;
              }
            }

            .shine-button::before {
              content: '';
              position: absolute;
              width: 100px;
              height: 100%;
              background-image: linear-gradient(
                120deg,
                rgba(255, 255, 255, 0) 30%,
                rgba(255, 255, 255, 0.8),
                rgba(255, 255, 255, 0) 70%
              );
              top: 0;
              left: -100px;
              opacity: 0.6;
              transition: all 0.3s ease-in-out;
            }

            .shine-button:hover::before {
              animation: shine 1.5s ease-out infinite;
            }
          }
        `}
      </style>
    </>
    )
}

export default AllStates;