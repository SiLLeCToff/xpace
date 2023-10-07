import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  assetsDir: "src",
  plugins: [react()],
  server: {
    port: 5300,
  },
});
