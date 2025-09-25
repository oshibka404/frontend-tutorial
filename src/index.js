import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

// Import and init Sentry SDK
// import * as Sentry from "@sentry/react";
//
// Sentry.init({
//   dsn: "https://2f4e649d19e64637903b24e784c7a4f2@o4505201972871168.ingest.sentry.io/4505523376553985",
//   integrations: [Sentry.browserTracingIntegration()],
//   tracesSampleRate: 1.0,
// });

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);