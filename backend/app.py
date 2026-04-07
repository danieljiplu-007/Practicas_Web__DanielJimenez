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

@app.route("/")
def home():
    return "Backend funcionando"

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

if __name__ == "__main__":
    app.run()