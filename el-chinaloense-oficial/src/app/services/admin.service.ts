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

  getPedidosHoy(callback: (cantidad: number) => void) {

    this.pedidosService.getPedidos().subscribe(pedidos => {

      const hoy = new Date().toISOString().split('T')[0];

      const pedidosHoy = pedidos.filter((p:any) =>
        p.fecha?.startsWith(hoy)
      );

      callback(pedidosHoy.length);

    });

  }

  getVentasHoy(callback: (total: number) => void) {

    this.pedidosService.getPedidos().subscribe(pedidos => {

      const hoy = new Date().toISOString().split('T')[0];

      const total = pedidos
        .filter((p:any) => p.fecha?.startsWith(hoy))
        .reduce((sum:number, p:any) => sum + (p.total || 0), 0);

      callback(total);

    });

  }

  getPlatillos(callback: (cantidad:number)=>void) {

    this.productosService.getProductos().subscribe(data => {
      callback(data.length);
    });

  }

  getPendientes(callback: (cantidad:number) => void) {

    this.pedidosService.getPedidos().subscribe(pedidos => {

      const pendientes = pedidos.filter((p:any) =>
        p.estado === 'pendiente'
      );

      callback(pendientes.length);

    });

  }

}