import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/digital-dye-studio",
  plugins: [react()],
  build: {
    assetsInclude: [
      "**/*.png",
      "**/*.jpg",
      "**/*.svg",
      "**/*.ico",
      "**/*.glb",
      "**/*.gltf",
    ],
  },
});
