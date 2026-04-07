import { Injectable } from '@angular/core';
import { PedidosService } from './pedidos.service';
import { ProductosService } from './productos.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private pedidosService: PedidosService,
    private productosService: ProductosService
  ) {}

  getPedidosHoy() {

    const pedidos = this.pedidosService.getPedidos();

    const hoy = new Date().toLocaleDateString();

    const pedidosHoy = pedidos.filter((p:any) => p.fecha === hoy);

    return pedidosHoy.length;

  }

  getVentasHoy() {

    const pedidos = this.pedidosService.getPedidos();

    const hoy = new Date().toLocaleDateString();

    const pedidosHoy = pedidos.filter((p:any) => p.fecha === hoy);

    return pedidosHoy.reduce((total:number, pedido:any) => {
      return total + pedido.total;
    }, 0);

  }

  // 🔥 CAMBIO IMPORTANTE
  getPlatillos(callback: (cantidad:number)=>void) {

    this.productosService.getProductos().subscribe(data => {
      callback(data.length)
    })

  }

  getPendientes() {

    const pedidos = this.pedidosService.getPedidos();

    return pedidos.filter((p:any) => p.estado === 'pendiente').length;

  }

}