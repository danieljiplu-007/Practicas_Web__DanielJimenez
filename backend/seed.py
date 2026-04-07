from pymongo import MongoClient

client = MongoClient("mongodb+srv://elchinaloense:admin12345@cluster0.wijua8t.mongodb.net/")

db = client["chinaloenseDB"]
coleccion = db["platillos"]

coleccion.delete_many({})

productos = [

# ESPECIALIDADES
{"nombre":"Hamburguesa de Camarón","descripcion":"Hamburguesa de camarón con queso y ensalada fresca acompañada con papas a la francesa","precio":110,"imagen":"https://via.placeholder.com/300","categoria":"Especialidades","ingredientes":["Camarón","Queso","Ensalada","Pan"],"extras":[]},

{"nombre":"Especial Chinaloense","descripcion":"Aguachile de camarón cocido, camarón crudo, pulpo, pepino, cebolla morada con salsa de chiltepín y balas de plata","precio":276,"imagen":"https://via.placeholder.com/300","categoria":"Especialidades","ingredientes":["Camarón cocido","Camarón crudo","Pulpo","Pepino","Cebolla morada"],"extras":[]},

{"nombre":"Chicharrón de Atún","descripcion":"Atún rebosado montado sobre un guacamole con pico de gallo","precio":268,"imagen":"https://via.placeholder.com/300","categoria":"Especialidades","ingredientes":["Atún","Guacamole","Pico de gallo"],"extras":[]},

{"nombre":"Bala de Plata","descripcion":"Shot con pepino, ostión, limón con salsa de chiltepín","precio":35,"imagen":"https://via.placeholder.com/300","categoria":"Especialidades","ingredientes":["Pepino","Ostión","Limón"],"extras":[]},

{"nombre":"Sashimi de Atún","descripcion":"Atún crudo rebanado salseado al estilo baja","precio":186,"imagen":"https://via.placeholder.com/300","categoria":"Especialidades","ingredientes":["Atún"],"extras":[]},

{"nombre":"Torre de Mariscos","descripcion":"Ceviche de sierra, camarón cocido, camarón crudo, atún y pulpo con salsa de chiltepín","precio":228,"imagen":"https://via.placeholder.com/300","categoria":"Especialidades","ingredientes":["Ceviche","Camarón","Atún","Pulpo"],"extras":[]},

{"nombre":"Malibú","descripcion":"Aguachile de camarón cocido, camarón crudo, atún crudo, cebolla, pepino y mango con salsa de chiltepín","precio":256,"imagen":"https://via.placeholder.com/300","categoria":"Especialidades","ingredientes":["Camarón","Atún","Pepino","Cebolla","Mango"],"extras":[]},

{"nombre":"Toritos de Camarón","descripcion":"Chile caribe relleno de camarón frito y salseado","precio":178,"imagen":"https://via.placeholder.com/300","categoria":"Especialidades","ingredientes":["Chile caribe","Camarón"],"extras":[]},

# SOPAS
{"nombre":"Sopa de Camarón","descripcion":"Camarón, tomate, cebolla, zanahoria y caldo de camarón con chiltepín","precio":184,"imagen":"https://via.placeholder.com/300","categoria":"Sopas","ingredientes":["Camarón","Tomate","Cebolla","Zanahoria"],"extras":[]},

{"nombre":"Sopa de Mariscos","descripcion":"Camarón, filete de dorado, pulpo, ostión, tomate, cebolla, zanahoria y caldo de camarón","precio":194,"imagen":"https://via.placeholder.com/300","categoria":"Sopas","ingredientes":["Camarón","Filete","Pulpo","Ostión"],"extras":[]},

{"nombre":"Sopa de Filete","descripcion":"Filete de dorado con tomate, cebolla, zanahoria y caldo de camarón","precio":184,"imagen":"https://via.placeholder.com/300","categoria":"Sopas","ingredientes":["Filete","Tomate","Cebolla"],"extras":[]},

# AGUACHILES
{"nombre":"Aguachile Negro de Camarón (Orden)","descripcion":"Camarón crudo con pepino, cebolla morada y salsa de chiltepín","precio":198,"imagen":"https://via.placeholder.com/300","categoria":"Aguachiles","ingredientes":["Camarón","Pepino","Cebolla"],"extras":[]},

{"nombre":"Aguachile Negro de Camarón (Tostada)","descripcion":"Camarón crudo con pepino, cebolla morada y salsa de chiltepín","precio":109,"imagen":"https://via.placeholder.com/300","categoria":"Aguachiles","ingredientes":["Camarón","Pepino","Cebolla"],"extras":[]},

{"nombre":"Aguachile Negro Camarón y Pulpo (Orden)","descripcion":"Camarón crudo, pulpo, pepino y cebolla morada con salsa de chiltepín","precio":236,"imagen":"https://via.placeholder.com/300","categoria":"Aguachiles","ingredientes":["Camarón","Pulpo","Pepino"],"extras":[]},

{"nombre":"Aguachile Negro Camarón y Pulpo (Tostada)","descripcion":"Camarón crudo, pulpo, pepino y cebolla morada con salsa de chiltepín","precio":128,"imagen":"https://via.placeholder.com/300","categoria":"Aguachiles","ingredientes":["Camarón","Pulpo","Pepino"],"extras":[]},

{"nombre":"Aguachile Negro de Mariscos","descripcion":"Camarón crudo, camarón cocido, pulpo y ostión con pepino y cebolla morada","precio":284,"imagen":"https://via.placeholder.com/300","categoria":"Aguachiles","ingredientes":["Camarón","Pulpo","Ostión"],"extras":[]},

# COCTELES
{"nombre":"Cóctel de Camarón (Mediano)","descripcion":"Camarón cocido con pepino, tomate, cebolla morada y salsa de chiltepín","precio":164,"imagen":"https://via.placeholder.com/300","categoria":"Cócteles","ingredientes":["Camarón","Pepino","Tomate"],"extras":[]},

{"nombre":"Cóctel de Camarón (Grande)","descripcion":"Camarón cocido con pepino, tomate, cebolla morada y salsa de chiltepín","precio":178,"imagen":"https://via.placeholder.com/300","categoria":"Cócteles","ingredientes":["Camarón","Pepino","Tomate"],"extras":[]},

{"nombre":"Cóctel Camarón y Pulpo (Mediano)","descripcion":"Camarón cocido y pulpo con pepino, tomate y cebolla morada","precio":178,"imagen":"https://via.placeholder.com/300","categoria":"Cócteles","ingredientes":["Camarón","Pulpo","Pepino"],"extras":[]},

{"nombre":"Cóctel Camarón y Pulpo (Grande)","descripcion":"Camarón cocido y pulpo con pepino, tomate y cebolla morada","precio":198,"imagen":"https://via.placeholder.com/300","categoria":"Cócteles","ingredientes":["Camarón","Pulpo","Pepino"],"extras":[]},

{"nombre":"Vuelve a la Vida (Mediano)","descripcion":"Camarón, pulpo y ostión con pepino, tomate y cebolla","precio":174,"imagen":"https://via.placeholder.com/300","categoria":"Cócteles","ingredientes":["Camarón","Pulpo","Ostión"],"extras":[]},

{"nombre":"Vuelve a la Vida (Grande)","descripcion":"Camarón, pulpo y ostión con pepino, tomate y cebolla","precio":188,"imagen":"https://via.placeholder.com/300","categoria":"Cócteles","ingredientes":["Camarón","Pulpo","Ostión"],"extras":[]},

# PESCADO
{"nombre":"Filete Empanizado","descripcion":"Filete de dorado empanizado","precio":179,"imagen":"https://via.placeholder.com/300","categoria":"Pescado al gusto","ingredientes":["Filete"],"extras":[]},

{"nombre":"Filete al Mojo de Ajo","descripcion":"Filete con ajo","precio":179,"imagen":"https://via.placeholder.com/300","categoria":"Pescado al gusto","ingredientes":["Filete","Ajo"],"extras":[]},

{"nombre":"Filete a la Plancha","descripcion":"Filete a la plancha","precio":179,"imagen":"https://via.placeholder.com/300","categoria":"Pescado al gusto","ingredientes":["Filete"],"extras":[]},

{"nombre":"Filete Zarandeado","descripcion":"Filete zarandeado","precio":194,"imagen":"https://via.placeholder.com/300","categoria":"Pescado al gusto","ingredientes":["Filete","Cebolla"],"extras":[]},

# CEVICHES
{"nombre":"Ceviche de Camarón (Orden)","descripcion":"Camarón con pepino y tomate","precio":184,"imagen":"https://via.placeholder.com/300","categoria":"Ceviches","ingredientes":["Camarón"],"extras":[]},

{"nombre":"Ceviche de Camarón (Tostada)","descripcion":"Camarón con pepino y tomate","precio":94,"imagen":"https://via.placeholder.com/300","categoria":"Ceviches","ingredientes":["Camarón"],"extras":[]},

{"nombre":"Ceviche de Pescado (Orden)","descripcion":"Pescado con verduras","precio":184,"imagen":"https://via.placeholder.com/300","categoria":"Ceviches","ingredientes":["Pescado"],"extras":[]},

{"nombre":"Ceviche de Pescado (Tostada)","descripcion":"Pescado con verduras","precio":94,"imagen":"https://via.placeholder.com/300","categoria":"Ceviches","ingredientes":["Pescado"],"extras":[]},

{"nombre":"Ceviche de Pulpo (Orden)","descripcion":"Pulpo con verduras","precio":216,"imagen":"https://via.placeholder.com/300","categoria":"Ceviches","ingredientes":["Pulpo"],"extras":[]},

{"nombre":"Ceviche de Pulpo (Tostada)","descripcion":"Pulpo con verduras","precio":108,"imagen":"https://via.placeholder.com/300","categoria":"Ceviches","ingredientes":["Pulpo"],"extras":[]},

{"nombre":"Ceviche Mitotero (Orden)","descripcion":"Mixto de mariscos","precio":194,"imagen":"https://via.placeholder.com/300","categoria":"Ceviches","ingredientes":["Camarón","Pulpo"],"extras":[]},

{"nombre":"Ceviche Mitotero (Tostada)","descripcion":"Mixto de mariscos","precio":98,"imagen":"https://via.placeholder.com/300","categoria":"Ceviches","ingredientes":["Camarón","Pulpo"],"extras":[]},

# TACOS
{"nombre":"Taco de Asada de Res","descripcion":"Carne asada","precio":52,"imagen":"https://via.placeholder.com/300","categoria":"Tacos","ingredientes":["Carne"],"extras":[]},

{"nombre":"Capeado de Camarón (Taco)","descripcion":"Camarón capeado","precio":52,"imagen":"https://via.placeholder.com/300","categoria":"Tacos","ingredientes":["Camarón"],"extras":[]},

{"nombre":"Capeado de Camarón (Orden)","descripcion":"Camarón capeado","precio":168,"imagen":"https://via.placeholder.com/300","categoria":"Tacos","ingredientes":["Camarón"],"extras":[]},

{"nombre":"Capeado de Pescado (Taco)","descripcion":"Pescado capeado","precio":52,"imagen":"https://via.placeholder.com/300","categoria":"Tacos","ingredientes":["Pescado"],"extras":[]},

{"nombre":"Capeado de Pescado (Orden)","descripcion":"Pescado capeado","precio":168,"imagen":"https://via.placeholder.com/300","categoria":"Tacos","ingredientes":["Pescado"],"extras":[]},

{"nombre":"Gobernador (Taco)","descripcion":"Camarón con queso","precio":58,"imagen":"https://via.placeholder.com/300","categoria":"Tacos","ingredientes":["Camarón","Queso"],"extras":[{"nombre":"Queso extra","precio":15}]},

{"nombre":"Gobernador (Orden)","descripcion":"Camarón con queso","precio":188,"imagen":"https://via.placeholder.com/300","categoria":"Tacos","ingredientes":["Camarón","Queso"],"extras":[{"nombre":"Queso extra","precio":25}]},

{"nombre":"Marlin (Taco)","descripcion":"Marlin con verduras","precio":58,"imagen":"https://via.placeholder.com/300","categoria":"Tacos","ingredientes":["Marlin"],"extras":[]},

{"nombre":"Marlin (Orden)","descripcion":"Marlin con verduras","precio":188,"imagen":"https://via.placeholder.com/300","categoria":"Tacos","ingredientes":["Marlin"],"extras":[]},

# CAMARONES
{"nombre":"Camarones Empanizados","descripcion":"Camarones empanizados","precio":208,"imagen":"https://via.placeholder.com/300","categoria":"Camarones al gusto","ingredientes":["Camarón"],"extras":[]},

{"nombre":"Camarones al Mojo de Ajo","descripcion":"Camarones con ajo","precio":208,"imagen":"https://via.placeholder.com/300","categoria":"Camarones al gusto","ingredientes":["Camarón","Ajo"],"extras":[]},

{"nombre":"Camarón al Coco","descripcion":"Camarón con coco","precio":208,"imagen":"https://via.placeholder.com/300","categoria":"Camarones al gusto","ingredientes":["Camarón","Coco"],"extras":[]},

{"nombre":"Camarones Zarandeados","descripcion":"Camarones zarandeados","precio":223,"imagen":"https://via.placeholder.com/300","categoria":"Camarones al gusto","ingredientes":["Camarón"],"extras":[]},

# BEBIDAS
{"nombre":"Refresco","descripcion":"Selecciona tu refresco","precio":30,"imagen":"https://via.placeholder.com/300","categoria":"Bebidas","ingredientes":[],"extras":[{"nombre":"Coca-Cola","precio":0},{"nombre":"Fanta","precio":0}]},

{"nombre":"Limonada","descripcion":"Limonada","precio":35,"imagen":"https://via.placeholder.com/300","categoria":"Bebidas","ingredientes":["Limón"],"extras":[{"nombre":"Natural","precio":0}]},

{"nombre":"Naranjada","descripcion":"Naranjada","precio":35,"imagen":"https://via.placeholder.com/300","categoria":"Bebidas","ingredientes":["Naranja"],"extras":[{"nombre":"Natural","precio":0}]},

{"nombre":"Agua Fresca de Temporada","descripcion":"Agua fresca del día","precio":55,"imagen":"https://via.placeholder.com/300","categoria":"Bebidas","ingredientes":[],"extras":[]}

]

coleccion.insert_many(productos)

print("🔥 MENÚ COMPLETO CARGADO 🔥")