import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: "myproject.com", // Bind to the custom domain
  //   port: 5173, // Use the default port
  // },
  build: {
    sourcemap: "production" !== 'production', // Only generate source maps in production
  },
  optimizeDeps: {
    include: ['three'],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
