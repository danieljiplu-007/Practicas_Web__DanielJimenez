import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-dashboard.html',
  styleUrls: ['./admin-dashboard.css']
})
export class AdminDashboardComponent implements OnInit {

  pedidosHoy = 0;
  ventasHoy = 0;
  platillos = 0;
  pendientes = 0;

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    this.pedidosHoy = this.adminService.getPedidosHoy();
    this.ventasHoy = this.adminService.getVentasHoy();
    this.platillos = this.adminService.getPlatillos();
    this.pendientes = this.adminService.getPendientes();
  }

}