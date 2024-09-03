import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AllRoutes } from "./routes/AllRoutes";
import { Footer, Header } from "./components";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <div className="dark:bg-slate-800 bg-white">
        <Header />
        <ScrollToTop />
        <AllRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
