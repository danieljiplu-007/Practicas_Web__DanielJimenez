import { Component, OnInit, ChangeDetectorRef } from '@angular/core'
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
  productoEditandoId:string|null=null
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

  constructor(
    private productosService:ProductosService,
    private cd:ChangeDetectorRef
  ){}

  ngOnInit(){
    this.cargarProductos()
  }

  cargarProductos(){
    this.productosService.getProductos().subscribe(data => {
      this.productos = [...data]
      this.cd.detectChanges()
    })
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
    const file = event.target.files[0]
    if(!file) return

    this.subiendoImagen = true

    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'menu_upload')

    fetch('https://api.cloudinary.com/v1_1/dqpmtzw8x/image/upload', {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(data => {
      if(data.secure_url){
        this.nuevoProducto.imagen = data.secure_url
        this.cd.detectChanges()
      }
      this.subiendoImagen = false
    })
    .catch(() => {
      this.subiendoImagen = false
    })
  }

  guardarProducto(){

    if(this.subiendoImagen) return
    if(!this.nuevoProducto.imagen) return

    if(this.modoEdicion && this.productoEditandoId){

      this.productosService.actualizarProducto(
        this.productoEditandoId,
        this.nuevoProducto
      ).subscribe(()=>{
        this.cargarProductos()
        this.limpiarFormulario()
      })

    }else{

      this.productosService.agregarProducto(this.nuevoProducto).subscribe(()=>{
        this.cargarProductos()
        this.limpiarFormulario()
      })

    }

  }

  editarProducto(p:any){
    this.modoEdicion = true
    this.productoEditandoId = p._id
    this.nuevoProducto = JSON.parse(JSON.stringify(p))

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  eliminarProducto(id:string){
    this.productosService.eliminarProducto(id).subscribe(()=>{
      this.cargarProductos()
    })
  }

  getProductosFiltrados(cat:string){
    return this.productos
      .filter(p=>p.categoria===cat)
      .filter(p=>p.nombre.toLowerCase().includes(this.busqueda.toLowerCase()))
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
    this.modoEdicion=false
    this.productoEditandoId=null
  }

}