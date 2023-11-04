import { BrowserRouter } from "react-router-dom";
import { BaseLayout } from "./Components/Layout/BaseLayout";
import { AppProvider } from "./context/appContext";
import ScrollToTop from "./Components/global/ScrollToTop";

function App() {
  return (
    <section className="min-w-screen min-h-screen font-siliguri font-bold bg-darkMode text-slate-300">
      <AppProvider>
        <BrowserRouter>
          <ScrollToTop />
          <BaseLayout />
        </BrowserRouter>
      </AppProvider>
    </section>
  );
}

export default App;
