import { federation } from "@module-federation/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "criticalAlerts",
      filename: "remoteEntry.js",
      // shell will call mount()/unmount() — expose that contract later
      exposes: {
        "./mount": "./src/mount.ts",
      },
      shared: {
        zustand: { singleton: true },
      },
    }),
  ],
  build: { target: "esnext" },
  server: { port: 5176, strictPort: true, origin: "http://localhost:5176" },
  preview: { port: 5176, strictPort: true },
});
