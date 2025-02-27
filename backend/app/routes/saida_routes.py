from flask import Blueprint, request, jsonify
from app.models.saida import Saida
from app.models.mercadoria import Mercadoria
from app import db
from datetime import datetime

bp = Blueprint('saida', __name__)

@bp.route('/saidas-criar', methods=['POST'])
def criar_saida():
    data = request.get_json()


    if not data or not all(key in data for key in ['quantidade', 'data_hora', 'local', 'mercadoria_id']):
        return jsonify({'message': 'Dados inválidos'}), 400


    mercadoria = Mercadoria.query.get(data['mercadoria_id'])
    if not mercadoria:
        return jsonify({'message': 'Mercadoria não encontrada'}), 404


    estoque_disponivel = mercadoria.estoque_disponivel()
    if data['quantidade'] > estoque_disponivel:
        return jsonify({'message': 'Quantidade de saída maior que o estoque disponível'}), 400


    nova_saida = Saida(
        quantidade=data['quantidade'],
        data_hora=datetime.strptime(data['data_hora'], '%Y-%m-%d %H:%M:%S'),
        local=data['local'],
        mercadoria_id=data['mercadoria_id']
    )
    db.session.add(nova_saida)
    db.session.commit()

    return jsonify({'message': 'Saída criada com sucesso'}), 201

@bp.route('/saidas-listar', methods=['GET'])
def listar_saidas():
    saidas = db.session.query(Saida, Mercadoria)\
                       .join(Mercadoria, Saida.mercadoria_id == Mercadoria.id)\
                       .all()

    resultado = []
    for saida, mercadoria in saidas:
        resultado.append({
            'id': saida.id,
            'quantidade': saida.quantidade,
            'data_hora': saida.data_hora.isoformat(),
            'local': saida.local,
            'mercadoria_id': saida.mercadoria_id,
            'nome_mercadoria': mercadoria.nome,
            'estoque_disponivel': mercadoria.estoque_disponivel()
        })

    return jsonify(resultado)