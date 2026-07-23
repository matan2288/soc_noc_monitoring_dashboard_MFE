import { createStore } from "zustand/vanilla";
import type { ConnectionStatus, DcId } from "@noc/types";

export interface SharedState {
  selectedDcId: DcId | null;
  auth: { user: string | null };
  connectionStatus: ConnectionStatus;
  setSelectedDcId: (id: DcId | null) => void;
  setConnectionStatus: (status: ConnectionStatus) => void;
  setUser: (user: string | null) => void;
}

/** Vanilla Zustand singleton — remotes (incl. Vue) read current state on late mount. */
export const sharedStore = createStore<SharedState>((set) => ({
  selectedDcId: null,
  auth: { user: "demo" },
  connectionStatus: "disconnected",
  setSelectedDcId: (selectedDcId) => set({ selectedDcId }),
  setConnectionStatus: (connectionStatus) => set({ connectionStatus }),
  setUser: (user) => set({ auth: { user } }),
}));
