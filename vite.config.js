import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANTE: 'base' debe coincidir con el nombre del repositorio de GitHub.
// Si tu repo se llama distinto a "lola-pedidos", cambiá el valor de abajo.
export default defineConfig({
  base: "/lola-pedidos/",
  plugins: [react()],
});
