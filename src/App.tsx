import React from "react";
import { useSettings } from "./hooks";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  const { settings, changeSettings } = useSettings();
  return (
    <main className={settings.theme}>
      <div className="main-container">
        {/* <ErrorBoundary FallbackComponent={} onError={}></ErrorBoundary> */}
        <Container></Container>
      </div>
    </main>
  );
}

export default App;
