import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { StrictMode } from "react";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

/* Lenguajes */
import global_en from "./data/translations/en/global.json";
import global_es from "./data/translations/es/global.json";
import projects_en from "./data/translations/en/projects.json";
import projects_es from "./data/translations/es/projects.json";
const storedLang = window.localStorage.getItem("lang") || "en";

i18next.init({
  interpolation: { escapeValue: false },
  lng: storedLang,
  resources: {
    es: {
      global: global_es,
      projects: projects_es,
    },
    en: {
      global: global_en,
      projects: projects_en,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </StrictMode>
);
