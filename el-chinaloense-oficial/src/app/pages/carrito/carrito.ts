import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { PedidosService } from '../../services/pedidos.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.html',
  styleUrls: ['./carrito.css']
})
export class CarritoComponent implements OnInit {

  items: any[] = [];

  constructor(
    private cartService: CartService,
    private pedidosService: PedidosService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cargarCarrito();
  }

  cargarCarrito() {
    this.items = this.cartService.getItems();
  }

  remove(index: number) {
    this.cartService.removeItem(index);
    this.cargarCarrito();
  }

  editarProducto(item: any, index: number) {

    const data = {
      producto: item,
      index: index
    };

    localStorage.setItem('editarProducto', JSON.stringify(data));

    this.router.navigate(['/menu']);
  }

  total() {
    return this.cartService.getTotal();
  }

  seguirComprando() {
    this.router.navigate(['/menu']);
  }

  realizarPedido() {

    if (this.items.length === 0) {
      alert("El carrito está vacío ❌");
      return;
    }

    const usuario = JSON.parse(localStorage.getItem('usuario') || 'null');

    const pedido = {
      cliente: usuario?.nombre || 'Cliente',
      usuarioId: usuario?._id || null,
      productos: this.items,
      total: this.total(),
      estado: 'pendiente',
      fecha: new Date().toISOString()
    };

    this.pedidosService.guardarPedido(pedido).subscribe({

      next: () => {

        alert("Pedido enviado al restaurante ✅🔥");

        this.cartService.clearCart();
        this.items = [];

        this.router.navigate(['/mis-pedidos']);
      },

      error: () => {
        alert("Error al enviar pedido ❌");
      }

    });

  }

}