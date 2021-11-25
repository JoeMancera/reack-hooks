import React, { useState, useEffect, useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import '../assets/styles/Characters.css'

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const {isDarkMode} = useContext(ThemeContext);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
    .then(response => response.json())
    .then(data => setCharacters(data.results))
  }, []);

  return (
    <div className="characters">
      {characters.map(character => (
        <div key={character.id} className="card__character">
          <figure>
            <img loading="lazy" src={character.image} alt={character.name} />
          </figure>
          <div className={isDarkMode ? "character__info character__info-dark" : "character__info character__info-light"}>
            <h3 className="character__name"><span className={ 'character__status character-' + character.status }></span>{character.name}</h3>
            <ul>
              <li>Species: {character.species}</li>
              <li>Gender: {character.gender}</li>
              <li>Origin: {character.origin.name}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Characters;