from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object('app.config.Config')


    CORS(app)


    db.init_app(app)
    migrate.init_app(app, db)


    from app.routes.entrada_routes import bp as entrada_bp
    from app.routes.mercadoria_routes import bp as mercadoria_bp
    from app.routes.relatorio_routes import bp as relatorio_bp
    from app.routes.saida_routes import bp as saida_bp

    app.register_blueprint(entrada_bp)
    app.register_blueprint(mercadoria_bp)
    app.register_blueprint(relatorio_bp)
    app.register_blueprint(saida_bp)

    return app