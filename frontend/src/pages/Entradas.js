import React from 'react';
import EntradaForm from '../components/EntradaForm';
import EntradaList from '../components/EntradaList';

const Entradas = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Cadastro de Entradas</h1>
            <EntradaForm />
            <EntradaList />
        </div>
    );
};

export default Entradas;