import React, {useState, useEffect} from "react";

const Pokedex = () => {
  const[pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch("https://pokedex.mimo.dev/api/pokemon");
      const data = await response.json();
      setPokemons(data);
    };

    fetchPokemons();
  }, []);

  return (
    <div>
      <h1>Pokedex</h1>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Pokedex;