import os  # importando para trabalhar com caminhos do sistema
from flask_sqlalchemy import SQLAlchemy  # importando o sqlalchemy para o banco de dados

db = SQLAlchemy()  # criando o objeto que gerencia o banco de dados que vai ser usado no projeto

# pegando o caminho da pasta atual do projeto
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# montando o caminho do banco dentro da pasta database
DB_PATH = "sqlite:///" + os.path.join(BASE_DIR, "database/database.db")