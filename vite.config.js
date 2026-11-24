import { defineConfig } from "vite";
import { site } from "./src/content.js";
import { applyDocument } from "./src/render.js";

export default defineConfig({
  base: "./",
  plugins: [
    {
      name: "hebron-html",
      transformIndexHtml(html) {
        return applyDocument(html, site);
      },
    },
  ],
  server: {
    host: "0.0.0.0",
    port: 4721,
    strictPort: true,
  },
  preview: {
    host: "0.0.0.0",
    port: 4721,
    strictPort: true,
  },
});
