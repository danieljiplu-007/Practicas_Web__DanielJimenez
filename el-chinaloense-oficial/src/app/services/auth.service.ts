import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API = 'https://elchinaloense-backend.onrender.com';

  constructor(private http: HttpClient) {}

  login(data:any){
    return this.http.post(`${this.API}/login`, data);
  }

  registro(data:any){
    return this.http.post(`${this.API}/registro`, data);
  }

  getUsuario(){
    return JSON.parse(localStorage.getItem('usuario') || 'null');
  }

  esAdmin(){
    const usuario = this.getUsuario();
    return usuario?.correo === 'admin@admin.com';
  }

  estaLogueado(){
    return this.getUsuario() !== null;
  }

  logout(){
    localStorage.removeItem('usuario');
  }

}