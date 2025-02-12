import React from "react";
import Home from "../pages/Home";
import { PokemonProvider } from "../context/PokemonProvider";


const App: React.FC = () => {
  return (
    <PokemonProvider>
      <Home />
    </PokemonProvider>
  );
};

export default App;
