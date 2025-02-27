// src/components/MercadoriaList.js
import React, { useEffect, useState } from 'react';
import { listarMercadorias } from '../services/api';

const MercadoriaList = () => {
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

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Mercadorias</h1>
            <ul>
                {mercadorias.map((mercadoria) => (
                    <li key={mercadoria.id} className="border p-2 mb-2">
                        <p><strong>Nome:</strong> {mercadoria.nome}</p>
                        <p><strong>Registro:</strong> {mercadoria.registro}</p>
                        <p><strong>Fabricante:</strong> {mercadoria.fabricante}</p>
                        <p><strong>Tipo:</strong> {mercadoria.tipo}</p>
                        <p><strong>Descrição:</strong> {mercadoria.descricao}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MercadoriaList;