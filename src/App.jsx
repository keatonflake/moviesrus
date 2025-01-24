import { AllRoutes } from "./routes/AllRoutes";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App dark:bg-slate-800 min-h-screen">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
