// src/components/SaidaList.js
import React, { useEffect, useState } from 'react';
import { listarSaidas } from '../services/api';

const SaidaList = () => {
    const [saidas, setSaidas] = useState([]);

    useEffect(() => {
        const fetchSaidas = async () => {
            try {
                const response = await listarSaidas();
                setSaidas(response.data);
            } catch (error) {
                console.error('Erro ao buscar saídas:', error);
            }
        };
        fetchSaidas();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Saídas</h1>
            <ul>
                {saidas.map((saida) => (
                    <li key={saida.id} className="border p-2 mb-2">
                        <p><strong>Mercadoria:</strong> {saida.nome_mercadoria}</p>
                        <p><strong>Quantidade:</strong> {saida.quantidade}</p>
                        <p><strong>Data e Hora:</strong> {saida.dataHora}</p>
                        <p><strong>Local:</strong> {saida.local}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SaidaList;