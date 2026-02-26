from pymongo import MongoClient
from bson.objectid import ObjectId
from bson.errors import InvalidId

client = MongoClient("mongodb://localhost:27017/")

db = client["videojuegos_db"]
collection = db["games"]

def get_all_games():
    games = list(collection.find())
    for game in games:
        game["_id"] = str(game["_id"])
    return games

def create_game(data):
    result = collection.insert_one(data)
    return str(result.inserted_id)

def delete_game(id):
    return collection.delete_one({"_id": ObjectId(id)})

def update_game(id, data):
    try:
        result = collection.update_one(
            {"_id": ObjectId(id)},
            {"$set": {
                "nombre": data["nombre"],
                "genero": data["genero"],
                "precio": data["precio"],
                "imagenUrl": data["imagenUrl"]
            }}
        )

        if result.modified_count == 1:
            return {"message": "Juego actualizado correctamente"}
        else:
            return {"message": "No se realizaron cambios"}

    except InvalidId:
        return {"error": "ID inválido"}