import { createContext } from "react";
import { Pokemon } from "../services/api";

export interface PokemonContextProps {
  paginatedPokemons: Pokemon[];
  allPokemons: Pokemon[];
  loading: boolean;
  error: string | null;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const PokemonContext = createContext<PokemonContextProps | undefined>(undefined);
