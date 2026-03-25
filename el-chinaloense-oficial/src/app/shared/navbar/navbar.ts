import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {

  totalItems = 0;

  menuAbierto = false;

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private router: Router
  ){

    this.cartService.totalItems$.subscribe(total =>{
      this.totalItems = total;
    });

  }

  toggleMenu(){

    this.menuAbierto = !this.menuAbierto;

    this.router.navigate(['/menu']);

  }

  cerrarMenu(){
    this.menuAbierto = false;
  }

  logout(){
    this.authService.logout();
    this.menuAbierto = false;
    this.router.navigate(['/']);
  }

  estaLogueado(){
    return this.authService.getUsuario() !== null;
  }

  getUsuario(){
    return this.authService.getUsuario();
  }

  esAdmin(){
    return this.authService.esAdmin();
  }

  /* 🔹 CERRAR MENÚ SI SE HACE CLICK FUERA */

  @HostListener('document:click', ['$event'])
  clickFuera(event: Event){

    const target = event.target as HTMLElement;

    if(!target.closest('.dropdown')){
      this.menuAbierto = false;
    }

  }

}