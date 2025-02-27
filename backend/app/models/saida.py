from app import db

class Saida(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    quantidade = db.Column(db.Integer, nullable=False)
    data_hora = db.Column(db.DateTime, nullable=False)
    local = db.Column(db.String(100), nullable=False)
    mercadoria_id = db.Column(db.Integer, db.ForeignKey('mercadoria.id'), nullable=False)