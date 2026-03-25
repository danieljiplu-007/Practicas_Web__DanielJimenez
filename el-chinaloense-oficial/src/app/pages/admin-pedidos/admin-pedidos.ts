import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosService } from '../../services/pedidos.service';

@Component({
  selector: 'app-admin-pedidos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-pedidos.html',
  styleUrls: ['./admin-pedidos.css']
})
export class AdminPedidosComponent {

  pedidos:any[] = [];

  constructor(private pedidosService: PedidosService){}

  ngOnInit(){

    this.cargarPedidos();

  }

  cargarPedidos(){

  this.pedidos = this.pedidosService
  .getPedidos()
  .filter((p:any) => p.estado !== 'entregado')
  .sort((a:any, b:any) => b.id - a.id);

}
  cambiarEstado(id:number, estado:string){

    this.pedidosService.actualizarEstado(id, estado);

    // refrescar lista
    this.cargarPedidos();

  }

}