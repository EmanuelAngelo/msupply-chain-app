// src/pages/Relatorio.js
import React, { useEffect, useState } from 'react';
import { gerarRelatorioMensal } from '../services/api';

const Relatorio = () => {
    const [relatorio, setRelatorio] = useState([]);

    useEffect(() => {
        const fetchRelatorio = async () => {
            try {
                const response = await gerarRelatorioMensal();
                setRelatorio(response.data);
            } catch (error) {
                console.error('Erro ao buscar relatório:', error);
            }
        };
        fetchRelatorio();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Relatório Mensal</h1>
            <ul>
                {relatorio.map((item) => (
                    <li key={item.id} className="border p-2 mb-2">
                        <p><strong>Mercadoria:</strong> {item.nome_mercadoria}</p>
                        <p><strong>Entradas:</strong> {item.entradas}</p>
                        <p><strong>Saídas:</strong> {item.saidas}</p>
                        <p><strong>Saldo:</strong> {item.saldo}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Relatorio;