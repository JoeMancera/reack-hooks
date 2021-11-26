import { useEffect, useState } from "react";

const useCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
    .then(response => response.json())
    .then(data => setCharacters(data.results))
  }, []);

  return { characters }
}

export default useCharacters;
