import { render, screen } from "@testing-library/react";
import PokemonCard from "../PokemonCard";

describe("PokemonCard Component", () => {
  it("deve renderizar corretamente o nome e a imagem do Pokémon", () => {
    render(<PokemonCard name="Pikachu" image="https://img.com/pikachu.png" />);

    expect(screen.getByText("Pikachu")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Pikachu" })).toHaveAttribute("src", "https://img.com/pikachu.png");
  });
});
