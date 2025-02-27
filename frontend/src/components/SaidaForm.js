// src/components/SaidaForm.js
import React, { useState, useEffect } from 'react';
import { criarSaida, listarMercadorias } from '../services/api';

const SaidaForm = () => {
    const [quantidade, setQuantidade] = useState('');
    const [dataHora, setDataHora] = useState('');
    const [local, setLocal] = useState('');
    const [mercadoria_id, setMercadoriaId] = useState('');
    const [mercadorias, setMercadorias] = useState([]);

    useEffect(() => {
        const fetchMercadorias = async () => {
            try {
                const response = await listarMercadorias();
                setMercadorias(response.data);
            } catch (error) {
                console.error('Erro ao buscar mercadorias:', error);
            }
        };
        fetchMercadorias();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const saida = { quantidade, dataHora, local, mercadoria_id };
        try {
            await criarSaida(saida);
            alert('Saída cadastrada com sucesso!');
            setQuantidade('');
            setDataHora('');
            setLocal('');
            setMercadoriaId('');
        } catch (error) {
            console.error('Erro ao cadastrar saída:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="number"
                placeholder="Quantidade"
                value={quantidade}
                onChange={(e) => setQuantidade(e.target.value)}
                className="w-full p-2 border rounded"
            />
            <input
                type="datetime-local"
                placeholder="Data e Hora"
                value={dataHora}
                onChange={(e) => setDataHora(e.target.value)}
                className="w-full p-2 border rounded"
            />
            <input
                type="text"
                placeholder="Local"
                value={local}
                onChange={(e) => setLocal(e.target.value)}
                className="w-full p-2 border rounded"
            />
            <select
                value={mercadoria_id}
                onChange={(e) => setMercadoriaId(e.target.value)}
                className="w-full p-2 border rounded"
            >
                <option value="">Selecione uma mercadoria</option>
                {mercadorias.map((mercadoria) => (
                    <option key={mercadoria.id} value={mercadoria.id}>
                        {mercadoria.nome}
                    </option>
                ))}
            </select>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                Cadastrar Saída
            </button>
        </form>
    );
};

export default SaidaForm;