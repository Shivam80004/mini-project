import React from 'react';
import { useParams, useLocation} from 'react-router-dom';
import data from "../states.json";
import Map from './Map';


const StateTemple = () => {
  const { stateName } = useParams(); // Get the state name from the route params
  console.log(stateName)
  // const location = useLocation();
  // console.log(location.state[0])
  const temples = data[stateName]; // Retrieve temples for the selected state

  return (
    <div className="p-4 bg-yellow-400">
      <h2 className="text-2xl font-bold mb-4">Temples in {stateName}</h2>
      {temples ? (
        <ul className="list-disc ml-6">
          {temples.map((temple, idx) => (
            <li key={idx} className="text-lg mt-2">
              <strong>{temple.name}</strong>:
            </li>
          ))}
        </ul>
      ) : (
        <p>No temples available for this state.</p>
      )}
    </div>

  );
};

export default StateTemple;
