import React from "react";

interface PokemonCardProps {
  name: string;
  image: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, image }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center transition-transform hover:scale-105">
      <img src={image} alt={name} className="w-24 h-24" />
      <h2 className="text-lg font-bold capitalize mt-2 text-gray-900 dark:text-white">{name}</h2>
    </div>
  );
};

export default PokemonCard;