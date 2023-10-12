import { BrowserRouter } from "react-router-dom";
import { BaseLayout } from "./Components/Layout/BaseLayout";
import { AppProvider } from "./context/appContext";

function App() {
  return (
    <main className="w-screen h-screen overflow-hidden font-siliguri font-bold bg-darkMode text-slate-300">
      <AppProvider>
        <BrowserRouter>
          <BaseLayout />
        </BrowserRouter>
      </AppProvider>
    </main>
  );
}

export default App;
