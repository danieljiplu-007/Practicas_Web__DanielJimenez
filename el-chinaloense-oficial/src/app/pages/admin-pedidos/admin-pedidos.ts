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

  pedidos: any[] = [];

  constructor(private pedidosService: PedidosService) {}

  ngOnInit() {
    this.cargarPedidos();
  }

  cargarPedidos() {

    this.pedidosService.getPedidos().subscribe({
      next: (data) => {

        this.pedidos = data
          .filter(p => p.estado !== 'entregado')
          .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());

      },
      error: (err) => console.error('Error cargando pedidos:', err)
    });

  }

  cambiarEstado(id: string, estado: string) {

    this.pedidosService.actualizarEstado(id, estado).subscribe({
      next: () => this.cargarPedidos(),
      error: (err) => console.error('Error actualizando estado:', err)
    });

  }

}