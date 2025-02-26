from flask import Blueprint, request, jsonify
from app.models.mercadoria import Mercadoria
from app import db

bp = Blueprint('mercadoria', __name__)

@bp.route('/mercadorias-criar', methods=['POST'])
def criar_mercadoria():
    data = request.get_json()


    if not data or not all(key in data for key in ['nome', 'numero_registro', 'fabricante', 'tipo']):
        return jsonify({'message': 'Dados inválidos'}), 400


    nova_mercadoria = Mercadoria(
        nome=data['nome'],
        numero_registro=data['numero_registro'],
        fabricante=data['fabricante'],
        tipo=data['tipo'],
        descricao=data.get('descricao', '')
    )
    db.session.add(nova_mercadoria)
    db.session.commit()

    return jsonify({'message': 'Mercadoria criada com sucesso'}), 201

@bp.route('/mercadorias-listar', methods=['GET'])
def listar_mercadorias():
    mercadorias = Mercadoria.query.all()
    return jsonify([{
        'id': m.id,
        'nome': m.nome,
        'numero_registro': m.numero_registro,
        'fabricante': m.fabricante,
        'tipo': m.tipo,
        'descricao': m.descricao,
        'estoque_disponivel': m.estoque_disponivel()
    } for m in mercadorias])