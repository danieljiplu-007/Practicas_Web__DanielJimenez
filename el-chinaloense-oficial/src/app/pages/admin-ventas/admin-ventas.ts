import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosService } from '../../services/pedidos.service';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-admin-ventas',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './admin-ventas.html',
  styleUrls: ['./admin-ventas.css']
})
export class AdminVentasComponent implements OnInit {

  ventas:any[] = [];
  totalVentas = 0;

  filtro = 'semana';

  chart:any;

  constructor(private pedidosService: PedidosService){}

  ngOnInit(){
    this.cargarVentas();
  }

  cargarVentas(){

    this.pedidosService.getPedidos().subscribe(data => {

      let pedidos = data.filter((p:any) => p.estado === 'entregado');

      this.ventas = pedidos;

      this.totalVentas = pedidos.reduce((total:number, p:any)=>{
        return total + (p.total || 0);
      },0);

      this.generarGrafica(pedidos);

    });

  }

  generarGrafica(pedidos:any[]){

    const ventasPorDia:any = {};

    pedidos.forEach(p => {

      const fecha = new Date(p.fecha).toLocaleDateString();

      if(!ventasPorDia[fecha]){
        ventasPorDia[fecha] = 0;
      }

      ventasPorDia[fecha] += p.total;

    });

    const labels = Object.keys(ventasPorDia);
    const data = Object.values(ventasPorDia);

    if(this.chart){
      this.chart.destroy();
    }

    this.chart = new Chart('graficaVentas', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Ventas por día',
          data: data
        }]
      }
    });

  }

  cambiarFiltro(tipo:string){
    this.filtro = tipo;
    this.cargarVentas();
  }

}