import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-xl font-bold">MStarSupply</Link>
                <div className="space-x-4">
                    <Link to="/entradas" className="text-white">Entradas</Link><br></br>
                    <Link to="/saidas" className="text-white">Saídas</Link><br></br>
                    <Link to="/mercadorias" className="text-white">Mercadorias</Link><br></br>
                    <Link to="/relatorio" className="text-white">Relatório</Link><br></br>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;