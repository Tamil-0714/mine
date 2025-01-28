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
    lib: {
      entry: './src/components/sub/floatingDemo.jsx', // Path to the specific component
      name: 'floatingDemo',
      fileName: (format) => `floatingDemo.${format}.js`,
    },
    rollupOptions: {
      // External dependencies that should not be bundled (e.g., React)
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
