import React, { useState } from 'react';
import { criarMercadoria } from '../services/api';

const MercadoriaForm = () => {
    const [nome, setNome] = useState('');
    const [numero_registro, setRegistro] = useState('');
    const [fabricante, setFabricante] = useState('');
    const [tipo, setTipo] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const mercadoria = { nome, numero_registro, fabricante, tipo, descricao };
        try {
            await criarMercadoria(mercadoria);
            alert('Mercadoria cadastrada com sucesso!');
            setNome('');
            setRegistro('');
            setFabricante('');
            setTipo('');
            setDescricao('');
        } catch (error) {
            console.error('Erro ao cadastrar mercadoria:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full p-2 border rounded"
            />
            <input
                type="text"
                placeholder="Número de Registro"
                value={numero_registro}
                onChange={(e) => setRegistro(e.target.value)}
                className="w-full p-2 border rounded"
            />
            <input
                type="text"
                placeholder="Fabricante"
                value={fabricante}
                onChange={(e) => setFabricante(e.target.value)}
                className="w-full p-2 border rounded"
            />
            <input
                type="text"
                placeholder="Tipo"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                className="w-full p-2 border rounded"
            />
            <textarea
                placeholder="Descrição"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                className="w-full p-2 border rounded"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                Cadastrar Mercadoria
            </button>
        </form>
    );
};

export default MercadoriaForm;