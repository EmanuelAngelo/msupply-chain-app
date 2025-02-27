import React from 'react';
import MercadoriaForm from '../components/MercadoriaForm';
import MercadoriaList from '../components/MercadoriaList';

const Mercadorias = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Cadastro de Mercadorias</h1>
            <MercadoriaForm />
            <MercadoriaList />
        </div>
    );
};

export default Mercadorias;