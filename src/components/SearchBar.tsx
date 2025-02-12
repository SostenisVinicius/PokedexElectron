import React, { ChangeEvent } from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Pesquisar Pokémon..."
      aria-label="Buscar Pokémon"
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
      className="w-full max-w-4xl p-2 mb-4 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-black dark:text-white"
    />
  );
};

export default SearchBar;
