import { defineConfig } from "vite";
// import path from "path";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    // proxy: {
    //   "/": {
    //     target: "http://localhost:3000",
    //     changeOrigin: true,
    //   },
    // },
  },
});