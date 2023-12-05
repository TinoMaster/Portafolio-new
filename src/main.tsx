import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { StrictMode } from "react";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

/* Lenguajes */
import global_en from "./data/translations/en/global.json";
import global_es from "./data/translations/es/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
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
