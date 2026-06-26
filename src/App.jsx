import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [mainMenuOpen, setMainMenuOpen] = useState(true);

  return (
    <BrowserRouter>
      <Navbar
        mainMenuOpen={mainMenuOpen}
        setMainMenuOpen={setMainMenuOpen}
      />

      <AppRoutes mainMenuOpen={mainMenuOpen} />
    </BrowserRouter>
  );
}

export default App;