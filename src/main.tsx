import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { resolveSystemLocale } from "./constants";

document.documentElement.lang = resolveSystemLocale() === "en" ? "en" : "pt-BR";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
