import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: process.env.VITE_BASE_PATH || "/jplayer-skin-premium-pixels/",
  build: {
    outDir: "../dist",
  },
  plugins: [tailwindcss()],
  root: "src",
});
