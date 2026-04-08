import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API = 'https://elchinaloense-backend.onrender.com';

  constructor(private http: HttpClient) {}

  login(email: string, password: string, callback: (rol:any)=>void){

    this.http.post(`${this.API}/login`, {
      correo: email,
      password: password
    }).subscribe((res:any) => {

      const usuario = res.usuario;

      let rol = 'cliente';

      if(usuario.correo === 'admin@admin.com'){
        rol = 'admin';
      }

      const usuarioFinal = {
        nombre: usuario.nombre,
        email: usuario.correo,
        rol: rol
      };

      localStorage.setItem('usuario', JSON.stringify(usuarioFinal));

      callback(rol);

    }, () => {

      alert('Correo o contraseña incorrectos');
      callback(null);

    });

  }

  registro(data: any){
    return this.http.post(`${this.API}/registro`, data);
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