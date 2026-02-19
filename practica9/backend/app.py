from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

# Conexión a MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client["escuela"]          
coleccion = db["alumnos"]       

# Ruta por defecto
@app.route('/')
def inicio():
    return "API UPP funcionando correctamente"

# Ruta GET - obtener alumnos
@app.route('/alumnos', methods=['GET'])
def obtener_alumnos():
    alumnos = list(coleccion.find({}, {"_id": 0}))  # Ocultamos el _id
    return jsonify(alumnos)

# Ruta POST - insertar alumno
@app.route('/alumnos', methods=['POST'])
def insertar_alumno():
    datos = request.json
    coleccion.insert_one(datos)
    return jsonify({"mensaje": "Alumno insertado correctamente"})

if __name__ == '__main__':
    app.run(debug=True)
