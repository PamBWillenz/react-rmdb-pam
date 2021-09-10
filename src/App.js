import React from "react";
// Components
import Header from "./components/Header";
import Home from "./components/Home";

// Styles
import { GlobalStye } from "./GlobalStyle";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStye />
    </div>
  );
}

export default App;
