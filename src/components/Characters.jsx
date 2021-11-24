import React, { useState, useEffect } from "react";
import '../assets/styles/Characters.css'

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
    .then(response => response.json())
    .then(data => setCharacters(data.results))
  }, []);

  return (
    <div className="characters">
      {characters.map(character => (
        <div className="card__character">
          <figure>
            <img src={character.image} alt={character.name} srcset="" />
          </figure>
          <div className="card__character-info">
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