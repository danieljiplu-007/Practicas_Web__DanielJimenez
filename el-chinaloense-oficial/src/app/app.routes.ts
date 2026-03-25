import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { MenuComponent } from './pages/menu/menu';
import { LoginComponent } from './pages/login/login';
import { RegistroComponent } from './pages/registro/registro';
import { CarritoComponent } from './pages/carrito/carrito';
import { MisPedidosComponent } from './pages/mis-pedidos/mis-pedidos';

import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard';
import { AdminProductosComponent } from './pages/admin-productos/admin-productos';
import { AdminPedidosComponent } from './pages/admin-pedidos/admin-pedidos';
import { AdminVentasComponent } from './pages/admin-ventas/admin-ventas';
import { AdminPromoComponent } from './pages/admin-promo/admin-promo';

import { adminGuard } from './guards/admin.guard';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [

  // CLIENTES
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },

  { path: 'login', component: LoginComponent, canActivate:[authGuard] },
  { path: 'registro', component: RegistroComponent, canActivate:[authGuard] },

  { path: 'carrito', component: CarritoComponent },
  { path: 'mis-pedidos', component: MisPedidosComponent },


  // ADMIN (PROTEGIDO)
  { path: 'admin', component: AdminDashboardComponent, canActivate:[adminGuard] },
  { path: 'admin-productos', component: AdminProductosComponent, canActivate:[adminGuard] },
  { path: 'admin-pedidos', component: AdminPedidosComponent, canActivate:[adminGuard] },
  { path: 'admin-ventas', component: AdminVentasComponent, canActivate:[adminGuard] },
  { path: 'admin-promociones', component: AdminPromoComponent, canActivate:[adminGuard] },


  // RUTA NO EXISTE
  { path: '**', redirectTo: '' }

];