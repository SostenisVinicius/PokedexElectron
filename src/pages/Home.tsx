import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import PokemonGrid from "../components/PokemonGrid";
import { useTheme } from "../hooks/useTheme";
import { usePokemon } from "../hooks/usePokemon";
import { Pokemon } from "../services/api";

const Home: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { paginatedPokemons, allPokemons, loading, error, setPage } = usePokemon();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !loading && !searchTerm) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, setPage, searchTerm]);

  const filteredPokemons = searchTerm
    ? allPokemons.filter((pokemon: Pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : paginatedPokemons;

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start bg-gray-100 dark:bg-gray-900 p-4">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      {error && <p className="text-center text-red-500">{error}</p>}
      <PokemonGrid pokemons={filteredPokemons} />
      {!searchTerm && loading && <p className="text-center text-gray-600 dark:text-gray-400">Carregando mais Pokémon...</p>}
    </div>
  );
};

export default Home;
