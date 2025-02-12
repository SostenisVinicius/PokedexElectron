import React from "react";

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  return (
    <div className="flex justify-between items-center w-full max-w-4xl mb-6 px-4">
      <h1 className="font-bold text-gray-900 dark:text-white text-4xl md:text-3xl sm:text-xl">
        Pokédex
      </h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 md:px-3 md:py-1 sm:px-2 sm:py-1 text-lg md:text-base sm:text-xs rounded bg-blue-500 text-white hover:bg-blue-600 transition"
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </div>
  );
};

export default Header;
