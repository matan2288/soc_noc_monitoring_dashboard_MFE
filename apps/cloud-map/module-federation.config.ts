import { createModuleFederationConfig } from "@module-federation/vite";

export default createModuleFederationConfig({
  name: "cloudMap",
  filename: "remoteEntry.js",
  manifest: true,
  exposes: {
    "./App": "./src/App.tsx",
  },
  shared: {
    react: { singleton: true },
    "react/": { singleton: true },
    "react-dom": { singleton: true },
    "react-dom/": { singleton: true },
    zustand: { singleton: true },
  },
});
