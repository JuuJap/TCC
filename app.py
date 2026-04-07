from flask import Flask, jsonify
from conexao import conectar

app = Flask(__name__)

# 🔹 ROTA TESTE
@app.route("/")
def home():
    return "API funcionando!"

# 🔹 ROTA GET (listar usuários)
@app.route("/usuarios")
def listar_usuarios():
    conexao = conectar()
    cursor = conexao.cursor()

    cursor.execute("SELECT * FROM user")
    dados = cursor.fetchall()

    usuarios = []
    for u in dados:
        usuarios.append({
            "id": u[0],
            "email": u[1],
            "senha": u[2]
        })

    return jsonify(usuarios)


if __name__ == "__main__":
    print("Iniciando servidor...")
    app.run(debug=True)