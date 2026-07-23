import { createModuleFederationConfig } from "@module-federation/vite";

export default createModuleFederationConfig({
  name: "shell",
  remotes: {
    cloudMap: {
      type: "module",
      name: "cloudMap",
      entry: "http://localhost:5174/mf-manifest.json",
    },
    // wire later:
    // securityLogs: { type: "module", name: "securityLogs", entry: "http://localhost:5175/mf-manifest.json" },
    // criticalAlerts: { type: "module", name: "criticalAlerts", entry: "http://localhost:5176/mf-manifest.json" },
  },
  shared: {
    react: { singleton: true },
    "react/": { singleton: true },
    "react-dom": { singleton: true },
    "react-dom/": { singleton: true },
    zustand: { singleton: true },
  },
});
