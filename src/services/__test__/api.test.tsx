import { render, screen } from "@testing-library/react";
import { setupServer } from "msw/node";
import PokemonCard from "../../components/PokemonCard";
import { handlers } from "../../mocks/handlers";

// Configura o servidor MSW com os handlers
const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it("Deve exibir o nome do Pokémon vindo da API", async () => {
  render(<PokemonCard name="Pikachu" image="https://img.com/pikachu.png" />);

  expect(await screen.findByText("Pikachu")).toBeInTheDocument();
});