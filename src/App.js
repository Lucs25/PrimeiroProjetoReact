import React from "react";
import { BrowserRouter, Routes, Route /* Router */ } from "react-router-dom";
import "./App.css";
import Produtos from "./Componentes/Produtos";
import Produto from "./Componentes/Produto";
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import Contato from "./Componentes/Contato";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="produto/:id" element={<Produto />} />
            <Route path="Contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
