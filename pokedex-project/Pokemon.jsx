import React, {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const query = new URLSearchParams(useLocation().search)
  const pokemonName = query.get("name");

  useEffect(() => {
    const fetchPokemon = async () => {
      if (!pokemonName) return;

      try {
        const response = await fetch(`https://pokedex.mimo.dev/api/pokemon/${pokemonName}`);
        const data = await response.json();
        setPokemon(data);
        setLoading(false);
      } catch (error) {
        setError("Error loading Pokemon data");
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [pokemonName]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {pokemon && (
        <div>
          <h1>{pokemon.name}</h1>
          <p>Pokemon height: {pokemon.height}</p>
          <p>Pokemon weight: {pokemon.weight}</p>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>Abilities: {pokemon.abilities.map(ability => 
            ability.ability.name).join(",")}</p>
          <p>Types: {pokemon.types.map(type => 
            type.type.name).join(", ")}</p>
        </div>
      )}
    </>
  )
}

export default Pokemon;