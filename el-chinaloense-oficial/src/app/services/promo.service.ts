import { Injectable } from '@angular/core';
import { Promo } from '../models/promo';

@Injectable({
  providedIn: 'root'
})
export class PromoService {

  promo:Promo={

    titulo:'Promoción del día',

    descripcion:'Ordena cualquier aguachile y recibe una bebida gratis',

    imagen:'assets/promo.jpg'

  }

  getPromo(){

    return this.promo

  }

  actualizarPromo(nuevaPromo:Promo){

    this.promo=nuevaPromo

  }

}