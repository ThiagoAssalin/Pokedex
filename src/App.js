import React from 'react';


import Header from './components/Header/Header';
import './App.css'
import Pokedex from './components/Pokedex/Pokedex';

function App() {
  return (
    <div className="app">
        <Header  />
        <Pokedex /> 
    </div>
  );
}

export default App;
