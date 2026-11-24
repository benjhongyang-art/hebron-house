import { defineConfig } from "vite";
import { site } from "./src/content.js";
import { applyDocument } from "./src/render.js";

// GitHub Pages 專案網站網址是 /hebron-house/。
// 若要發佈到網域根目錄，建置前把 VITE_BASE 設成 /。
const base = process.env.VITE_BASE || "/hebron-house/";

export default defineConfig({
  base,
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
