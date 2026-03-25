import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../models/producto';
import { PromoService } from '../../services/promo.service'
import { Promo } from '../../models/promo'


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {

  promo!:Promo
  productos: Producto[] = [];

  constructor(
private productosService: ProductosService,
private promoService:PromoService
){

this.productos=this.productosService.getProductos()

this.promo=this.promoService.getPromo()

}

  // SOLO muestra los populares
  getPopulares() {
    return this.productos.filter(p => p.popular);
  }

}