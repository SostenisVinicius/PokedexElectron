export const getInitialTheme = (): "light" | "dark" => {
  const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
  return storedTheme || "light";
};

export const applyThemeToDocument = (theme: "light" | "dark") => {
  document.documentElement.classList.toggle("dark", theme === "dark");
};
