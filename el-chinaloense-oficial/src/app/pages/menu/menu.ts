import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductosService } from '../../services/productos.service';
import { Producto, Extra } from '../../models/producto';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrls: ['./menu.css']
})
export class MenuComponent implements OnInit {

  platillos: Producto[] = []
  categorias: string[] = []
  categoriaSeleccionada:string = ''

  platilloSeleccionado: Producto | null = null
  extrasSeleccionados: Extra[] = []
  ingredientesQuitados: string[] = []

  indexEditar:number | null = null

  constructor(
    private carritoService: CartService,
    private productosService: ProductosService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(){

    this.productosService.getProductos().subscribe(data => {

      setTimeout(() => {
        this.platillos = data
      })

    })

    this.categorias = [
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

    this.categoriaSeleccionada = this.categorias[0]

    this.route.queryParams.subscribe(params => {

      if(params['categoria']){

        this.categoriaSeleccionada = params['categoria'];

        setTimeout(() => {
          const seccion = document.getElementById('categorias');
          if(seccion){
            seccion.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);

      }

    })

    const dataEditar = localStorage.getItem('editarProducto')

    if(dataEditar){

      const data = JSON.parse(dataEditar)
      const producto = data.producto

      this.seleccionarPlatillo(producto)

      this.extrasSeleccionados = producto.extrasSeleccionados || []
      this.ingredientesQuitados = producto.ingredientesQuitados || []
      this.indexEditar = data.index

      localStorage.removeItem('editarProducto')
    }

  }

  filtrarCategoria(cat:string){
    this.categoriaSeleccionada = cat
  }

  getPlatillosFiltrados(){
    return this.platillos.filter(
      p => p.categoria === this.categoriaSeleccionada
    )
  }

  getPopulares(){
    return this.platillos.filter(p => p.popular)
  }

  seleccionarPlatillo(platillo:Producto){
    this.platilloSeleccionado = platillo
    this.extrasSeleccionados = []
    this.ingredientesQuitados = []
  }

  cerrarDetalle(){
    this.platilloSeleccionado = null
    this.extrasSeleccionados = []
    this.ingredientesQuitados = []
  }

  toggleExtra(extra:Extra){

    const index = this.extrasSeleccionados.findIndex(
      e => e.nombre === extra.nombre
    )

    if(index === -1){
      this.extrasSeleccionados.push(extra)
    }else{
      this.extrasSeleccionados.splice(index,1)
    }

  }

  extraSeleccionado(extra: Extra): boolean {
    return this.extrasSeleccionados.some(e => e.nombre === extra.nombre);
  }

  toggleIngrediente(ing:string){

    const index = this.ingredientesQuitados.indexOf(ing)

    if(index === -1){
      this.ingredientesQuitados.push(ing)
    }else{
      this.ingredientesQuitados.splice(index,1)
    }

  }

  calcularPrecio(){

    if(!this.platilloSeleccionado) return 0

    let total = this.platilloSeleccionado.precio

    this.extrasSeleccionados.forEach(extra=>{
      total += extra.precio
    })

    return total

  }

  agregarAlCarrito(){

    if(this.platilloSeleccionado){

      const productoFinal = {
        ...this.platilloSeleccionado,
        extrasSeleccionados:this.extrasSeleccionados,
        ingredientesQuitados:this.ingredientesQuitados,
        precioFinal:this.calcularPrecio()
      }

      if(this.indexEditar !== null){

        this.carritoService.items[this.indexEditar] = productoFinal
        localStorage.setItem('cart', JSON.stringify(this.carritoService.items))
        this.indexEditar = null

      }else{

        this.carritoService.addToCart(productoFinal)

      }

      this.cerrarDetalle()
      this.router.navigate(['/carrito'])

    }

  }

}