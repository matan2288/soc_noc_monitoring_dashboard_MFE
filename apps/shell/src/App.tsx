import { lazy, Suspense } from "react";
import { ErrorBoundary } from "./ErrorBoundary";

const CloudMap = lazy(() => import("cloudMap/App"));

export function App() {
  return (
    <main style={{ fontFamily: "system-ui", padding: 16 }}>
      <h1>NOC/SOC Shell</h1>
      <p>Host loads remotes via Module Federation.</p>
      <ErrorBoundary name="cloud-map">
        <Suspense fallback={<p>Loading cloud-map…</p>}>
          <CloudMap />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
