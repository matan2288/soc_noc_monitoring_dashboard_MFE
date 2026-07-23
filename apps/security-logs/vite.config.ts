import { federation } from "@module-federation/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "securityLogs",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.tsx",
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
        zustand: { singleton: true },
      },
    }),
  ],
  build: { target: "esnext" },
  server: { port: 5175, strictPort: true, origin: "http://localhost:5175" },
  preview: { port: 5175, strictPort: true },
});
