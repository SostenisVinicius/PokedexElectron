import { useState, useEffect, useCallback } from "react";
import { PokemonContext } from "./PokemonContext";
import { getPokemons, Pokemon } from "../services/api";

export const PokemonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [paginatedPokemons, setPaginatedPokemons] = useState<Pokemon[]>([]);
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const limit = 20;

  // Busca Pokémon com paginação
  const fetchPokemons = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const newPokemons = await getPokemons(limit, (page - 1) * limit);

      setPaginatedPokemons((prev) => {
        const existingNames = new Set(prev.map((p) => p.name));
        const uniquePokemons = newPokemons.filter((p) => !existingNames.has(p.name));
        return [...prev, ...uniquePokemons];
      });
    } catch (error) {
      setError("Erro ao carregar Pokémon: " + error);
    } finally {
      setLoading(false);
    }
  }, [page]);

  // Busca todos os Pokémon para pesquisa
  useEffect(() => {
    const fetchAllPokemons = async () => {
      try {
        const fullList = await getPokemons(1000, 0);
        setAllPokemons(fullList);
      } catch (error) {
        console.error("Erro ao carregar a lista completa de Pokémon: ", error);
      }
    };
    fetchAllPokemons();
  }, []);

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  return (
    <PokemonContext.Provider value={{ paginatedPokemons, allPokemons, loading, error, setPage, page }}>
      {children}
    </PokemonContext.Provider>
  );
};