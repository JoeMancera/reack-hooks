import React, { useState, useContext, useReducer, useMemo } from "react";
import useCharacters from "../hooks/useCharacters";
import ThemeContext from "../context/ThemeContext";
import '../assets/styles/Characters.css'

const initialState = {
  favorites : []
}

const favoriteReduce = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
    default:
      return state;
  }
}

const Characters = () => {
  const { characters } = useCharacters();
  const {isDarkMode} = useContext(ThemeContext);
  const [myfavorites, dispach] = useReducer(favoriteReduce, initialState);
  const [search, setSearch] = useState('');

  const handleFavorite = (character) => {
    dispach({
      type: 'ADD_TO_FAVORITE',
      payload: character
    })
  }

  const handleSearch = (event) => {
    setSearch(event.target.value.toLowerCase());
  }

  const filteredCharacters = useMemo(() => {
    return characters.filter(character => character.name.toLowerCase().includes(search));
  }, [characters, search]);	

  return (
    <div className="characters">
      <div className="characters__search">
        <input type="text" value={search} placeholder="Search" onChange={handleSearch}/>
      </div>
      <ul className="characters__container">
        {myfavorites.favorites.map(character =>( 
          <li id={'favorite'+character.id}>{character.name}</li>
        ))}
      </ul>
      {filteredCharacters.map(character => (
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
            <button type="button" onClick={() => handleFavorite(character)}>Add to favorite</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Characters;