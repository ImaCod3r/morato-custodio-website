import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { getPreferredLocale } from "./constants";

document.documentElement.lang = getPreferredLocale() === "en" ? "en" : "pt-BR";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
