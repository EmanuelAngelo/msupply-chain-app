// src/components/EntradaList.js
import React, { useEffect, useState } from 'react';
import { listarEntradas } from '../services/api';

const EntradaList = () => {
    const [entradas, setEntradas] = useState([]);

    useEffect(() => {
        const fetchEntradas = async () => {
            try {
                const response = await listarEntradas();
                setEntradas(response.data);
            } catch (error) {
                console.error('Erro ao buscar entradas:', error);
            }
        };
        fetchEntradas();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Entradas</h1>
            <ul>
                {entradas.map((entrada) => (
                    <li key={entrada.id} className="border p-2 mb-2">
                        <p><strong>Mercadoria:</strong> {entrada.nome_mercadoria}</p>
                        <p><strong>Quantidade:</strong> {entrada.quantidade}</p>
                        <p><strong>Data e Hora:</strong> {entrada.dataHora}</p>
                        <p><strong>Local:</strong> {entrada.local}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EntradaList;