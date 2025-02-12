import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/pokemon", () => {
    return HttpResponse.json([{ name: "Pikachu" }]);
  }),
];