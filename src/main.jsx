import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import * as Sentry from "@sentry/react";
import { replayIntegration } from "@sentry/react";
import { browserTracingIntegration } from "@sentry/react";

Sentry.init({
  dsn: "https://7c7947a2bcfeaeb383264630ea0880a8@o4509514576887808.ingest.us.sentry.io/4509514579705856",

  integrations: [
    browserTracingIntegration({
      tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
    }),
    replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    }),
  ],

  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  sendDefaultPii: true,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
