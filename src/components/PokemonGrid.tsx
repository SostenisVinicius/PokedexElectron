import React from "react";
import PokemonCard from "./PokemonCard";
import { Pokemon } from "../services/api";

interface PokemonGridProps {
  pokemons: Pokemon[];
}

const PokemonGrid: React.FC<PokemonGridProps> = ({ pokemons }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full max-w-4xl px-4">
      {pokemons.map((pokemon) => {
        const pokemonId = pokemon.url.split("/").filter(Boolean).pop();
        return (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
          />
        );
      })}
    </div>
  );
};

export default PokemonGrid;