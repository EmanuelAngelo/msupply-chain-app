from flask import Blueprint, request, jsonify
from app.models.entrada import Entrada
from app.models.mercadoria import Mercadoria
from app import db
from datetime import datetime

bp = Blueprint('entrada', __name__)

@bp.route('/entradas-criar', methods=['POST'])
def criar_entrada():
    data = request.get_json()


    if not data or not all(key in data for key in ['quantidade', 'data_hora', 'local', 'mercadoria_id']):
        return jsonify({'message': 'Dados inválidos'}), 400


    try:
        data_hora = datetime.strptime(data['data_hora'], '%Y-%m-%d %H:%M:%S')
    except ValueError:
        return jsonify({'message': 'Formato de data/hora inválido. Use YYYY-MM-DD HH:MM:SS'}), 400


    mercadoria = Mercadoria.query.get(data['mercadoria_id'])
    if not mercadoria:
        return jsonify({'message': 'Mercadoria não encontrada'}), 404


    nova_entrada = Entrada(
        quantidade=data['quantidade'],
        data_hora=data_hora,
        local=data['local'],
        mercadoria_id=data['mercadoria_id']
    )
    db.session.add(nova_entrada)
    db.session.commit()

    return jsonify({'message': 'Entrada criada com sucesso'}), 201

@bp.route('/entradas-listar', methods=['GET'])
def listar_entradas():
    entradas = db.session.query(Entrada, Mercadoria)\
                        .join(Mercadoria, Entrada.mercadoria_id == Mercadoria.id)\
                        .all()

    resultado = []
    for entrada, mercadoria in entradas:
        resultado.append({
            'id': entrada.id,
            'quantidade': entrada.quantidade,
            'data_hora': entrada.data_hora.isoformat(),
            'local': entrada.local,
            'mercadoria_id': entrada.mercadoria_id,
            'nome_mercadoria': mercadoria.nome,
            'estoque_disponivel': mercadoria.estoque_disponivel()
        })

    return jsonify(resultado)