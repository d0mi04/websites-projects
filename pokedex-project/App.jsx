import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home"
import Pokedex from "./Pokedex"

const NavigationBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/pokedex">Pokédex</Link>
    </nav>
  );
};

const App = () => (
  <>
    <BrowserRouter>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/pokedex" element={<Pokedex />}/>
    </Routes>
    </BrowserRouter>  
  </>
);

export default App;