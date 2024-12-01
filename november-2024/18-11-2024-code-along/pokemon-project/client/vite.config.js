import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["/images/AboutUsImage.svg"], // Prevents Rollup from trying to process the asset
    },
  },
});
