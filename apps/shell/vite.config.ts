import { federation } from "@module-federation/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shell",
      remotes: {
        cloudMap: {
          type: "module",
          name: "cloudMap",
          entry: "http://localhost:5174/remoteEntry.js",
        },
        // wire later:
        // securityLogs: { type: "module", name: "securityLogs", entry: "http://localhost:5175/remoteEntry.js" },
        // criticalAlerts: { type: "module", name: "criticalAlerts", entry: "http://localhost:5176/remoteEntry.js" },
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
        zustand: { singleton: true },
      },
    }),
  ],
  build: { target: "esnext" },
  server: { port: 5173, strictPort: true },
  preview: { port: 5173, strictPort: true },
});
