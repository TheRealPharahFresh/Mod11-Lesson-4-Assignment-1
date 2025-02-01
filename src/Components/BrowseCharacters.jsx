import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MARVEL_API_URL = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=a50524f98b2603ecfe9a30811bcd7f7e&hash=d7c624a0e64184c58f1f1434b9c776f4";

const BrowseCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(MARVEL_API_URL)
      .then((response) => {
        setCharacters(response.data.data.results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Failed to load characters. Please try again later.');
      });
  }, []);

  return (
    <div>
      <h1>Marvel Characters</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {characters.length > 0 ? (
          characters.map((char) => (
            <li key={char.id}>
              <h3>{char.name}</h3>
              <img
                src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
                alt={char.name}
              />
              <Link to={`/character/${char.id}`}>View Details</Link>
            </li>
          ))
        ) : (
          <p>Loading characters...</p>
        )}
      </ul>
    </div>
  );
};

export default BrowseCharacters;




