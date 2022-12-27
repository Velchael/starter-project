import'./App.css';
import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Usuario from "./components/Usuario";

function App() {
  return (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="Sobre" element={<Sobre/>} />
      <Route path="Usuario" element={<Usuario/>} />
    </Routes>
  </div>
 );
}
export default App;