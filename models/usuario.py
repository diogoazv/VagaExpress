from config import db  # importando o banco de dados configurado

# criando a tabela usuario no banco
class Usuario(db.Model):
    id = db.Column(db.Integer, primary_key=True)  # id unico do usuario
    nome = db.Column(db.String(100), nullable=False)  # nome obrigatorio
    sobrenome = db.Column(db.String(100), nullable=False)  # sobrenome obrigatorio
    tipo = db.Column(db.String(50), nullable=False)  # tipo do usuario
    avatar = db.Column(db.String(200))  # link da imagem do usuario