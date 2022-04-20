import React from "react";
import Header from "./components/Header/Header";
import "./app.css";
import Pokedex from "./components/Pokedex/Pokedex";
import { PokeProvider } from "./components/Services/Context";

function App() {
  return (
    <div>
      <PokeProvider>
        <Header />
        <div className="app">
          <Pokedex />
        </div>
      </PokeProvider>
    </div>
  );
}

export default App;
