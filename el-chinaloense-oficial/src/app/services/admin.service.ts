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

  // 🔥 FUNCIÓN PARA NORMALIZAR FECHA
  private esMismoDia(fechaPedido: string) {

    if (!fechaPedido) return false;

    const hoy = new Date();
    const fecha = new Date(fechaPedido);

    return (
      fecha.getDate() === hoy.getDate() &&
      fecha.getMonth() === hoy.getMonth() &&
      fecha.getFullYear() === hoy.getFullYear()
    );

  }

  // 🔥 PEDIDOS DE HOY
  getPedidosHoy(callback: (cantidad: number) => void) {

    this.pedidosService.getPedidos().subscribe(pedidos => {

      const pedidosHoy = pedidos.filter((p:any) =>
        this.esMismoDia(p.fecha)
      );

      callback(pedidosHoy.length);

    });

  }

  // 🔥 VENTAS DE HOY (SOLO ENTREGADOS)
  getVentasHoy(callback: (total: number) => void) {

    this.pedidosService.getPedidos().subscribe(pedidos => {

      const pedidosHoy = pedidos.filter((p:any) =>
        this.esMismoDia(p.fecha) && p.estado === 'entregado'
      );

      const total = pedidosHoy.reduce((sum:number, p:any) => {
        return sum + (p.total || 0);
      }, 0);

      callback(total);

    });

  }

  // 🔥 VENTAS DE LA SEMANA
  getVentasSemana(callback: (total:number)=>void) {

    this.pedidosService.getPedidos().subscribe(pedidos => {

      const hoy = new Date();
      const hace7 = new Date();
      hace7.setDate(hoy.getDate() - 7);

      const pedidosSemana = pedidos.filter((p:any) => {

        if(!p.fecha || p.estado !== 'entregado') return false;

        const fechaPedido = new Date(p.fecha);

        return fechaPedido >= hace7 && fechaPedido <= hoy;

      });

      const total = pedidosSemana.reduce((sum:number, p:any) => {
        return sum + (p.total || 0);
      }, 0);

      callback(total);

    });

  }

  // 🔥 VENTAS DEL MES (NUEVO BIEN HECHO)
  getVentasMes(callback: (total:number)=>void) {

    this.pedidosService.getPedidos().subscribe(pedidos => {

      const hoy = new Date();
      const mesActual = hoy.getMonth();
      const añoActual = hoy.getFullYear();

      const pedidosMes = pedidos.filter((p:any) => {

        if(!p.fecha || p.estado !== 'entregado') return false;

        const fechaPedido = new Date(p.fecha);

        return (
          fechaPedido.getMonth() === mesActual &&
          fechaPedido.getFullYear() === añoActual
        );

      });

      const total = pedidosMes.reduce((sum:number, p:any) => {
        return sum + (p.total || 0);
      }, 0);

      callback(total);

    });

  }

  // 🔥 TOTAL DE PLATILLOS
  getPlatillos(callback: (cantidad:number)=>void) {

    this.productosService.getProductos().subscribe(data => {
      callback(data.length);
    });

  }

  // 🔥 PEDIDOS PENDIENTES
  getPendientes(callback: (cantidad:number) => void) {

    this.pedidosService.getPedidos().subscribe(pedidos => {

      const pendientes = pedidos.filter((p:any) =>
        p.estado === 'pendiente'
      );

      callback(pendientes.length);

    });

  }

}