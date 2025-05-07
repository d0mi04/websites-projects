import React from "react";
import "./PokemonCard.css";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <img
        src={`https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/${pokemon.url
          .split("/")
          .filter(Boolean)
          .pop()}.png`}
        alt={pokemon.name}
      />
      <h2>{pokemon.name}</h2>
    </div>
  );
};

export default PokemonCard;
