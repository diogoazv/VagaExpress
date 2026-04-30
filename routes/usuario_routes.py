from flask import Blueprint, render_template, request, redirect, url_for  # importando ferramentas do flask para rotas e templates
from models.usuario import Usuario  # importando o modelo usuario do banco
from config import db  # importando o banco de dados

usuario_bp = Blueprint("usuario", __name__)  # criando um grupo de rotas chamado usuario

@usuario_bp.route("/")
def index():
    return render_template("criar_perfil.html")

# rota para criar perfil
@usuario_bp.route("/criar_perfil", methods=["GET", "POST"])
def criar_perfil():

    if request.method == "POST":  # se estiver enviando formulario
        print("Chegouuuu")

        nome = request.form.get("nome")  # pegando nome do formulario
        sobrenome = request.form.get("sobrenome")  # pegando sobrenome
        tipo = request.form.get("tipo")  # pegando tipo de usuario
        avatar = request.form.get("avatar")  # pegando imagem do usuario

        # verificando se campos obrigatorios foram preenchidos
        if not nome or not sobrenome or not tipo:
            return "Erro Preencha todos os campos"

        # criando novo usuario
        novo_usuario = Usuario(
            nome=nome,
            sobrenome=sobrenome,
            tipo=tipo,
            avatar=avatar
        )

        db.session.add(novo_usuario)  # adicionando no banco
        db.session.commit()  # salvando no banco

        return redirect(url_for("usuario.home"))   # redireciona para pagina home
    

    return render_template("criar_perfil.html")  # mostra formulario se for GET



# rota da pagina home
@usuario_bp.route("/home")
def home():
    usuario = Usuario.query.order_by(Usuario.id.desc()).first()
    return render_template("home.html", usuario=usuario)