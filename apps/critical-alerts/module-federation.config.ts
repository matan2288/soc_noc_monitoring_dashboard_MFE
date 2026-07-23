import { createModuleFederationConfig } from "@module-federation/vite";

export default createModuleFederationConfig({
  name: "criticalAlerts",
  filename: "remoteEntry.js",
  manifest: true,
  // shell will call mount()/unmount() — expose that contract later
  exposes: {
    "./mount": "./src/mount.ts",
  },
  shared: {
    zustand: { singleton: true },
  },
});
