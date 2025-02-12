import { useContext } from "react";
import { PokemonContextProps, PokemonContext } from "../context/PokemonContext";

export const usePokemon = (): PokemonContextProps => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error("usePokemon deve ser usado dentro de um PokemonProvider");
  }
  return context;
};
