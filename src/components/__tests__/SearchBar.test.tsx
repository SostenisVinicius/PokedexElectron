import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "../SearchBar";
import { vi } from "vitest";

describe("SearchBar Component", () => {
  it("deve permitir digitar e chamar a função onChange", () => {
    const onChangeMock = vi.fn();
    render(<SearchBar value="" onChange={onChangeMock} />);

    const input = screen.getByPlaceholderText("Pesquisar Pokémon...");
    fireEvent.change(input, { target: { value: "Pikachu" } });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith("Pikachu");
  });

  it("Deve garantir que o campo de busca seja acessível", () => {
    render(<SearchBar value="" onChange={() => { }} />);

    const input = screen.getByRole("textbox", { name: /buscar pokémon/i });

    expect(input).toBeInTheDocument();
  });

  it("Deve atualizar o valor do input ao digitar", async () => {
    const onChangeMock = vi.fn();
    render(<SearchBar value="" onChange={onChangeMock} />);

    const input = screen.getByRole("textbox");

    await userEvent.type(input, "Pikachu");

    expect(onChangeMock).toHaveBeenCalledTimes(7);
  });

});
