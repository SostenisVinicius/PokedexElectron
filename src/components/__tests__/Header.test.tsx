import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "../Header";
import { vi } from "vitest";

describe("Header Component", () => {
  it("deve renderizar o título e alternar o tema ao clicar no botão", () => {
    const toggleThemeMock = vi.fn();
    render(<Header theme="light" toggleTheme={toggleThemeMock} />);

    expect(screen.getByText("Pokédex")).toBeInTheDocument();

    const button = screen.getByRole("button", { name: "🌙 Dark Mode" });
    fireEvent.click(button);

    expect(toggleThemeMock).toHaveBeenCalledTimes(1);
  });

  it("Deve alternar o tema ao clicar no botão", async () => {
    const toggleThemeMock = vi.fn();
    render(<Header theme="light" toggleTheme={toggleThemeMock} />);

    const button = screen.getByRole("button", { name: /dark mode|light mode/i });


    await userEvent.click(button);

    expect(toggleThemeMock).toHaveBeenCalledTimes(1);
  });
});
