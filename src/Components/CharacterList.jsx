import { useState, useEffect } from "react";
import { func } from "prop-types";
import { useNavigate } from "react-router-dom"; 

const MARVEL_API_URL = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=a50524f98b2603ecfe9a30811bcd7f7e&hash=d7c624a0e64184c58f1f1434b9c776f4";

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(MARVEL_API_URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch characters");
                }
                return response.json();
            })
            .then((data) => {
                setCharacters(data.data.results);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setError("Failed to load characters. Please try again later.");
            });
    }, []);

    return (
        <div>
            <h1>Marvel Characters</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}

            <ul>
                {characters.length > 0 ? (
                    characters.map((char) => (
                        <li key={char.id} onClick={() => navigate(`/character/${char.id}`)}>
                            <h3>{char.name}</h3>
                            <img src={`${char.thumbnail.path}.${char.thumbnail.extension}`} alt={char.name} />
                        </li>
                    ))
                ) : (
                    <p>Loading characters...</p>
                )}
            </ul>
        </div>
    );
};

CharacterList.propTypes = {
    onCharacterSelect: func
};

export default CharacterList;



