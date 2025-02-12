import axios from "axios";

// Interface do Pokémon
export interface Pokemon {
  name: string;
  url: string;
}

// Configuração da API
const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

// Função para buscar Pokémons com suporte a paginação
export const getPokemons = async (limit: number = 20, offset: number = 0): Promise<Pokemon[]> => {
  try {
    const response = await api.get<{ results: Pokemon[] }>(`/pokemon?limit=${limit}&offset=${offset}`);
    return response.data.results;
  } catch (error) {
    console.error("Erro ao buscar Pokémon:", error);
    return [];
  }
};
