from flask import Flask 
from config import db, DB_PATH  # pegando configuracao do banco de dados

app = Flask(__name__)  # criando a aplicacao flask

# configurando o caminho do banco de dados
app.config["SQLALCHEMY_DATABASE_URI"] = DB_PATH  # define onde o banco fica
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False  # desliga aviso desnecessario

db.init_app(app)  # conectando o banco com a aplicacao

# importando as rotas de usuario
from routes.usuario_routes import usuario_bp  # pega as rotas separadas
app.register_blueprint(usuario_bp)  # registra as rotas na aplicacao

# criando tabelas automaticamente quando iniciar
with app.app_context():  # entrando no contexto da aplicacao
    db.create_all()  # cria as tabelas se nao existirem

# rodando o servidor
if __name__ == "__main__":
    app.run(debug=True)  # liga o servidor em modo debug 