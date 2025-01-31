// Import useParams, this allows you to get the id from the url so you dont have to pass it in as a property
//useNavigate, to navigate pages

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; 

const MARVEL_API_URL = "https://gateway.marvel.com/v1/public/characters";

const CharacterDetail = () => {
  const { characterId } = useParams(); 
  const [details, setDetails] = useState(null); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(`${MARVEL_API_URL}/${characterId}`, {
          params: {
            ts: 1,
            apikey: 'a50524f98b2603ecfe9a30811bcd7f7e',
            hash: 'd7c624a0e64184c58f1f1434b9c776f4',
          },
        });


        setDetails(response.data.data.results[0]);
      } catch (error) {
        console.error('Failed to fetch character details:', error);
        setError("Failed to load character details.");
      }
    };

    if (characterId) {
      fetchDetails();
    }
  }, [characterId]);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (!details) {
    return <p>Loading character details...</p>;
  }

  return (
    <div>
      <h3>{details.name}</h3>
      <img 
        src={`${details.thumbnail.path}.${details.thumbnail.extension}`} 
        alt={details.name} 
      />
      <p>{details.description || "No description available."}</p>
      <h4>Comics:</h4>
      {details.comics.items.length > 0 ? (
        <ul>
          {details.comics.items.map((comic, index) => (
            <li key={index}>{comic.name}</li>
          ))}
        </ul>
      ) : (
        <p>No comics available.</p>
      )}
    </div>
  );
};

export default CharacterDetail;

