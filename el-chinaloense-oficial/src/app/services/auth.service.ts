import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioActual: any = null;

  constructor() {}

  login(email: string, password: string){

    // ADMIN
    if(email === 'admin@chinaloense.com' && password === 'admin123'){

      this.usuarioActual = {
        nombre: 'Administrador',
        email: email,
        rol: 'admin'
      };

      localStorage.setItem('usuario', JSON.stringify(this.usuarioActual));

      return 'admin';
    }

    // BUSCAR USUARIOS REGISTRADOS
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    const usuarioEncontrado = usuarios.find((u:any) =>
      u.email === email && u.password === password
    );

    if(usuarioEncontrado){

      this.usuarioActual = {
        nombre: usuarioEncontrado.nombre,
        email: usuarioEncontrado.email,
        rol: 'cliente'
      };

      localStorage.setItem('usuario', JSON.stringify(this.usuarioActual));

      return 'cliente';
    }

    // SI NO COINCIDE
    alert('Correo o contraseña incorrectos');

    return null;

  }

  getUsuario(){
    return JSON.parse(localStorage.getItem('usuario') || 'null');
  }

  esAdmin(){
    const usuario = this.getUsuario();
    return usuario?.rol === 'admin';
  }

  estaLogueado(){
    return this.getUsuario() !== null;
  }

  logout(){
    localStorage.removeItem('usuario');
  }

}