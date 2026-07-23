import { federation } from "@module-federation/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import mfConfig from "./module-federation.config";

const origin = "http://localhost:5176";

export default defineConfig({
  base: origin,
  plugins: [vue(), federation(mfConfig)],
  build: { target: "chrome89" },
  server: { port: 5176, strictPort: true, origin },
  preview: { port: 5176, strictPort: true },
});
