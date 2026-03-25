import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  pedidos:any[] = JSON.parse(localStorage.getItem('pedidos') || '[]');

  constructor(){

    this.limpiarPedidosAntiguos();

  }

  getPedidos(){
    return this.pedidos;
  }

  guardarPedido(pedido:any){

    pedido.id = Date.now();
    pedido.estado = 'pendiente';

    // pedido nuevo arriba
    this.pedidos.unshift(pedido);

    localStorage.setItem('pedidos', JSON.stringify(this.pedidos));

  }

  actualizarEstado(id:number, estado:string){

    const pedido = this.pedidos.find(p => p.id === id);

    if(pedido){
      pedido.estado = estado;
      localStorage.setItem('pedidos', JSON.stringify(this.pedidos));
    }

  }

  limpiarPedidosAntiguos(){

    const hoy = new Date().toLocaleDateString();

    this.pedidos = this.pedidos.filter(p => p.fecha === hoy);

    localStorage.setItem('pedidos', JSON.stringify(this.pedidos));

  }

}