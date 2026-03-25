import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ProductosService } from '../../services/productos.service'
import { Producto } from '../../models/producto'

@Component({
selector:'app-admin-productos',
standalone:true,
imports:[CommonModule, FormsModule],
templateUrl:'./admin-productos.html',
styleUrls:['./admin-productos.css']
})

export class AdminProductosComponent implements OnInit{

productos:Producto[]=[]

busqueda:string=''

categorias:string[]=[
'Especialidades',
'Sopas',
'Aguachiles',
'Cócteles',
'Pescado al gusto',
'Ceviches',
'Tacos',
'Camarones al gusto',
'Bebidas'
]

modoEdicion:boolean=false
productoEditandoId:number|null=null

nuevoProducto:Producto={
 id:0,
 nombre:'',
 descripcion:'',
 precio:0,
 imagen:'',
 categoria:'',
 ingredientes:[],
 extras:[],
 popular:false
}

ingrediente=''
extraNombre=''
extraPrecio=0

constructor(private productosService:ProductosService){}

ngOnInit(){

this.productos=this.productosService.getProductos()

}

agregarIngrediente(){

if(this.ingrediente.trim()){

this.nuevoProducto.ingredientes.push(this.ingrediente.trim())

this.ingrediente=''

}

}

eliminarIngrediente(index:number){

this.nuevoProducto.ingredientes.splice(index,1)

}

agregarExtra(){

if(this.extraNombre.trim()){

this.nuevoProducto.extras.push({
nombre:this.extraNombre.trim(),
precio:this.extraPrecio
})

this.extraNombre=''
this.extraPrecio=0

}

}

eliminarExtra(index:number){

this.nuevoProducto.extras.splice(index,1)

}

subirImagen(event:any){

const file=event.target.files[0]

if(!file) return

const reader=new FileReader()

reader.onload=(e:any)=>{

this.nuevoProducto.imagen=e.target.result

}

reader.readAsDataURL(file)

}

guardarProducto(){

let idGuardado=0

if(this.modoEdicion){

this.productosService.actualizarProducto(this.nuevoProducto)

idGuardado=this.nuevoProducto.id

this.modoEdicion=false
this.productoEditandoId=null

}else{

this.nuevoProducto.id=Date.now()

this.productosService.agregarProducto(this.nuevoProducto)

idGuardado=this.nuevoProducto.id

}

this.productos=this.productosService.getProductos()

this.limpiarFormulario()

this.scrollAProducto(idGuardado)

}

editarProducto(p:Producto){

this.modoEdicion=true

this.productoEditandoId=p.id

this.nuevoProducto=structuredClone(p)

window.scrollTo({
top:0,
behavior:'smooth'
})

}

eliminarProducto(id:number){

this.productosService.eliminarProducto(id)

this.productos=this.productosService.getProductos()

}

scrollAProducto(id:number){

setTimeout(()=>{

const elemento=document.getElementById('producto-'+id)

if(elemento){

elemento.scrollIntoView({
behavior:'smooth'
})

}

},300)

}

getProductosFiltrados(cat:string){

return this.productos
.filter(p=>p.categoria===cat)
.filter(p=>p.nombre.toLowerCase().includes(this.busqueda.toLowerCase()))
.sort((a,b)=>a.nombre.localeCompare(b.nombre))

}

limpiarFormulario(){

this.nuevoProducto={
 id:0,
 nombre:'',
 descripcion:'',
 precio:0,
 imagen:'',
 categoria:'',
 ingredientes:[],
 extras:[],
 popular:false
}

this.ingrediente=''
this.extraNombre=''
this.extraPrecio=0

}

}