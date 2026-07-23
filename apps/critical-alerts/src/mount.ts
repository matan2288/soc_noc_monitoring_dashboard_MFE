import { createApp, type App } from "vue";
import CriticalAlerts from "./CriticalAlerts.vue";

let app: App | null = null;

/** Framework-agnostic contract for the React shell. */
export function mountCriticalAlerts(el: HTMLElement) {
  if (app) return;
  app = createApp(CriticalAlerts);
  app.mount(el);
}

export function unmountCriticalAlerts() {
  app?.unmount();
  app = null;
}
