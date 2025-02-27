import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Entradas from './pages/Entradas';
import Saidas from './pages/Saidas';
import Mercadorias from './pages/Mercadorias';
import Relatorio from './pages/Relatorio';
import Navbar from './components/Navbar';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/entradas" element={<Entradas />} />
                <Route path="/saidas" element={<Saidas />} />
                <Route path="/mercadorias" element={<Mercadorias />} />
                <Route path="/relatorio" element={<Relatorio />} />
            </Routes>
        </Router>
    );
}

export default App;