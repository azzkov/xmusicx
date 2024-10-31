import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from './Home';
import SuasMusicas from './SuasMusicas';
import Letras from './Letras';
import Financeiro from './Financeiro';
import Plataformas from './Plataformas';
import Login from './Login'; // Importando o componente Login
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  const [totalVisualizacoes, setTotalVisualizacoes] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado de autenticação

  const handleUpdateVisualizacoes = (novasVisualizacoes) => {
    setTotalVisualizacoes(prev => prev + novasVisualizacoes);
  };

  const handleLogin = () => {
    setIsAuthenticated(true); // Atualiza o estado para autenticado
  };

  return (
    <Router>
      <nav className="navbar is-primary">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item has-text-white">
            xmusix
          </Link>
          <button className="navbar-burger burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item has-text-white">Home</Link>
            <Link to="/login" className="navbar-item has-text-white">Login</Link> 
            {/* Exibir apenas se estiver autenticado */}
            {isAuthenticated && (
              <>
                <Link to="/suas-musicas" className="navbar-item has-text-white">Suas Músicas</Link>
                <Link to="/letras" className="navbar-item has-text-white">Letras</Link>
                <Link to="/financeiro" className="navbar-item has-text-white">Financeiro</Link>
                <Link to="/plataformas" className="navbar-item has-text-white">Plataformas</Link>
              </>
            )}
          </div>
        </div>
      </nav>

      <main className="container mt-5">
        <Routes>
          {/* Redirecionar para a página de login se não estiver autenticado */}
          <Route path="/" element={isAuthenticated ? <Home totalVisualizacoes={totalVisualizacoes} /> : <Navigate to="/login" />} />
          {/* Proteger rotas */}
          <Route path="/suas-musicas" element={isAuthenticated ? <SuasMusicas onUpdateVisualizacoes={handleUpdateVisualizacoes} /> : <Navigate to="/login" />} />
          <Route path="/letras" element={isAuthenticated ? <Letras /> : <Navigate to="/login" />} />
          <Route path="/financeiro" element={isAuthenticated ? <Financeiro /> : <Navigate to="/login" />} />
          <Route path="/plataformas" element={isAuthenticated ? <Plataformas /> : <Navigate to="/login" />} />
          {/* Rota para a página de login */}
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;