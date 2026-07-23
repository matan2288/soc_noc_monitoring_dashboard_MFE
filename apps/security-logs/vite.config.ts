import { federation } from "@module-federation/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import mfConfig from "./module-federation.config";

const origin = "http://localhost:5175";

export default defineConfig({
  base: origin,
  plugins: [react(), federation(mfConfig)],
  build: { target: "chrome89" },
  server: { port: 5175, strictPort: true, origin },
  preview: { port: 5175, strictPort: true },
});
