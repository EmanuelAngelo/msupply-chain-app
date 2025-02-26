from flask import Blueprint, jsonify, request
from sqlalchemy import func, extract
from datetime import datetime
from app import db

from ..models.entrada import Entrada
from ..models.saida import Saida

bp = Blueprint('relatorio', __name__)

@bp.route('/relatorio-mensal', methods=['GET'])
def relatorio_mensal():

    mes = request.args.get('mes', datetime.now().month, type=int)
    ano = request.args.get('ano', datetime.now().year, type=int)


    entradas = db.session.query(
        func.sum(Entrada.quantidade).label('total_entradas')
    ).filter(
        extract('month', Entrada.data_hora) == mes,
        extract('year', Entrada.data_hora) == ano
    ).scalar() or 0


    saidas = db.session.query(
        func.sum(Saida.quantidade).label('total_saidas')
    ).filter(
        extract('month', Saida.data_hora) == mes,
        extract('year', Saida.data_hora) == ano
    ).scalar() or 0

    return jsonify({
        'mes': mes,
        'ano': ano,
        'total_entradas': entradas,
        'total_saidas': saidas,
        'estoque_final': entradas - saidas
    })