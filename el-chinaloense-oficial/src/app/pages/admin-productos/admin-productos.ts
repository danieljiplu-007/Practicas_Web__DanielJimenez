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

  Date = Date // 🔥 FIX PARA HTML

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

  subiendoImagen:boolean=false

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
    this.productos = [...this.productosService.getProductos()]
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

  // 🔥 SUBIDA DEFINITIVA
  subirImagen(event:any){

    const file = event.target.files[0]
    if(!file) return

    this.subiendoImagen = true

    const formData = new FormData()
    formData.append('file', file)

    fetch('http://localhost:3000/upload',{
      method:'POST',
      body:formData
    })
    .then(res => res.json())
    .then(data => {

      console.log('URL:', data.url)

      if(data.url){
        this.nuevoProducto = {
          ...this.nuevoProducto,
          imagen: data.url
        }
      }

      this.subiendoImagen = false
    })
    .catch(err=>{
      console.error(err)
      this.subiendoImagen = false
    })
  }

  guardarProducto(){

    if(this.subiendoImagen){
      alert('Espera a que termine la imagen')
      return
    }

    if(!this.nuevoProducto.imagen){
      alert('Sube una imagen primero')
      return
    }

    if(this.modoEdicion){
      this.productosService.actualizarProducto(this.nuevoProducto)
    }else{
      this.productosService.agregarProducto(this.nuevoProducto)
    }

    this.productos = [...this.productosService.getProductos()]
    this.limpiarFormulario()
  }

  editarProducto(p:Producto){

  this.modoEdicion = true
  this.productoEditandoId = p.id

  // 🔥 CLON SEGURO
  this.nuevoProducto = JSON.parse(JSON.stringify(p))

  // 🔥 ESTO ES LO QUE TE FALTA (SCROLL ARRIBA)
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

  eliminarProducto(id:number){
    this.productosService.eliminarProducto(id)
    this.productos = [...this.productosService.getProductos()]
  }

  getProductosFiltrados(cat:string){
    return this.productos
      .filter(p=>p.categoria===cat)
      .filter(p=>p.nombre.toLowerCase().includes(this.busqueda.toLowerCase()))
      .sort((a,b)=>a.nombre.localeCompare(b.nombre))
  }

  limpiarFormulario(){
    this.nuevoProducto = {
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