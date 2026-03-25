import { Injectable } from '@angular/core'
import { Producto } from '../models/producto'

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  productos: Producto[] = []

  constructor(){

    const data = localStorage.getItem('productos')

    if(data){

      this.productos = JSON.parse(data)

    }else{

      this.productos = [

{
id:1,
nombre:'Hamburguesa de Camarón',
descripcion:'Hamburguesa de camarón con queso y ensalada fresca acompañada con papas a la francesa',
precio:110,
imagen:'assets/menu/placeholder.jpg',
categoria:'Especialidades',
ingredientes:['Camarón','Queso','Ensalada','Pan'],
extras:[]
},

{
id:2,
nombre:'Especial Chinaloense',
descripcion:'Aguachile de camarón cocido, camarón crudo, pulpo, pepino, cebolla morada con salsa de chiltepín y balas de plata',
precio:276,
imagen:'assets/menu/placeholder.jpg',
categoria:'Especialidades',
ingredientes:['Camarón cocido','Camarón crudo','Pulpo','Pepino','Cebolla morada'],
extras:[]
},

{
id:3,
nombre:'Chicharrón de Atún',
descripcion:'Atún rebosado montado sobre un guacamole con pico de gallo',
precio:268,
imagen:'assets/menu/placeholder.jpg',
categoria:'Especialidades',
ingredientes:['Atún','Guacamole','Pico de gallo'],
extras:[]
},

{
id:4,
nombre:'Bala de Plata',
descripcion:'Shot con pepino, ostión, limón con salsa de chiltepín',
precio:35,
imagen:'assets/menu/placeholder.jpg',
categoria:'Especialidades',
ingredientes:['Pepino','Ostión','Limón'],
extras:[]
},

{
id:5,
nombre:'Sashimi de Atún',
descripcion:'Atún crudo rebanado salseado al estilo baja',
precio:186,
imagen:'assets/menu/placeholder.jpg',
categoria:'Especialidades',
ingredientes:['Atún'],
extras:[]
},

{
id:6,
nombre:'Torre de Mariscos',
descripcion:'Ceviche de sierra, camarón cocido, camarón crudo, atún y pulpo con salsa de chiltepín',
precio:228,
imagen:'assets/menu/placeholder.jpg',
categoria:'Especialidades',
ingredientes:['Ceviche','Camarón','Atún','Pulpo'],
extras:[]
},

{
id:7,
nombre:'Malibú',
descripcion:'Aguachile de camarón cocido, camarón crudo, atún crudo, cebolla, pepino y mango con salsa de chiltepín',
precio:256,
imagen:'assets/menu/placeholder.jpg',
categoria:'Especialidades',
ingredientes:['Camarón','Atún','Pepino','Cebolla','Mango'],
extras:[]
},

{
id:8,
nombre:'Toritos de Camarón',
descripcion:'Chile caribe relleno de camarón frito y salseado',
precio:178,
imagen:'assets/menu/placeholder.jpg',
categoria:'Especialidades',
ingredientes:['Chile caribe','Camarón'],
extras:[]
},

{
id:9,
nombre:'Sopa de Camarón',
descripcion:'Camarón, tomate, cebolla, zanahoria y caldo de camarón con chiltepín',
precio:184,
imagen:'assets/menu/placeholder.jpg',
categoria:'Sopas',
ingredientes:['Camarón','Tomate','Cebolla','Zanahoria'],
extras:[]
},

{
id:10,
nombre:'Sopa de Mariscos',
descripcion:'Camarón, filete de dorado, pulpo, ostión, tomate, cebolla, zanahoria y caldo de camarón',
precio:194,
imagen:'assets/menu/placeholder.jpg',
categoria:'Sopas',
ingredientes:['Camarón','Filete','Pulpo','Ostión'],
extras:[]
},

{
id:11,
nombre:'Sopa de Filete',
descripcion:'Filete de dorado con tomate, cebolla, zanahoria y caldo de camarón',
precio:184,
imagen:'assets/menu/placeholder.jpg',
categoria:'Sopas',
ingredientes:['Filete','Tomate','Cebolla'],
extras:[]
},

{
id:12,
nombre:'Aguachile Negro de Camarón (Orden)',
descripcion:'Camarón crudo con pepino, cebolla morada y salsa de chiltepín',
precio:198,
imagen:'assets/menu/placeholder.jpg',
categoria:'Aguachiles',
ingredientes:['Camarón','Pepino','Cebolla'],
extras:[]
},

{
id:13,
nombre:'Aguachile Negro de Camarón (Tostada)',
descripcion:'Camarón crudo con pepino, cebolla morada y salsa de chiltepín',
precio:109,
imagen:'assets/menu/placeholder.jpg',
categoria:'Aguachiles',
ingredientes:['Camarón','Pepino','Cebolla'],
extras:[]
},

{
id:14,
nombre:'Aguachile Negro Camarón y Pulpo (Orden)',
descripcion:'Camarón crudo, pulpo, pepino y cebolla morada con salsa de chiltepín',
precio:236,
imagen:'assets/menu/placeholder.jpg',
categoria:'Aguachiles',
ingredientes:['Camarón','Pulpo','Pepino'],
extras:[]
},

{
id:15,
nombre:'Aguachile Negro Camarón y Pulpo (Tostada)',
descripcion:'Camarón crudo, pulpo, pepino y cebolla morada con salsa de chiltepín',
precio:128,
imagen:'assets/menu/placeholder.jpg',
categoria:'Aguachiles',
ingredientes:['Camarón','Pulpo','Pepino'],
extras:[]
},

{
id:16,
nombre:'Aguachile Negro de Mariscos',
descripcion:'Camarón crudo, camarón cocido, pulpo y ostión con pepino y cebolla morada',
precio:284,
imagen:'assets/menu/placeholder.jpg',
categoria:'Aguachiles',
ingredientes:['Camarón','Pulpo','Ostión'],
extras:[]
},

{
id:17,
nombre:'Cóctel de Camarón (Mediano)',
descripcion:'Camarón cocido con pepino, tomate, cebolla morada y salsa de chiltepín',
precio:164,
imagen:'assets/menu/placeholder.jpg',
categoria:'Cócteles',
ingredientes:['Camarón','Pepino','Tomate'],
extras:[]
},

{
id:18,
nombre:'Cóctel de Camarón (Grande)',
descripcion:'Camarón cocido con pepino, tomate, cebolla morada y salsa de chiltepín',
precio:178,
imagen:'assets/menu/placeholder.jpg',
categoria:'Cócteles',
ingredientes:['Camarón','Pepino','Tomate'],
extras:[]
},

{
id:19,
nombre:'Cóctel Camarón y Pulpo (Mediano)',
descripcion:'Camarón cocido y pulpo con pepino, tomate y cebolla morada',
precio:178,
imagen:'assets/menu/placeholder.jpg',
categoria:'Cócteles',
ingredientes:['Camarón','Pulpo','Pepino'],
extras:[]
},

{
id:20,
nombre:'Cóctel Camarón y Pulpo (Grande)',
descripcion:'Camarón cocido y pulpo con pepino, tomate y cebolla morada',
precio:198,
imagen:'assets/menu/placeholder.jpg',
categoria:'Cócteles',
ingredientes:['Camarón','Pulpo','Pepino'],
extras:[]
},

{
id:21,
nombre:'Vuelve a la Vida (Mediano)',
descripcion:'Camarón, pulpo y ostión con pepino, tomate y cebolla',
precio:174,
imagen:'assets/menu/placeholder.jpg',
categoria:'Cócteles',
ingredientes:['Camarón','Pulpo','Ostión'],
extras:[]
},

{
id:22,
nombre:'Vuelve a la Vida (Grande)',
descripcion:'Camarón, pulpo y ostión con pepino, tomate y cebolla',
precio:188,
imagen:'assets/menu/placeholder.jpg',
categoria:'Cócteles',
ingredientes:['Camarón','Pulpo','Ostión'],
extras:[]
},

{
id:23,
nombre:'Filete Empanizado',
descripcion:'Filete de dorado (mahi mahi) empanizado al estilo japonés',
precio:179,
imagen:'assets/menu/placeholder.jpg',
categoria:'Pescado al gusto',
ingredientes:['Filete de dorado'],
extras:[]
},

{
id:24,
nombre:'Filete al Mojo de Ajo',
descripcion:'Filete de dorado (mahi mahi) en aceites de ajo y especias',
precio:179,
imagen:'assets/menu/placeholder.jpg',
categoria:'Pescado al gusto',
ingredientes:['Filete de dorado','Ajo'],
extras:[]
},

{
id:25,
nombre:'Filete a la Plancha',
descripcion:'Filete de dorado (mahi mahi) cocinado a la plancha',
precio:179,
imagen:'assets/menu/placeholder.jpg',
categoria:'Pescado al gusto',
ingredientes:['Filete de dorado'],
extras:[]
},

{
id:26,
nombre:'Filete Zarandeado',
descripcion:'Filete de dorado (mahi mahi) zarandeado a la plancha con cebolla tatemada',
precio:194,
imagen:'assets/menu/placeholder.jpg',
categoria:'Pescado al gusto',
ingredientes:['Filete de dorado','Cebolla'],
extras:[]
},

{
id:27,
nombre:'Ceviche de Camarón (Orden)',
descripcion:'Camarón crudo con pepino, tomate, cebolla y salsa de chiltepín',
precio:184,
imagen:'assets/menu/placeholder.jpg',
categoria:'Ceviches',
ingredientes:['Camarón','Pepino','Tomate'],
extras:[]
},

{
id:28,
nombre:'Ceviche de Camarón (Tostada)',
descripcion:'Camarón crudo con pepino, tomate, cebolla y salsa de chiltepín',
precio:94,
imagen:'assets/menu/placeholder.jpg',
categoria:'Ceviches',
ingredientes:['Camarón','Pepino','Tomate'],
extras:[]
},

{
id:29,
nombre:'Ceviche de Pescado (Orden)',
descripcion:'Filete de dorado con pepino, tomate, cebolla y salsa de chiltepín',
precio:184,
imagen:'assets/menu/placeholder.jpg',
categoria:'Ceviches',
ingredientes:['Pescado','Pepino','Tomate'],
extras:[]
},

{
id:30,
nombre:'Ceviche de Pescado (Tostada)',
descripcion:'Filete de dorado con pepino, tomate, cebolla y salsa de chiltepín',
precio:94,
imagen:'assets/menu/placeholder.jpg',
categoria:'Ceviches',
ingredientes:['Pescado','Pepino','Tomate'],
extras:[]
},

{
id:31,
nombre:'Ceviche de Pulpo (Orden)',
descripcion:'Pulpo con pepino, tomate, cebolla y salsa de chiltepín',
precio:216,
imagen:'assets/menu/placeholder.jpg',
categoria:'Ceviches',
ingredientes:['Pulpo','Pepino','Tomate'],
extras:[]
},

{
id:32,
nombre:'Ceviche de Pulpo (Tostada)',
descripcion:'Pulpo con pepino, tomate, cebolla y salsa de chiltepín',
precio:108,
imagen:'assets/menu/placeholder.jpg',
categoria:'Ceviches',
ingredientes:['Pulpo','Pepino','Tomate'],
extras:[]
},

{
id:33,
nombre:'Ceviche Mitotero (Orden)',
descripcion:'Camarón crudo, camarón cocido y pulpo con pepino, tomate y cebolla',
precio:194,
imagen:'assets/menu/placeholder.jpg',
categoria:'Ceviches',
ingredientes:['Camarón','Pulpo','Pepino'],
extras:[]
},

{
id:34,
nombre:'Ceviche Mitotero (Tostada)',
descripcion:'Camarón crudo, camarón cocido y pulpo con pepino, tomate y cebolla',
precio:98,
imagen:'assets/menu/placeholder.jpg',
categoria:'Ceviches',
ingredientes:['Camarón','Pulpo','Pepino'],
extras:[]
},

{
id:35,
nombre:'Taco de Asada de Res',
descripcion:'Taco de carne asada de res al carbón',
precio:52,
imagen:'assets/menu/placeholder.jpg',
categoria:'Tacos',
ingredientes:['Carne asada','Tortilla'],
extras:[]
},

{
id:36,
nombre:'Capeado de Camarón (Taco)',
descripcion:'Camarón capeado con ensalada de col y zanahoria',
precio:52,
imagen:'assets/menu/placeholder.jpg',
categoria:'Tacos',
ingredientes:['Camarón','Col','Zanahoria'],
extras:[]
},

{
id:37,
nombre:'Capeado de Camarón (Orden)',
descripcion:'Camarón capeado con ensalada de col y zanahoria',
precio:168,
imagen:'assets/menu/placeholder.jpg',
categoria:'Tacos',
ingredientes:['Camarón','Col','Zanahoria'],
extras:[]
},

{
id:38,
nombre:'Capeado de Pescado (Taco)',
descripcion:'Filete de pescado capeado con ensalada de col y zanahoria',
precio:52,
imagen:'assets/menu/placeholder.jpg',
categoria:'Tacos',
ingredientes:['Pescado','Col','Zanahoria'],
extras:[]
},

{
id:39,
nombre:'Capeado de Pescado (Orden)',
descripcion:'Filete de pescado capeado con ensalada de col y zanahoria',
precio:168,
imagen:'assets/menu/placeholder.jpg',
categoria:'Tacos',
ingredientes:['Pescado','Col','Zanahoria'],
extras:[]
},

{
id:40,
nombre:'Gobernador (Taco)',
descripcion:'Camarones sazonados con queso acompañados con ensalada',
precio:58,
imagen:'assets/menu/placeholder.jpg',
categoria:'Tacos',
ingredientes:['Camarón','Queso'],
extras:[
 {nombre:'Queso extra',precio:15},
 {nombre:'Camarón extra',precio:30}
]
},

{
id:41,
nombre:'Gobernador (Orden)',
descripcion:'Camarones sazonados con queso acompañados con ensalada',
precio:188,
imagen:'assets/menu/placeholder.jpg',
categoria:'Tacos',
ingredientes:['Camarón','Queso'],
extras:[
 {nombre:'Queso extra',precio:25},
 {nombre:'Camarón extra',precio:45}
]
},

{
id:42,
nombre:'Marlin (Taco)',
descripcion:'Marlin con tomate, cebolla, cilantro, salsa de la casa y queso',
precio:58,
imagen:'assets/menu/placeholder.jpg',
categoria:'Tacos',
ingredientes:['Marlin','Tomate','Cebolla'],
extras:[]
},

{
id:43,
nombre:'Marlin (Orden)',
descripcion:'Marlin con tomate, cebolla, cilantro, salsa de la casa y queso',
precio:188,
imagen:'assets/menu/placeholder.jpg',
categoria:'Tacos',
ingredientes:['Marlin','Tomate','Cebolla'],
extras:[
]
},

{
id:44,
nombre:'Camarones Empanizados',
descripcion:'Camarones empanizados al estilo japonés',
precio:208,
imagen:'assets/menu/placeholder.jpg',
categoria:'Camarones al gusto',
ingredientes:['Camarón'],
extras:[]
},

{
id:45,
nombre:'Camarones al Mojo de Ajo',
descripcion:'Camarones guisados en aceites de ajo y especias',
precio:208,
imagen:'assets/menu/placeholder.jpg',
categoria:'Camarones al gusto',
ingredientes:['Camarón','Ajo'],
extras:[]
},

{
id:46,
nombre:'Camarón al Coco',
descripcion:'Camarones empanizados con coco sobre queso crema con salsa de mango habanero',
precio:208,
imagen:'assets/menu/placeholder.jpg',
categoria:'Camarones al gusto',
ingredientes:['Camarón','Coco'],
extras:[]
},

{
id:47,
nombre:'Camarones Zarandeados',
descripcion:'Camarones zarandeados a la plancha con cebolla tatemada',
precio:223,
imagen:'assets/menu/placeholder.jpg',
categoria:'Camarones al gusto',
ingredientes:['Camarón','Cebolla'],
extras:[]
},

{
id:48,
nombre:'Refresco',
descripcion:'Selecciona tu refresco',
precio:30,
imagen:'assets/menu/placeholder.jpg',
categoria:'Bebidas',
ingredientes:[],
extras:[
 {nombre:'Coca-Cola',precio:0},
 {nombre:'Manzanita',precio:0},
 {nombre:'Fanta',precio:0},
 {nombre:'Sprite',precio:0},
 {nombre:'Fresca',precio:0}
]
},

{
id:49,
nombre:'Limonada',
descripcion:'Selecciona tipo de limonada',
precio:35,
imagen:'assets/menu/placeholder.jpg',
categoria:'Bebidas',
ingredientes:['Limón'],
extras:[
 {nombre:'Natural',precio:0},
 {nombre:'Mineral',precio:0}
]
},

{
id:50,
nombre:'Naranjada',
descripcion:'Selecciona tipo de naranjada',
precio:35,
imagen:'assets/menu/placeholder.jpg',
categoria:'Bebidas',
ingredientes:['Naranja'],
extras:[
 {nombre:'Natural',precio:0},
 {nombre:'Mineral',precio:0}
]
},

{
id:51,
nombre:'Agua Fresca de Temporada',
descripcion:'Agua fresca del día',
precio:55,
imagen:'assets/menu/placeholder.jpg',
categoria:'Bebidas',
ingredientes:[],
extras:[]
}

]

      this.guardar()

    }

  }

  guardar(){
    localStorage.setItem('productos', JSON.stringify(this.productos))
  }

  getProductos(): Producto[]{
    return this.productos
  }

  agregarProducto(producto: Producto){

    producto.id = Date.now()   // genera id único

    this.productos.push(producto)

    this.guardar()

  }

  eliminarProducto(id:number){

    this.productos = this.productos.filter(p => p.id !== id)

    this.guardar()

  }

  actualizarProducto(producto:Producto){

    const index = this.productos.findIndex(p => p.id === producto.id)

    if(index !== -1){

      this.productos[index] = producto

      this.guardar()

    }

  }

}