/** Typed pub/sub for transient, fire-and-forget signals. */

type Handler<T> = (payload: T) => void;

export type BusEvents = {
  "alert:dismissed": { id: string };
};

class EventBus {
  // ponytail: Map of arrays is enough for a demo; no wildcards / once()
  private listeners = new Map<keyof BusEvents, Set<Handler<unknown>>>();

  on<K extends keyof BusEvents>(event: K, handler: Handler<BusEvents[K]>) {
    let set = this.listeners.get(event);
    if (!set) {
      set = new Set();
      this.listeners.set(event, set);
    }
    set.add(handler as Handler<unknown>);
    return () => set!.delete(handler as Handler<unknown>);
  }

  emit<K extends keyof BusEvents>(event: K, payload: BusEvents[K]) {
    this.listeners.get(event)?.forEach((h) => h(payload));
  }
}

export const eventBus = new EventBus();
