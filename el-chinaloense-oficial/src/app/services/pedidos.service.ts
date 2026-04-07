import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  private API = 'https://elchinaloense-backend.onrender.com';

  constructor(private http: HttpClient) {}

  // 🔥 OBTENER PEDIDOS
  getPedidos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}/pedidos`);
  }

  // 🔥 CREAR PEDIDO
  guardarPedido(pedido: any): Observable<any> {
    return this.http.post(`${this.API}/pedidos`, pedido);
  }

  // 🔥 ACTUALIZAR ESTADO
  actualizarEstado(id: string, estado: string): Observable<any> {
    return this.http.put(`${this.API}/pedidos/${id}`, { estado });
  }

}