// src/pages/Saidas.js
import React from 'react';
import SaidaForm from '../components/SaidaForm';
import SaidaList from '../components/SaidaList';

const Saidas = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Cadastro de Saídas</h1>
            <SaidaForm />
            <SaidaList />
        </div>
    );
};

export default Saidas;