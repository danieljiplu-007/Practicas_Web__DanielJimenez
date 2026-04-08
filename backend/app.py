from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from bson import ObjectId
import os

app = Flask(__name__)
CORS(app)

client = MongoClient(os.environ.get("MONGO_URI"))

db = client["chinaloenseDB"]
collection = db["platillos"]
collection_pedidos = db["pedidos"]
collection_usuarios = db["usuarios"]

@app.route("/")
def home():
    return "Backend funcionando"


# =========================
# PLATILLOS
# =========================

@app.route("/platillos", methods=["GET"])
def obtener_platillos():
    try:
        lista = []
        for item in collection.find():
            item["_id"] = str(item["_id"])
            lista.append(item)
        return jsonify(lista), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/platillos", methods=["POST"])
def agregar_platillo():
    try:
        data = request.get_json()

        if not data:
            return jsonify({"error": "Datos vacíos"}), 400

        data.pop("_id", None)
        data.pop("id", None)

        result = collection.insert_one(data)

        return jsonify({
            "mensaje": "Platillo agregado",
            "id": str(result.inserted_id)
        }), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/platillos/<id>", methods=["PUT"])
def actualizar_platillo(id):
    try:
        data = request.get_json()

        if not data:
            return jsonify({"error": "Datos vacíos"}), 400

        data.pop("_id", None)
        data.pop("id", None)

        collection.update_one(
            {"_id": ObjectId(id)},
            {"$set": data}
        )

        return jsonify({"mensaje": "Platillo actualizado"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/platillos/<id>", methods=["DELETE"])
def eliminar_platillo(id):
    try:
        collection.delete_one({"_id": ObjectId(id)})
        return jsonify({"mensaje": "Platillo eliminado"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400


# =========================
# PEDIDOS
# =========================

@app.route("/pedidos", methods=["POST"])
def crear_pedido():
    try:
        data = request.get_json()

        if not data:
            return jsonify({"error": "Datos vacíos"}), 400

        result = collection_pedidos.insert_one(data)

        return jsonify({
            "mensaje": "Pedido guardado",
            "id": str(result.inserted_id)
        }), 201

    except Exception as e:
        print("ERROR PEDIDO:", e)
        return jsonify({"error": str(e)}), 500


@app.route("/pedidos", methods=["GET"])
def obtener_pedidos():
    try:
        lista = []

        for item in collection_pedidos.find():
            item["_id"] = str(item["_id"])
            lista.append(item)

        return jsonify(lista), 200

    except Exception as e:
        print("ERROR GET PEDIDOS:", e)
        return jsonify({"error": str(e)}), 500


@app.route("/pedidos/<id>", methods=["PUT"])
def actualizar_estado_pedido(id):
    try:
        data = request.get_json()

        if not data or "estado" not in data:
            return jsonify({"error": "Estado requerido"}), 400

        resultado = collection_pedidos.update_one(
            {"_id": ObjectId(id)},
            {"$set": {"estado": data["estado"]}}
        )

        if resultado.matched_count == 0:
            return jsonify({"error": "Pedido no encontrado"}), 404

        return jsonify({"mensaje": "Estado actualizado"}), 200

    except Exception as e:
        print("ERROR PUT PEDIDO:", e)
        return jsonify({"error": str(e)}), 500


# =========================
# USUARIOS (LOGIN / REGISTRO)
# =========================

@app.route("/registro", methods=["POST"])
def registro():
    try:
        data = request.get_json()

        if not data:
            return jsonify({"error": "Datos vacíos"}), 400

        usuario_existente = collection_usuarios.find_one({
            "correo": data.get("correo")
        })

        if usuario_existente:
            return jsonify({"error": "El usuario ya existe"}), 400

        collection_usuarios.insert_one(data)

        return jsonify({"mensaje": "Usuario registrado"}), 201

    except Exception as e:
        print("ERROR REGISTRO:", e)
        return jsonify({"error": str(e)}), 500


@app.route("/login", methods=["POST"])
def login():
    try:
        data = request.get_json()

        usuario = collection_usuarios.find_one({
            "correo": data.get("correo"),
            "password": data.get("password")
        })

        if not usuario:
            return jsonify({"error": "Credenciales incorrectas"}), 401

        usuario["_id"] = str(usuario["_id"])

        return jsonify({
            "mensaje": "Login exitoso",
            "usuario": usuario
        }), 200

    except Exception as e:
        print("ERROR LOGIN:", e)
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run()