import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-ventas',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './admin-ventas.html',
  styleUrls: ['./admin-ventas.css']
})
export class AdminVentasComponent {

  ventas:any[] = [];
  totalVentas = 0;

  ngOnInit(){

    const pedidos = JSON.parse(localStorage.getItem('pedidos') || '[]');

    this.ventas = pedidos;

    this.totalVentas = pedidos.reduce((total:any, pedido:any)=>{
      return total + pedido.total;
    },0);

  }

}