from app import db

class Mercadoria(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    numero_registro = db.Column(db.String(50), unique=True, nullable=False)
    fabricante = db.Column(db.String(100), nullable=False)
    tipo = db.Column(db.String(50), nullable=False)
    descricao = db.Column(db.Text, nullable=True)

    # Relacionamentos
    entradas = db.relationship('Entrada', backref='mercadoria', lazy=True)
    saidas = db.relationship('Saida', backref='mercadoria', lazy=True)

    def estoque_disponivel(self):
        total_entradas = sum(entrada.quantidade for entrada in self.entradas)
        total_saidas = sum(saida.quantidade for saida in self.saidas)
        return total_entradas - total_saidas