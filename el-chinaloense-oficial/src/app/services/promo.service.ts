import { Injectable } from '@angular/core';
import { Promo } from '../models/promo';

@Injectable({
  providedIn: 'root'
})
export class PromoService {

  private STORAGE_KEY = 'promoDelDia'

  promo: Promo = {
    titulo: 'Promoción del día',
    descripcion: 'Ordena cualquier aguachile y recibe una bebida gratis',
    imagen: 'assets/promo.jpg'
  }

  constructor(){
    this.cargarPromo()
  }

 
  private cargarPromo(){

    try{

      const data = localStorage.getItem(this.STORAGE_KEY)

      if(data){
        this.promo = JSON.parse(data)
      }else{
        this.guardarPromo()
      }

    }catch(error){
      console.error('Error cargando promo:', error)
      this.guardarPromo()
    }

  }

 
  private guardarPromo(){
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.promo))
  }

 
  getPromo(){
    return this.promo
  }

  
  actualizarPromo(nuevaPromo: Promo){
    this.promo = nuevaPromo
    this.guardarPromo() 
  }

}